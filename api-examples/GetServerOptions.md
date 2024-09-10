POST https://localhost:7777/api/v1
Content-Type application/json
Authorization Bearer XXX
Body `{ "function": "GetServerOptions" }`

Response:

```json
{
  "data": {
    "serverOptions": {
      "FG.DSAutoPause": "False",
      "FG.DSAutoSaveOnDisconnect": "True",
      "FG.DisableSeasonalEvents": "False",
      "FG.AutosaveInterval": "300.0",
      "FG.ServerRestartTimeSlot": "1440.0",
      "FG.SendGameplayData": "True",
      "FG.NetworkQuality": "1"
    },
    "pendingServerOptions": {}
  }
}
```
