export { createClient } from "./client.js";
export type { Client, ClientOptions } from "./client.js";
export { PrivilegeLevel } from "./v1/common.js";
export type {
  ApiRequest,
  ApiSuccessResponse,
  ApplyAdvancedGameSettingsRequest,
  ApplyAdvancedGameSettingsResponse,
  ApplyServerOptionsRequest,
  ApplyServerOptionsResponse,
  BooleanString,
  CannotResetAdminPasswordErrorResponse,
  ClaimServerRequest,
  ClaimServerResponse,
  ClaimServerResponseData,
  ErrorResponse,
  GetAdvancedGameSettingsRequest,
  GetAdvancedGameSettingsResponse,
  GetAdvancedGameSettingsResponseData,
  GetServerOptionsRequest,
  GetServerOptionsResponse,
  GetServerOptionsResponseData,
  HealthCheckRequest,
  HealthCheckResponse,
  HealthCheckResponseData,
  InsufficientScopeErrorResponse,
  InvalidTokenErrorResponse,
  MissingParamsErrorResponse,
  PasswordInUseErrorResponse,
  PasswordLoginRequest,
  PasswordLoginResponse,
  PasswordLoginResponseData,
  PasswordlessLoginRequest,
  PasswordlessLoginResponse,
  PasswordlessLoginResponseData,
  QueryServerStateRequest,
  QueryServerStateResponse,
  QueryServerStateResponseData,
  RenameServerRequest,
  RenameServerResponse,
  RunCommandRequest,
  RunCommandResponse,
  RunCommandResponseData,
  ServerClaimedErrorResponse,
  ServerNotClaimedErrorResponse,
  SetAdminPasswordRequest,
  SetAdminPasswordResponse,
  SetAutoLoadSessionNameRequest,
  SetAutoLoadSessionNameResponse,
  SetClientPasswordRequest,
  SetClientPasswordResponse,
  ShutdownRequest,
  ShutdownResponse,
  VerifyAuthenticationTokenRequest,
  VerifyAuthenticationTokenResponse,
  WrongPasswordErrorResponse,
} from "./v1/index.js";
