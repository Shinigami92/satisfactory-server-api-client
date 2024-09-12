import type {
  ApiRequest,
  ApiSuccessResponse,
  BooleanString,
} from "./common.js";
import { buildApiRequest } from "./common.js";

export type GetAdvancedGameSettingsRequest =
  ApiRequest<"GetAdvancedGameSettings">;

export type GetAdvancedGameSettingsResponseData = {
  /**
   * True if Advanced Game Settings are enabled for the currently loaded session.
   */
  creativeModeEnabled: boolean;
  /**
   * Values of Advanced Game Settings. Key is the name of the setting, and value is it's stringified value.
   */
  advancedGameSettings: {
    "FG.GameRules.NoPower": BooleanString;
    "FG.GameRules.DisableArachnidCreatures": BooleanString;
    "FG.GameRules.NoUnlockCost": BooleanString;
    "FG.GameRules.SetGamePhase": string;
    "FG.GameRules.GiveAllTiers": BooleanString;
    "FG.GameRules.UnlockAllResearchSchematics": BooleanString;
    "FG.GameRules.UnlockInstantAltRecipes": BooleanString;
    "FG.GameRules.UnlockAllResourceSinkSchematics": BooleanString;
    "FG.GameRules.GiveItems": string;
    "FG.PlayerRules.NoBuildCost": BooleanString;
    "FG.PlayerRules.GodMode": BooleanString;
    "FG.PlayerRules.FlightMode": BooleanString;
    [key: string]: string;
  };
};

export type GetAdvancedGameSettingsResponse =
  ApiSuccessResponse<GetAdvancedGameSettingsResponseData>;

export const buildGetAdvancedGameSettings = buildApiRequest<
  GetAdvancedGameSettingsRequest,
  GetAdvancedGameSettingsResponse
>("v1", {
  function: "GetAdvancedGameSettings",
});
