import type { ApiRequest, ApiSuccessResponse } from "./common.js";
import { buildApiRequest } from "./common.js";

export type QueryServerStateRequest = ApiRequest<"QueryServerState">;

export type QueryServerStateResponseData = {
  /**
   * Current game state of the server.
   */
  serverGameState: {
    /**
     * Name of the currently loaded game session.
     */
    activeSessionName: string;
    /**
     * Number of the players currently connected to the Dedicated Server.
     */
    numConnectedPlayers: number;
    /**
     * Maximum number of the players that can be connected to the Dedicated Server.
     */
    playerLimit: number;
    /**
     * Maximum Tech Tier of all Schematics currently unlocked.
     */
    techTier: number;
    /**
     * Schematic currently set as Active Milestone.
     */
    activeSchematic: string;
    /**
     * Current game phase. None if no game is running.
     */
    gamePhase: string;
    /**
     * True if the save is currently loaded, false if the server is waiting for the session to be created.
     */
    isGameRunning: boolean;
    /**
     * Total time the current save has been loaded, in seconds.
     */
    totalGameDuration: number;
    /**
     * True if the game is paused. If the game is paused, total game duration does not increase.
     */
    isGamePaused: boolean;
    /**
     * Average tick rate of the server, in ticks per second.
     */
    averageTickRate: number;
    /**
     * Name of the session that will be loaded when the server starts automatically.
     */
    autoLoadSessionName: string;
  };
};

export type QueryServerStateResponse =
  ApiSuccessResponse<QueryServerStateResponseData>;

export const buildQueryServerState = buildApiRequest<
  QueryServerStateRequest,
  QueryServerStateResponse
>("v1", {
  function: "QueryServerState",
});
