import type { ApiRequest, BooleanString } from "./common.js";
import { buildApiRequest } from "./common.js";

export type CreateNewGameRequest = ApiRequest<
  "CreateNewGame",
  {
    /**
     * Parameters needed to create new game session.
     */
    newGameData: {
      /**
       * Name of the session to create.
       */
      sessionName: string;
      /**
       * Path Name to the Map Package to use as a map.
       *
       * If not specified, default level.
       */
      mapName?: string;
      /**
       * Name of the starting location to use.
       *
       * Leaving it empty will use random starting location.
       */
      startingLocation: string;
      /**
       * Whenever the Onboarding should be skipped.
       *
       * Currently Onboarding is always skipped on the Dedicated Servers.
       */
      skipOnboarding: boolean;
      /**
       * Advanced Game Settings to apply to the newly created session.
       */
      advancedGameSettings: {
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
      /**
       * Custom Options to pass to the newly created session URL.
       *
       * Not used by vanilla Dedicated Servers.
       */
      customOptionsOnlyForModding: Record<string, string>;
    };
  }
>;

export type CreateNewGameResponse = string;

export const buildCreateNewGame = buildApiRequest<
  CreateNewGameRequest,
  CreateNewGameResponse
>("v1", {
  function: "CreateNewGame",
});
