import type { ApiRequest, ApiSuccessResponse } from "./common.js";
import { buildApiRequest } from "./common.js";

export interface SaveHeader {
  /**
   * Version of the Save Game format this file was saved with.
   */
  saveVersion: number;
  /**
   * Changelist of the game or dedicated server this file was saved by.
   */
  buildVersion: number;
  /**
   * Name of the save game file in the filesystem.
   */
  saveName: string;
  saveLocationInfo: string;
  /**
   * Path to the map package this save game file is based on.
   */
  mapName: string;
  /**
   * Additional Map URL options this save game was saved with.
   */
  mapOptions: string;
  /**
   * Name of the session this save game file belongs to.
   */
  sessionName: string;
  /**
   * Amount of seconds the game has been running for in total since the session was created.
   */
  playDurationSeconds: number;
  /**
   * Date and time on which the save game file was saved.
   */
  saveDateTime: string;
  /**
   * True if this save game file was saved with mods.
   */
  isModdedSave: boolean;
  /**
   * True if this save game file has been edited by third party tools.
   */
  isEditedSave: boolean;
  /**
   * True if Advanced Game Settings are enabled for this save game.
   */
  isCreativeModeEnabled: boolean;
}

export interface SessionSaveStruct {
  /**
   * Name of the save session.
   */
  sessionName: string;
  /**
   * All save game files belonging to this session.
   */
  saveHeaders: SaveHeader[];
}

export type EnumerateSessionsRequest = ApiRequest<"EnumerateSessions">;

export type EnumerateSessionsResponseData = {
  /**
   * List of sessions available on the Dedicated Server.
   */
  sessions: SessionSaveStruct[];
  /**
   * Index of the currently selected session in the list.
   */
  currentSessionIndex: number;
};

export type EnumerateSessionsResponse =
  ApiSuccessResponse<EnumerateSessionsResponseData>;

export const buildEnumerateSessions = buildApiRequest<
  EnumerateSessionsRequest,
  EnumerateSessionsResponse
>("v1", {
  function: "EnumerateSessions",
});
