import type { InternalClientOptions } from "./common.js";
import { buildGetServerOptions } from "./GetServerOptions.js";
import { buildHealthCheck } from "./HealthCheck.js";
import { buildQueryServerState } from "./QueryServerState.js";

export function buildV1(options: InternalClientOptions) {
  return {
    /**
     * Performs a health check on the Dedicated Server API. Allows passing additional data between Modded Dedicated Server and Modded Game Client.
     *
     * This function requires no Authentication.
     */
    HealthCheck: buildHealthCheck(options),
    /**
     * Retrieves the current state of the Dedicated Server.
     */
    QueryServerState: buildQueryServerState(options),
    /**
     * Retrieves currently applied server options and server options that are still pending application (because of needing session or server restart).
     */
    GetServerOptions: buildGetServerOptions(options),
  };
}

export type * from "./common.js";
export type * from "./error.js";
export type * from "./GetServerOptions.js";
export type * from "./HealthCheck.js";
export type * from "./QueryServerState.js";
