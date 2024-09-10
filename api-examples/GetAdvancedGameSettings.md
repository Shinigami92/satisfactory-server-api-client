POST https://localhost:7777/api/v1
Content-Type application/json
Authorization Bearer XXX
Body `{ "function": "GetAdvancedGameSettings" }`

Response:

```json
{
  "data": {
    "creativeModeEnabled": false,
    "advancedGameSettings": {
      "FG.GameRules.NoPower": "False",
      "FG.GameRules.StartingTier": "0",
      "FG.GameRules.DisableArachnidCreatures": "False",
      "FG.GameRules.NoUnlockCost": "False",
      "FG.GameRules.SetGamePhase": "0",
      "FG.GameRules.UnlockAllResearchSchematics": "False",
      "FG.GameRules.UnlockInstantAltRecipes": "False",
      "FG.GameRules.UnlockAllResourceSinkSchematics": "False",
      "FG.PlayerRules.NoBuildCost": "False",
      "FG.PlayerRules.GodMode": "False",
      "FG.PlayerRules.FlightMode": "False"
    }
  }
}
```
