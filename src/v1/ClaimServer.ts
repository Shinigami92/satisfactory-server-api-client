import type { ApiRequest, ApiSuccessResponse } from "./common.js";
import { buildApiRequest } from "./common.js";

export type ClaimServerRequest = ApiRequest<
  "ClaimServer",
  {
    /**
     * 	New name of the Dedicated Server.
     */
    serverName: string;
    /**
     * 	Admin Password to set on the Dedicated Server, in plaintext.
     */
    adminPassword: string;
  }
>;

export type ClaimServerResponseData = {
  /**
   * New Authentication Token that the Caller should use to drop Initial Admin privileges.
   */
  authenticationToken: string;
};

export type ClaimServerResponse = ApiSuccessResponse<ClaimServerResponseData>;

export const buildClaimServer = buildApiRequest<
  ClaimServerRequest,
  ClaimServerResponse
>("v1", {
  function: "ClaimServer",
});
