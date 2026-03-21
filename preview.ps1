param(
  [int]$Port = 8080
)

$ErrorActionPreference = "Stop"

function Test-LocalPort {
  param(
    [int]$PortToCheck
  )

  try {
    $client = New-Object System.Net.Sockets.TcpClient
    $async = $client.BeginConnect("127.0.0.1", $PortToCheck, $null, $null)
    $connected = $async.AsyncWaitHandle.WaitOne(300)

    if (-not $connected) {
      $client.Close()
      return $false
    }

    $client.EndConnect($async)
    $client.Close()
    return $true
  } catch {
    return $false
  }
}

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$url = "http://localhost:$Port"

if (-not (Test-LocalPort -PortToCheck $Port)) {
  $pythonCommand = if (Get-Command py -ErrorAction SilentlyContinue) {
    "py -m http.server $Port"
  } elseif (Get-Command python -ErrorAction SilentlyContinue) {
    "python -m http.server $Port"
  } else {
    throw "Python launcher was not found. Install Python or run a local static server manually."
  }

  $escapedRoot = $root.Replace("'", "''")
  $serverCommand = "Set-Location '$escapedRoot'; $pythonCommand"

  Start-Process powershell `
    -ArgumentList @(
      "-NoExit",
      "-ExecutionPolicy",
      "Bypass",
      "-Command",
      $serverCommand
    ) `
    -WorkingDirectory $root | Out-Null

  Start-Sleep -Seconds 2
}

Start-Process $url
Write-Host "Opened $url"
