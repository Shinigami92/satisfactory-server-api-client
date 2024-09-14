import type {
  ApiRequest,
  ApiSuccessResponse,
  PrivilegeLevel,
} from "./common.js";
import { buildApiRequest } from "./common.js";

export type PasswordlessLoginRequest = ApiRequest<
  "PasswordlessLogin",
  {
    /**
     * Minimum privilege level to attempt to acquire by logging in.
     */
    minimumPrivilegeLevel: `${PrivilegeLevel}`;
  }
>;

export type PasswordlessLoginResponseData = {
  /**
   * Authentication Token in case login is successful.
   */
  authenticationToken: string;
};

export type PasswordlessLoginResponse =
  ApiSuccessResponse<PasswordlessLoginResponseData>;

export const buildPasswordlessLogin = buildApiRequest<
  PasswordlessLoginRequest,
  PasswordlessLoginResponse
>("v1", {
  function: "PasswordlessLogin",
});
