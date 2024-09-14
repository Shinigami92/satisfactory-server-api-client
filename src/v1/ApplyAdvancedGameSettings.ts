import type { ApiRequest, BooleanString } from "./common.js";
import { buildApiRequest } from "./common.js";

export type ApplyAdvancedGameSettingsRequest = ApiRequest<
  "ApplyAdvancedGameSettings",
  {
    /**
     * Key is the name of the Advanced Game Setting, and the Value is the new setting value as string.
     */
    appliedAdvancedGameSettings: {
      "FG.GameRules.NoPower"?: BooleanString;
      "FG.GameRules.DisableArachnidCreatures"?: BooleanString;
      "FG.GameRules.NoUnlockCost"?: BooleanString;
      "FG.GameRules.SetGamePhase"?: string;
      "FG.GameRules.GiveAllTiers"?: BooleanString;
      "FG.GameRules.UnlockAllResearchSchematics"?: BooleanString;
      "FG.GameRules.UnlockInstantAltRecipes"?: BooleanString;
      "FG.GameRules.UnlockAllResourceSinkSchematics"?: BooleanString;
      "FG.GameRules.GiveItems"?: string;
      "FG.PlayerRules.NoBuildCost"?: BooleanString;
      "FG.PlayerRules.GodMode"?: BooleanString;
      "FG.PlayerRules.FlightMode"?: BooleanString;
      [key: string]: string | BooleanString | undefined;
    };
  }
>;

export type ApplyAdvancedGameSettingsResponse = string;

export const buildApplyAdvancedGameSettings = buildApiRequest<
  ApplyAdvancedGameSettingsRequest,
  ApplyAdvancedGameSettingsResponse
>("v1", {
  function: "ApplyAdvancedGameSettings",
});
