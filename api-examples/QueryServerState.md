POST https://localhost:7777/api/v1
Content-Type application/json
Authorization Bearer XXX
Body `{ "function": "QueryServerState" }`

Response:

```json
{
  "data": {
    "serverGameState": {
      "activeSessionName": "SERVER-SESSION22729",
      "numConnectedPlayers": 0,
      "playerLimit": 4,
      "techTier": 0,
      "activeSchematic": "None",
      "gamePhase": "None",
      "isGameRunning": false,
      "totalGameDuration": 0,
      "isGamePaused": false,
      "averageTickRate": 30.386566162109375,
      "autoLoadSessionName": "Shinigami World"
    }
  }
}
```
