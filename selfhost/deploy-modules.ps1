# Run as SYSTEM on SERVEUR-XCR after isolated validation. No shared proxy changes.
$ErrorActionPreference='Stop'
$root='F:\XCR-Site';$app=Join-Path $root 'app';$report=[ordered]@{status='running';at=(Get-Date).ToUniversalTime().ToString('o')};$taskDisabled=$false;$changed=$false;$saved=$null
function Stop-XcrWeb{
 $pidFile=Join-Path $root 'private\web.pid'
 if(Test-Path -LiteralPath $pidFile){$record=Get-Content -LiteralPath $pidFile -Raw|ConvertFrom-Json;$process=Get-Process -Id ([int]$record.id) -ErrorAction SilentlyContinue
  if($process -and $process.StartTime.ToUniversalTime().Ticks -eq [long]$record.started){$details=Get-CimInstance Win32_Process -Filter ('ProcessId='+[int]$record.id);if($details.CommandLine -notlike '*F:\XCR-Site\app\server.mjs*'){throw 'XCR web process ownership mismatch'};Stop-Process -Id $process.Id -ErrorAction Stop}
  Remove-Item -LiteralPath $pidFile
 }
}
function Assert-XcrReady{
 $deadline=(Get-Date).AddSeconds(30)
 do{try{$health=Invoke-RestMethod -Uri 'http://127.0.0.1:18896/health' -TimeoutSec 3;if($health.ok -and $health.site -eq 'xcr.fr'){return $health}}catch{};Start-Sleep -Milliseconds 500}while((Get-Date)-lt$deadline)
 throw 'XCR health check failed'
}
try{
 $qa=Get-Content -LiteralPath (Join-Path $root 'modules-verification.json') -Raw|ConvertFrom-Json;if($qa.status -ne 'passed'){throw 'Isolated validation has not passed'}
 $release=Get-Content -LiteralPath (Join-Path $root 'deployment\modules-release.json') -Raw|ConvertFrom-Json
 if($release.commit -notmatch '^[a-f0-9]{40}$'){throw 'Invalid release commit'}
 $archive=Join-Path $root 'deployment\modules-source.tar.gz'
 if((Get-FileHash -LiteralPath $archive -Algorithm SHA256).Hash.ToLowerInvariant() -ne $release.sha256){throw 'Source archive integrity mismatch'}
 $source=Join-Path $root ('source-'+$release.commit.Substring(0,7));New-Item -ItemType Directory -Path $source -Force|Out-Null
 & tar.exe -xzf $archive -C $source;if($LASTEXITCODE -ne 0){throw 'Source extraction failed'}
 $env:XCR_COMMIT=$release.commit
 & 'C:\Program Files\nodejs\node.exe' (Join-Path $source 'selfhost\build.mjs');if($LASTEXITCODE -ne 0){throw 'Release build failed'}
 & powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File (Join-Path $app 'backup.ps1');if($LASTEXITCODE -ne 0){throw 'Pre-deployment backup failed'}
 $saved=Join-Path $root ('deployment\app-before-'+(Get-Date -Format 'yyyyMMdd-HHmmss')+'.tar.gz')
 & tar.exe -czf $saved -C $app .;if($LASTEXITCODE -ne 0){throw 'Runtime rollback archive failed'}
 $pgSettings=@{};foreach($line in Get-Content -LiteralPath 'F:\TaxiAssur\Secrets\postgresql.env'){if($line -match '^\s*([^#=]+)=(.*)$'){$pgSettings[$matches[1].Trim()]=$matches[2].Trim().Trim('"').Trim("'")}}
 $env:PGPASSWORD=$pgSettings.POSTGRES_PASSWORD
 & 'F:\TaxiAssur\PostgreSQL\runtime\pgsql\bin\psql.exe' -h 127.0.0.1 -U postgres -d xcr_site -X -q -v ON_ERROR_STOP=1 -f (Join-Path $source 'selfhost\modules.sql')
 if($LASTEXITCODE -ne 0){throw 'Native module schema installation failed'}
 $documents=Join-Path $root 'documents';New-Item -ItemType Directory -Path $documents -Force|Out-Null
 & icacls.exe $documents /inheritance:r /grant:r '*S-1-5-18:(OI)(CI)F' '*S-1-5-32-544:(OI)(CI)F'|Out-Null;if($LASTEXITCODE -ne 0){throw 'Document ACL failed'}
 Disable-ScheduledTask -TaskName 'XCR Site Native Runtime'|Out-Null;$taskDisabled=$true
 Stop-XcrWeb;$changed=$true
 Get-ChildItem -LiteralPath (Join-Path $source 'selfhost') -File|Copy-Item -Destination $app -Force
 Copy-Item -LiteralPath (Join-Path $source 'selfhost\dist') -Destination $app -Recurse -Force
 & tar.exe -xzf (Join-Path $root 'deployment\modules-dependencies.tgz') -C $app;if($LASTEXITCODE -ne 0){throw 'Dependency extraction failed'}
 & powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File (Join-Path $app 'start.ps1');if($LASTEXITCODE -ne 0){throw 'Runtime start failed'}
 $report.health=Assert-XcrReady
 $version=Invoke-RestMethod -Uri 'http://127.0.0.1:18896/deploy-info.json' -TimeoutSec 5;if($version.commit -ne $release.commit){throw 'Runtime commit mismatch'}
 try{Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:18896/api/platform/rest/v1/leads?select=id&limit=1' -TimeoutSec 5|Out-Null;throw 'Private access unexpectedly allowed'}catch{if($_.Exception.Response.StatusCode.value__ -ne 401){throw 'Private access protection check failed'}}
 & powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File (Join-Path $app 'backup.ps1');if($LASTEXITCODE -ne 0){throw 'Module backup failed'}
 $report.status='ready';$report.commit=$release.commit;$report.source=$source;$report.backup=$saved;$report.qa_checks=$qa.checks.Count
 [IO.File]::WriteAllText((Join-Path $root 'source-version.json'),(@{commit=$release.commit;source=$source;at=(Get-Date).ToUniversalTime().ToString('o')}|ConvertTo-Json),[Text.UTF8Encoding]::new($false))
}catch{
 $report.status='failed';$report.error=$_.Exception.Message;$report.line=$_.InvocationInfo.ScriptLineNumber
 if($changed -and $saved){try{Stop-XcrWeb;& tar.exe -xzf $saved -C $app;if($LASTEXITCODE -ne 0){throw 'Rollback extraction failed'};& powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File (Join-Path $app 'start.ps1');$report.rollback_health=Assert-XcrReady;$report.rolled_back=$true}catch{$report.rollback_error=$_.Exception.Message}}
}finally{
 if($taskDisabled){Enable-ScheduledTask -TaskName 'XCR Site Native Runtime'|Out-Null}
 Remove-Item Env:PGPASSWORD -ErrorAction SilentlyContinue;Remove-Item Env:XCR_COMMIT -ErrorAction SilentlyContinue
 [IO.File]::WriteAllText((Join-Path $root 'modules-deployment.json'),($report|ConvertTo-Json -Depth 6),[Text.UTF8Encoding]::new($false))
}
if($report.status -ne 'ready'){exit 1}
