import type { ApiRequest } from "./common.js";
import { buildApiRequest } from "./common.js";

export type SaveGameRequest = ApiRequest<
  "SaveGame",
  {
    /**
     * Name of the save game file to create.
     *
     * Passed name might be sanitized.
     */
    saveName: string;
  }
>;

export type SaveGameResponse = string;

export const buildSaveGame = buildApiRequest<SaveGameRequest, SaveGameResponse>(
  "v1",
  {
    function: "SaveGame",
  }
);
