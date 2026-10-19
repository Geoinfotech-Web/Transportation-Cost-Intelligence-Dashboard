$ErrorActionPreference = "Stop"

$outputPath = Join-Path $PSScriptRoot "..\public\data\nigeria_fuel_stations.json"
$overpassUrls = @(
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter"
)

$query = @"
[out:json][timeout:180];
area["ISO3166-1"="NG"][admin_level=2]->.nigeria;
(
  node["amenity"="fuel"](area.nigeria);
  way["amenity"="fuel"](area.nigeria);
  relation["amenity"="fuel"](area.nigeria);
);
out center tags;
"@

$body = "data=$([System.Uri]::EscapeDataString($query))"
$response = $null
$lastError = $null

foreach ($overpassUrl in $overpassUrls) {
  try {
    $response = Invoke-RestMethod `
      -Method Post `
      -Uri $overpassUrl `
      -Body $body `
      -ContentType "application/x-www-form-urlencoded" `
      -UserAgent "Nigeria PMS Dashboard data fetcher (OpenStreetMap Overpass API)" `
      -TimeoutSec 240
    break
  } catch {
    $lastError = $_
    Write-Warning "Failed to fetch from $overpassUrl"
  }
}

if ($null -eq $response) {
  throw $lastError
}

$stations = @(
  foreach ($element in $response.elements) {
    $lat = $null
    $lon = $null

    if ($element.type -eq "node") {
      $lat = $element.lat
      $lon = $element.lon
    } elseif ($element.center) {
      $lat = $element.center.lat
      $lon = $element.center.lon
    }

    if ($null -eq $lat -or $null -eq $lon) {
      continue
    }

    [PSCustomObject]@{
      id = "$($element.type)/$($element.id)"
      osmType = $element.type
      osmId = $element.id
      name = $element.tags.name
      brand = $element.tags.brand
      operator = $element.tags.operator
      state = $element.tags.'addr:state'
      city = $element.tags.'addr:city'
      address = $element.tags.'addr:full'
      latitude = [double]$lat
      longitude = [double]$lon
      tags = $element.tags
    }
  }
)

$payload = [PSCustomObject]@{
  source = "OpenStreetMap Overpass API"
  generatedAt = (Get-Date).ToUniversalTime().ToString("o")
  country = "Nigeria"
  query = $query
  count = $stations.Count
  stations = $stations
}

$payload | ConvertTo-Json -Depth 20 | Set-Content -Path $outputPath -Encoding UTF8
Write-Host "Wrote $($stations.Count) fuel stations to $outputPath"
