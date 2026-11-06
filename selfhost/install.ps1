$ErrorActionPreference='Stop'
$root='F:\XCR-Site'
$app=Join-Path $root 'app'
$private=Join-Path $root 'private'
$reportPath=Join-Path $root 'deployment-report.json'
$report=[ordered]@{started_at=(Get-Date).ToUniversalTime().ToString('o');status='running';phase='initializing';domain_changed=$false}
function Save-XcrReport { [IO.File]::WriteAllText($reportPath,($script:report|ConvertTo-Json -Depth 7),[Text.UTF8Encoding]::new($false)) }
function Set-XcrPhase([string]$phase){$script:report.phase=$phase;Save-XcrReport}
function Read-XcrEnv([string]$file){$values=@{};foreach($line in Get-Content -LiteralPath $file){if($line -match '^\s*([^#=]+)=(.*)$'){$values[$matches[1].Trim()]=$matches[2].Trim().Trim('"').Trim("'")}};return $values}
function Invoke-XcrSql([string]$database,[string]$sql){
 $info=[Diagnostics.ProcessStartInfo]::new();$info.FileName='F:\TaxiAssur\PostgreSQL\runtime\pgsql\bin\psql.exe';$info.Arguments='-h 127.0.0.1 -U postgres -d '+$database+' -X -q -t -A -v ON_ERROR_STOP=1';$info.UseShellExecute=$false;$info.CreateNoWindow=$true;$info.RedirectStandardInput=$true;$info.RedirectStandardOutput=$true;$info.RedirectStandardError=$true
 $process=[Diagnostics.Process]::Start($info);$output=$process.StandardOutput.ReadToEndAsync();$errors=$process.StandardError.ReadToEndAsync();$process.StandardInput.WriteLine($sql);$process.StandardInput.Close()
 if(!$process.WaitForExit(60000)){$process.Kill();throw 'Database operation timed out'}
 if($process.ExitCode -ne 0){$diagnostic=$errors.Result;foreach($value in @($config.rest_password,$config.web_password,$pgConfig.POSTGRES_PASSWORD)){if($value){$diagnostic=$diagnostic.Replace($value,'[secret]')}};[IO.File]::WriteAllText((Join-Path $root 'logs\database-error.log'),$diagnostic);throw ('Database operation failed in phase '+$script:report.phase)}
 return $output.Result.Trim()
}
function Random-XcrSecret { $bytes=New-Object byte[] 48;[Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes);return [Convert]::ToBase64String($bytes).TrimEnd('=').Replace('+','-').Replace('/','_') }
try{
 Save-XcrReport
 if(!(Test-Path -LiteralPath (Join-Path $app 'dist\index.html'))){throw 'Migrated site build missing'}
 New-Item -ItemType Directory -Path $private,(Join-Path $root 'logs'),(Join-Path $root 'backups') -Force|Out-Null
 & icacls.exe $private /inheritance:r /grant:r '*S-1-5-18:(OI)(CI)F' '*S-1-5-32-544:(OI)(CI)F' | Out-Null
 if($LASTEXITCODE -ne 0){throw 'Cannot protect runtime configuration'}
 Add-Type -AssemblyName System.Security
 $configPath=Join-Path $private 'runtime.dpapi'
 if(Test-Path -LiteralPath $configPath){$raw=[Security.Cryptography.ProtectedData]::Unprotect([IO.File]::ReadAllBytes($configPath),$null,[Security.Cryptography.DataProtectionScope]::LocalMachine);$config=[Text.Encoding]::UTF8.GetString($raw)|ConvertFrom-Json;[Array]::Clear($raw,0,$raw.Length)}
 else{$config=[pscustomobject]@{jwt_secret=(Random-XcrSecret);rest_password=(Random-XcrSecret);web_password=(Random-XcrSecret);smtp_password='';tunnel_token='';rest_database_url='';web_database_url=''}}
 Set-XcrPhase 'exclusive-port-preflight'
 $report.listening_ports=@(Get-NetTCPConnection -State Listen|Select-Object -ExpandProperty LocalPort -Unique|Sort-Object)
 $report.cleaned_processes=@()
 foreach($name in @('rest','web')){
  $pidFile=Join-Path $private ($name+'.pid')
  if(Test-Path -LiteralPath $pidFile){
   try{
    $record=Get-Content -LiteralPath $pidFile -Raw|ConvertFrom-Json
    $process=Get-Process -Id ([int]$record.id) -ErrorAction SilentlyContinue
    if($process -and $process.StartTime.ToUniversalTime().Ticks -eq [long]$record.started){
     $details=Get-CimInstance Win32_Process -Filter ('ProcessId='+[int]$record.id)
     if($details.CommandLine -notlike '*F:\XCR-Site\app\*'){throw 'Runtime process ownership could not be verified'}
     Stop-Process -Id $process.Id -ErrorAction Stop
     $report.cleaned_processes+=@{name=$name;id=$process.Id}
    }
    Remove-Item -LiteralPath $pidFile -ErrorAction Stop
   }catch{throw ('Owned runtime cleanup failed: '+$name)}
  }
 }
 Start-Sleep -Milliseconds 500
 $occupied=@(Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue|Where-Object LocalPort -In @(18896,18897))
 if($occupied.Count){throw 'Selected XCR ports are occupied; no listener started'}
 Save-XcrReport
 $secretEnvelope=Join-Path $root 'deployment\secrets.encrypted'
 if(Test-Path -LiteralPath $secretEnvelope){
  $privateKey=[Security.Cryptography.ProtectedData]::Unprotect([IO.File]::ReadAllBytes('F:\XCR-Continuity\private\migration-rsa.dpapi'),$null,[Security.Cryptography.DataProtectionScope]::LocalMachine)
  $rsa=[Security.Cryptography.RSACryptoServiceProvider]::new();$rsa.FromXmlString([Text.Encoding]::UTF8.GetString($privateKey));[Array]::Clear($privateKey,0,$privateKey.Length)
  $clear=$rsa.Decrypt([IO.File]::ReadAllBytes($secretEnvelope),$true);$secrets=[Text.Encoding]::UTF8.GetString($clear)|ConvertFrom-Json;[Array]::Clear($clear,0,$clear.Length);$rsa.Dispose()
  if($secrets.smtp_password){$config.smtp_password=$secrets.smtp_password};if($secrets.tunnel_token){$config.tunnel_token=$secrets.tunnel_token}
 }
 Set-XcrPhase 'database-preflight'
 $pgConfig=Read-XcrEnv 'F:\TaxiAssur\Secrets\postgresql.env';$env:PGPASSWORD=$pgConfig.POSTGRES_PASSWORD;$env:PGCLIENTENCODING='UTF8'
 $sourceTables=[int](Invoke-XcrSql 'supa_cfuzzizrfiqz' "SELECT count(*) FROM pg_tables WHERE schemaname='public'")
 $sourceUsers=[int](Invoke-XcrSql 'supa_cfuzzizrfiqz' 'SELECT count(*) FROM auth.users')
 if($sourceTables -lt 90 -or $sourceUsers -lt 1){throw 'Restored XCR database does not match expected inventory'}
 $report.source=@{database='supa_cfuzzizrfiqz';tables=$sourceTables;users=$sourceUsers}
 Set-XcrPhase 'database-clone'
 if((Invoke-XcrSql postgres "SELECT 1 FROM pg_database WHERE datname='xcr_site'") -ne '1'){Invoke-XcrSql postgres 'CREATE DATABASE xcr_site WITH TEMPLATE supa_cfuzzizrfiqz'|Out-Null}
 foreach($role in @(@{name='xcr_site_rest';password=$config.rest_password},@{name='xcr_site_web';password=$config.web_password})){
  $name=$role.name;$password=$role.password
  Invoke-XcrSql postgres ("DO `$`$ BEGIN IF NOT EXISTS(SELECT 1 FROM pg_roles WHERE rolname='$name') THEN CREATE ROLE $name LOGIN NOINHERIT; END IF; END `$`$; ALTER ROLE $name PASSWORD '$password';")|Out-Null
 }
 Invoke-XcrSql postgres 'GRANT anon,authenticated TO xcr_site_rest; GRANT CONNECT ON DATABASE xcr_site TO xcr_site_rest,xcr_site_web;'|Out-Null
 Set-XcrPhase 'native-schema'
 Invoke-XcrSql xcr_site ([IO.File]::ReadAllText((Join-Path $app 'database.sql')))|Out-Null
 $config.rest_database_url='postgres://xcr_site_rest:'+$config.rest_password+'@127.0.0.1:5432/xcr_site'
 $config.web_database_url='postgres://xcr_site_web:'+$config.web_password+'@127.0.0.1:5432/xcr_site'
 $protected=[Security.Cryptography.ProtectedData]::Protect([Text.Encoding]::UTF8.GetBytes(($config|ConvertTo-Json -Compress)),$null,[Security.Cryptography.DataProtectionScope]::LocalMachine)
 [IO.File]::WriteAllBytes($configPath,$protected)
 Set-XcrPhase 'startup'
 & powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File (Join-Path $app 'start.ps1')
 if($LASTEXITCODE -ne 0){throw 'Native services did not start'}
 $deadline=(Get-Date).AddSeconds(45);$health=$null
 do{try{$health=Invoke-RestMethod -Uri 'http://127.0.0.1:18896/health' -TimeoutSec 3;if($health.ok -and $health.site -eq 'xcr.fr'){break}}catch{};Start-Sleep -Seconds 2}while((Get-Date)-lt$deadline)
 if(!$health.ok -or $health.site -ne 'xcr.fr' -or $health.tables -lt $sourceTables -or $health.users -ne $sourceUsers){throw 'Native health verification failed'}
 $report.health=$health
 Set-XcrPhase 'anonymous-access-check'
 try{$public=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:18896/api/platform/rest/v1/blog_posts?select=id&limit=1' -TimeoutSec 10}
 catch{try{$reader=[IO.StreamReader]::new($_.Exception.Response.GetResponseStream());$report.public_api_error=$reader.ReadToEnd();$reader.Dispose()}catch{};throw 'Public content API did not pass verification'}
 if($public.StatusCode -ne 200){throw 'Public content unavailable'}
 try{$sensitive=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:18896/api/platform/rest/v1/leads?select=id&limit=1' -TimeoutSec 10;throw 'Anonymous access to private leads unexpectedly succeeded'}catch{if($_.Exception.Response.StatusCode.value__ -ne 401){throw 'Private data access check failed'}}
 Set-XcrPhase 'form-transaction-check'
 $leadCountBefore=Invoke-XcrSql xcr_site 'SELECT count(*) FROM public.leads'
 Invoke-XcrSql xcr_site @'
BEGIN;
SELECT * FROM xcr_private.submit_lead('{"first_name":"Validation","last_name":"XCR","email":"migration-test@example.invalid","form_type":"migration-validation","form_data":{"test":true}}'::jsonb);
ROLLBACK;
'@|Out-Null
 if((Invoke-XcrSql xcr_site 'SELECT count(*) FROM public.leads') -ne $leadCountBefore){throw 'Form validation did not roll back cleanly'}
 $report.form_transaction_verified=$true;$report.test_email_sent=$false
 Set-XcrPhase 'web-routing'
 $caddyFile='F:\immeubleassur-caddy\Caddyfile'
 $caddyOriginal=[IO.File]::ReadAllText($caddyFile)
 if($caddyOriginal -notmatch '# XCR-SITE-NATIVE-BEGIN'){
  $snippet=@'

# XCR-SITE-NATIVE-BEGIN
xcr.fr, www.xcr.fr, xcr-migration.xcr.fr {
 tls F:/immeubleassur-caddy/tls/cloudflare-origin.pem F:/immeubleassur-caddy/tls/cloudflare-origin.key
 encode zstd gzip
 reverse_proxy 127.0.0.1:18896
}
# XCR-SITE-NATIVE-END
'@
  $candidate=Join-Path $root 'deployment\Caddyfile.candidate'
  [IO.File]::WriteAllText($candidate,$caddyOriginal+"`r`n"+$snippet+"`r`n",[Text.UTF8Encoding]::new($false))
  $savedPreference=$ErrorActionPreference;$ErrorActionPreference='Continue'
  try{& 'F:\immeubleassur-caddy\caddy.exe' validate --config $candidate --adapter caddyfile 2>&1|Out-File (Join-Path $root 'logs\caddy-validation.log') -Encoding UTF8;$caddyCode=$LASTEXITCODE}finally{$ErrorActionPreference=$savedPreference}
  if($caddyCode -ne 0){throw 'Web route configuration validation failed'}
  $backup=Join-Path $root 'deployment\Caddyfile.before-xcr'
  if(!(Test-Path -LiteralPath $backup)){[IO.File]::WriteAllText($backup,$caddyOriginal,[Text.UTF8Encoding]::new($false))}
  if([IO.File]::ReadAllText($caddyFile) -ne $caddyOriginal){throw 'Shared web configuration changed concurrently; retry required'}
  [IO.File]::WriteAllText($caddyFile,[IO.File]::ReadAllText($candidate),[Text.UTF8Encoding]::new($false))
  $savedPreference=$ErrorActionPreference;$ErrorActionPreference='Continue'
  try{& 'F:\immeubleassur-caddy\caddy.exe' reload --config $caddyFile --adapter caddyfile 2>&1|Out-File (Join-Path $root 'logs\caddy-reload.log') -Encoding UTF8;$caddyCode=$LASTEXITCODE}finally{$ErrorActionPreference=$savedPreference}
  if($caddyCode -ne 0){[IO.File]::WriteAllText($caddyFile,$caddyOriginal,[Text.UTF8Encoding]::new($false));throw 'Web route reload failed; configuration restored'}
 }
 Set-XcrPhase 'scheduled-startup'
 $principal=New-ScheduledTaskPrincipal -UserId 'SYSTEM' -LogonType ServiceAccount -RunLevel Highest
 $settings=New-ScheduledTaskSettingsSet -StartWhenAvailable -MultipleInstances IgnoreNew -ExecutionTimeLimit (New-TimeSpan -Minutes 2)
 $trigger=New-ScheduledTaskTrigger -Once -At (Get-Date).AddMinutes(1) -RepetitionInterval (New-TimeSpan -Minutes 1) -RepetitionDuration (New-TimeSpan -Days 3650)
 $action=New-ScheduledTaskAction -Execute 'powershell.exe' -Argument '-NoProfile -NonInteractive -ExecutionPolicy Bypass -File F:\XCR-Site\app\start.ps1'
 Register-ScheduledTask -TaskName 'XCR Site Native Runtime' -Principal $principal -Settings $settings -Action $action -Trigger @((New-ScheduledTaskTrigger -AtStartup),$trigger) -Force|Out-Null
 $backupAction=New-ScheduledTaskAction -Execute 'powershell.exe' -Argument '-NoProfile -NonInteractive -ExecutionPolicy Bypass -File F:\XCR-Site\app\backup.ps1'
 Register-ScheduledTask -TaskName 'XCR Site Native Backup' -Principal $principal -Settings $settings -Action $backupAction -Trigger (New-ScheduledTaskTrigger -Daily -At '03:45') -Force|Out-Null
 Set-XcrPhase 'backup'
 & powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File (Join-Path $app 'backup.ps1')
 if($LASTEXITCODE -ne 0){throw 'Initial database backup failed'}
 $report.status='ready';$report.phase='ready-for-cloudflare';$report.smtp_configured=[bool]$config.smtp_password;$report.tunnel_configured=[bool]$config.tunnel_token
}catch{$report.status='failed';$report.error=$_.Exception.Message;$report.line=$_.InvocationInfo.ScriptLineNumber}
finally{$report.finished_at=(Get-Date).ToUniversalTime().ToString('o');Save-XcrReport;Remove-Item Env:PGPASSWORD -ErrorAction SilentlyContinue}
if($report.status -ne 'ready'){exit 1}
