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
  errorMessage: "Token has expired";
}

export interface InsufficientScopeErrorResponse extends ErrorResponse {
  errorCode: "insufficient_scope";
  errorMessage: "The client is missing required privileges to access the given function";
}
