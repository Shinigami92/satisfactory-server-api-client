export interface ErrorResponse {
  /**
   * Machine-friendly code indicating the type of the error that the executed function returned.
   */
  errorCode: string;
  /**
   * Human-friendly error message explaining the error.
   */
  errorMessage?: string;
  /**
   * Additional information about the error, for example, list of parameters that are missing.
   */
  errorData?: any;
}

export interface InvalidTokenErrorResponse extends ErrorResponse {
  errorCode: "invalid_token";
}

export interface InsufficientScopeErrorResponse extends ErrorResponse {
  errorCode: "insufficient_scope";
}

export interface MissingParamsErrorResponse extends ErrorResponse {
  errorCode: "missing_params";
  errorData: {
    missingParameters: string[];
    invalidParameters: Record<string, unknown>;
  };
}

export interface WrongPasswordErrorResponse extends ErrorResponse {
  errorCode: "wrong_password";
}

export interface ServerClaimedErrorResponse extends ErrorResponse {
  errorCode: "server_claimed";
}

export interface ServerNotClaimedErrorResponse extends ErrorResponse {
  errorCode: "server_not_claimed";
}

export interface PasswordInUseErrorResponse extends ErrorResponse {
  errorCode: "password_in_use";
}

export interface CannotResetAdminPasswordErrorResponse extends ErrorResponse {
  errorCode: "cannot_reset_admin_password";
}

export interface SaveGameFailedErrorResponse extends ErrorResponse {
  errorCode: "save_game_failed";
}

export interface EnumerateSessionsFailedErrorResponse extends ErrorResponse {
  errorCode: "enumerate_sessions_failed";
}
