[CmdletBinding()]
param(
    [string]$ReportPath = (Join-Path $PSScriptRoot 'Dernier-controle-sitemaps.csv')
)

$ErrorActionPreference = 'Stop'
$sites = [ordered]@{
    'XCR' = 'xcr.fr'
    'SCI Assur' = 'sciassur.com'
    'Immeuble Assur' = 'immeubleassur.com'
    'Assur Photovoltaique' = 'assurphotovoltaique.com'
    'TaxiAssur' = 'taxiassur.com'
}
$checkedAt = [DateTimeOffset]::UtcNow.ToString('o')
$failure = $false

function Get-PublicText([uri]$Url) {
    $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 15 -MaximumRedirection 0
    if ($response.StatusCode -ne 200) {
        throw "HTTP $($response.StatusCode)"
    }
    return $response.Content
}

$rows = foreach ($brand in $sites.Keys) {
    $domain = $sites[$brand]
    $robots = "https://$domain/robots.txt"
    try {
        $declarations = @(
            [regex]::Matches((Get-PublicText $robots), '(?im)^Sitemap:[ \t]*(\S+)') |
                ForEach-Object { $_.Groups[1].Value } |
                Select-Object -Unique
        )
        if ($declarations.Count -eq 0) {
            throw 'Aucune declaration Sitemap'
        }
    } catch {
        $failure = $true
        [pscustomobject]@{UTC=$checkedAt; Marque=$brand; URL=$robots; Type='robots'; Entrees=$null; HorsDomaine=$null; Doublons=$null; Etat='Erreur'; Detail=$_.Exception.Message}
        continue
    }

    foreach ($declaration in $declarations) {
        try {
            $url = [uri]$declaration
            if (-not $url.IsAbsoluteUri -or $url.Scheme -ne 'https' -or $url.Host -ne $domain -or $url.UserInfo -or -not $url.IsDefaultPort) {
                throw 'Adresse de sitemap hors domaine HTTPS attendu'
            }
            $settings = [System.Xml.XmlReaderSettings]::new()
            $settings.DtdProcessing = [System.Xml.DtdProcessing]::Prohibit
            $settings.MaxCharactersInDocument = 55MB
            $source = [IO.StringReader]::new((Get-PublicText $url))
            try {
                $reader = [System.Xml.XmlReader]::Create($source, $settings)
                try {
                    $xml = [System.Xml.XmlDocument]::new()
                    $xml.Load($reader)
                } finally {
                    $reader.Dispose()
                }
            } finally {
                $source.Dispose()
            }
            $kind = $xml.DocumentElement.LocalName
            if ($kind -notin @('urlset', 'sitemapindex') -or $xml.DocumentElement.NamespaceURI -ne 'http://www.sitemaps.org/schemas/sitemap/0.9') {
                throw 'Racine XML de sitemap invalide'
            }
            $items = @($xml.SelectNodes("/*/*/*[local-name()='loc']") | ForEach-Object InnerText)
            $seen = [Collections.Generic.HashSet[string]]::new([StringComparer]::Ordinal)
            $foreign = 0
            $duplicates = 0
            foreach ($item in $items) {
                $parsed = $null
                if (-not [uri]::TryCreate($item, [UriKind]::Absolute, [ref]$parsed) -or $parsed.Scheme -ne 'https' -or $parsed.Host -ne $domain -or $parsed.UserInfo -or -not $parsed.IsDefaultPort) {
                    $foreign++
                }
                if (-not $seen.Add($item)) {
                    $duplicates++
                }
            }
            $state = 'OK'
            if ($duplicates -or $foreign -or $items.Count -eq 0) {
                $state = 'A verifier'
                $failure = $true
            }
            [pscustomobject]@{UTC=$checkedAt; Marque=$brand; URL=$declaration; Type=$kind; Entrees=$items.Count; HorsDomaine=$foreign; Doublons=$duplicates; Etat=$state; Detail=''}
        } catch {
            $failure = $true
            [pscustomobject]@{UTC=$checkedAt; Marque=$brand; URL=$declaration; Type='sitemap'; Entrees=$null; HorsDomaine=$null; Doublons=$null; Etat='Erreur'; Detail=$_.Exception.Message}
        }
    }
}
$rows | Export-Csv -LiteralPath $ReportPath -Delimiter ';' -NoTypeInformation -Encoding UTF8
$rows | Select-Object Marque, URL, Entrees, Etat | Format-Table -AutoSize
if ($failure) { exit 1 }
