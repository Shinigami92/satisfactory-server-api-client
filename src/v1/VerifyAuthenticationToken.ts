import type { ApiRequest } from "./common.js";
import { buildApiRequest } from "./common.js";

export type VerifyAuthenticationTokenRequest =
  ApiRequest<"VerifyAuthenticationToken">;

export type VerifyAuthenticationTokenResponse = string;

export const buildVerifyAuthenticationToken = buildApiRequest<
  VerifyAuthenticationTokenRequest,
  VerifyAuthenticationTokenResponse
>("v1", {
  function: "VerifyAuthenticationToken",
});
