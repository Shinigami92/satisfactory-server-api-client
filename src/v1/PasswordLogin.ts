import type {
  ApiRequest,
  ApiSuccessResponse,
  PrivilegeLevel,
} from "./common.js";
import { buildApiRequest } from "./common.js";

export type PasswordLoginRequest = ApiRequest<
  "PasswordLogin",
  {
    /**
     * Minimum privilege level to attempt to acquire by logging in.
     */
    minimumPrivilegeLevel: `${PrivilegeLevel}`;
    /**
     * Password to attempt to log in with, in plaintext.
     */
    password: string;
  }
>;

export type PasswordLoginResponseData = {
  /**
   * Authentication Token in case login is successful.
   */
  authenticationToken: string;
};

export type PasswordLoginResponse =
  ApiSuccessResponse<PasswordLoginResponseData>;

export const buildPasswordLogin = buildApiRequest<
  PasswordLoginRequest,
  PasswordLoginResponse
>("v1", {
  function: "PasswordLogin",
});
