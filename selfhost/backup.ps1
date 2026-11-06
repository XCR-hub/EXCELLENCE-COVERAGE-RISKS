$ErrorActionPreference='Stop'
$config=@{};foreach($line in Get-Content -LiteralPath 'F:\TaxiAssur\Secrets\postgresql.env'){if($line -match '^\s*([^#=]+)=(.*)$'){$config[$matches[1].Trim()]=$matches[2].Trim().Trim('"').Trim("'")}}
$env:PGPASSWORD=$config.POSTGRES_PASSWORD
try{
 $dir='F:\XCR-Site\backups';New-Item -ItemType Directory -Path $dir -Force|Out-Null
 $file=Join-Path $dir ('xcr-site-'+(Get-Date -Format 'yyyyMMdd-HHmmss')+'.dump')
 & 'F:\TaxiAssur\PostgreSQL\runtime\pgsql\bin\pg_dump.exe' -h 127.0.0.1 -U postgres -d xcr_site -Fc -f $file
 if($LASTEXITCODE -ne 0){throw 'XCR database backup failed'}
 [ordered]@{ok=$true;at=(Get-Date).ToUniversalTime().ToString('o');file=$file;sha256=(Get-FileHash -LiteralPath $file -Algorithm SHA256).Hash}|ConvertTo-Json|Set-Content -LiteralPath 'F:\XCR-Site\logs\last-backup.json' -Encoding UTF8
}finally{Remove-Item Env:PGPASSWORD -ErrorAction SilentlyContinue}
