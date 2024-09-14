import type { ApiRequest } from "./common.js";
import { buildApiRequest } from "./common.js";

export type SetAdminPasswordRequest = ApiRequest<
  "SetAdminPassword",
  {
    /**
     * Admin Password to set on the Dedicated Server, in plaintext.
     */
    password: string;
    /**
     * New Admin authentication token to use, since the token used for this request will become invalidated.
     */
    authenticationToken: string;
  }
>;

export type SetAdminPasswordResponse = string;

export const buildSetAdminPassword = buildApiRequest<
  SetAdminPasswordRequest,
  SetAdminPasswordResponse
>("v1", {
  function: "SetAdminPassword",
});
