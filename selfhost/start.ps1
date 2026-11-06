$ErrorActionPreference='Stop'
$root='F:\XCR-Site'
$app=Join-Path $root 'app'
$private=Join-Path $root 'private'
Add-Type -AssemblyName System.Security
$bytes=[Security.Cryptography.ProtectedData]::Unprotect([IO.File]::ReadAllBytes((Join-Path $private 'runtime.dpapi')),$null,[Security.Cryptography.DataProtectionScope]::LocalMachine)
$config=[Text.Encoding]::UTF8.GetString($bytes)|ConvertFrom-Json
[Array]::Clear($bytes,0,$bytes.Length)
$logs=Join-Path $root 'logs'
New-Item -ItemType Directory -Path $logs -Force|Out-Null
function Start-XcrProcess([string]$name,[string]$file,[string]$arguments,[hashtable]$variables){
 $pidFile=Join-Path $private ($name+'.pid')
 if(Test-Path -LiteralPath $pidFile){try{$stored=Get-Content -LiteralPath $pidFile -Raw|ConvertFrom-Json;$running=Get-Process -Id ([int]$stored.id) -ErrorAction SilentlyContinue;if($running -and $running.StartTime.ToUniversalTime().Ticks -eq [long]$stored.started){return}}catch{}}
 $variables['PATH']='F:\TaxiAssur\PostgreSQL\runtime\pgsql\bin;'+$env:PATH
 $previous=@{}
 try{
  foreach($key in $variables.Keys){$previous[$key]=[Environment]::GetEnvironmentVariable($key,'Process');[Environment]::SetEnvironmentVariable($key,[string]$variables[$key],'Process')}
  $options=@{FilePath=$file;WorkingDirectory=$app;WindowStyle='Hidden';PassThru=$true;RedirectStandardOutput=(Join-Path $logs ($name+'.stdout.log'));RedirectStandardError=(Join-Path $logs ($name+'.stderr.log'))}
  if($arguments){$options.ArgumentList=$arguments}
  $process=Start-Process @options
 }finally{foreach($key in $previous.Keys){[Environment]::SetEnvironmentVariable($key,$previous[$key],'Process')}}
 [IO.File]::WriteAllText($pidFile,(@{id=$process.Id;started=$process.StartTime.ToUniversalTime().Ticks}|ConvertTo-Json -Compress))
}
$restVars=@{PGRST_DB_URI=$config.rest_database_url;PGRST_DB_SCHEMAS='public';PGRST_DB_ANON_ROLE='anon';PGRST_JWT_SECRET=$config.jwt_secret;PGRST_SERVER_HOST='127.0.0.1';PGRST_SERVER_PORT='18897';PGRST_DB_MAX_ROWS='10000'}
Start-XcrProcess 'rest' (Join-Path $app 'runtime\postgrest.exe') '' $restVars
$restReady=$false;$restDeadline=(Get-Date).AddSeconds(25)
do{try{$probe=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:18897/blog_posts?select=id&limit=0' -TimeoutSec 2;if($probe.StatusCode -eq 200){$restReady=$true;break}}catch{};Start-Sleep -Milliseconds 500}while((Get-Date)-lt$restDeadline)
if(!$restReady){throw 'The XCR database API is not ready'}
$webVars=@{XCR_DATABASE_URL=$config.web_database_url;XCR_JWT_SECRET=$config.jwt_secret;XCR_HOST='127.0.0.1';XCR_PORT='18896';XCR_REST_ORIGIN='http://127.0.0.1:18897';XCR_SMTP_HOST='mail.xcr.fr';XCR_SMTP_PORT='465';XCR_SMTP_SECURE='true';XCR_SMTP_USER='contact@xcr.fr';XCR_SMTP_PASSWORD=$config.smtp_password}
Start-XcrProcess 'web' 'C:\Program Files\nodejs\node.exe' ('"'+(Join-Path $app 'server.mjs')+'"') $webVars
if($config.tunnel_token){Start-XcrProcess 'tunnel' 'C:\Cloudflared\bin\cloudflared.exe' 'tunnel --no-autoupdate run' @{TUNNEL_TOKEN=$config.tunnel_token}}
