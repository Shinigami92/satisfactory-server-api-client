import { buildGetServerOptions } from "./GetServerOptions.js";
import { buildQueryServerState } from "./QueryServerState.js";

export function buildV1(baseUrl: string, accessToken: string) {
  return {
    /**
     * Retrieves the current state of the Dedicated Server.
     */
    QueryServerState: buildQueryServerState(baseUrl, accessToken),
    /**
     * Retrieves currently applied server options and server options that are still pending application (because of needing session or server restart).
     */
    GetServerOptions: buildGetServerOptions(baseUrl, accessToken),
  };
}

export type * from "./error.js";
export type * from "./QueryServerState.js";
export type * from "./GetServerOptions.js";
