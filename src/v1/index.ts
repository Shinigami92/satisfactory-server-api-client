import type { InternalClientOptions } from "./common.js";
import { buildGetAdvancedGameSettings } from "./GetAdvancedGameSettings.js";
import { buildGetServerOptions } from "./GetServerOptions.js";
import { buildHealthCheck } from "./HealthCheck.js";
import { buildQueryServerState } from "./QueryServerState.js";
import { buildVerifyAuthenticationToken } from "./VerifyAuthenticationToken.js";

/**
 * @internal
 */
export function buildV1(options: InternalClientOptions) {
  return {
    /**
     * Performs a health check on the Dedicated Server API. Allows passing additional data between Modded Dedicated Server and Modded Game Client.
     *
     * This function requires no Authentication.
     */
    HealthCheck: buildHealthCheck(options),
    /**
     * Verifies the Authentication token provided to the Dedicated Server API. Returns No Content if the provided token is valid.
     *
     * This function does not require input parameters and does not return any data.
     */
    VerifyAuthenticationToken: buildVerifyAuthenticationToken(options),
    /**
     * Retrieves the current state of the Dedicated Server.
     */
    QueryServerState: buildQueryServerState(options),
    /**
     * Retrieves currently applied server options and server options that are still pending application (because of needing session or server restart).
     */
    GetServerOptions: buildGetServerOptions(options),
    /**
     * Retrieves currently applied advanced game settings.
     */
    GetAdvancedGameSettings: buildGetAdvancedGameSettings(options),
  };
}

export type * from "./common.js";
export type * from "./error.js";
export type * from "./GetAdvancedGameSettings.js";
export type * from "./GetServerOptions.js";
export type * from "./HealthCheck.js";
export type * from "./QueryServerState.js";
export type * from "./VerifyAuthenticationToken.js";
