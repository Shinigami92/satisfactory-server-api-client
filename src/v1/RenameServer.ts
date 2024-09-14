import type { ApiRequest } from "./common.js";
import { buildApiRequest } from "./common.js";

export type RenameServerRequest = ApiRequest<
  "RenameServer",
  {
    /**
     * New name of the Dedicated Server.
     */
    serverName: string;
  }
>;

export type RenameServerResponse = string;

export const buildRenameServer = buildApiRequest<
  RenameServerRequest,
  RenameServerResponse
>("v1", {
  function: "RenameServer",
});
