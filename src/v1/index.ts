import { buildApplyAdvancedGameSettings } from "./ApplyAdvancedGameSettings.js";
import type { InternalClientOptions } from "./common.js";
import { buildGetAdvancedGameSettings } from "./GetAdvancedGameSettings.js";
import { buildGetServerOptions } from "./GetServerOptions.js";
import { buildHealthCheck } from "./HealthCheck.js";
import { buildPasswordlessLogin } from "./PasswordlessLogin.js";
import { buildPasswordLogin } from "./PasswordLogin.js";
import { buildQueryServerState } from "./QueryServerState.js";
import { buildVerifyAuthenticationToken } from "./VerifyAuthenticationToken.js";

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
     * Attempts to perform a passwordless login to the Dedicated Server as a player.
     *
     * Passwordless login is possible if the Dedicated Server is not claimed, or if Client Protection Password is not set for the Dedicated Server.
     *
     * This function requires no Authentication.
     */
    PasswordlessLogin: buildPasswordlessLogin(options),
    /**
     * Attempts to log in to the Dedicated Server as a player using either Admin Password or Client Protection Password.
     *
     * This function requires no Authentication.
     */
    PasswordLogin: buildPasswordLogin(options),
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
    /**
     * Applies new values to the provided Advanced Game Settings properties.
     *
     * Will automatically enable Advanced Game Settings for the currently loaded save if they are not enabled already.
     */
    ApplyAdvancedGameSettings: buildApplyAdvancedGameSettings(options),
  };
}

export type * from "./ApplyAdvancedGameSettings.js";
export type * from "./common.js";
export type * from "./error.js";
export type * from "./GetAdvancedGameSettings.js";
export type * from "./GetServerOptions.js";
export type * from "./HealthCheck.js";
export type * from "./PasswordlessLogin.js";
export type * from "./PasswordLogin.js";
export type * from "./QueryServerState.js";
export type * from "./VerifyAuthenticationToken.js";
