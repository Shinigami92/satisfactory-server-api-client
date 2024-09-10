export interface ErrorResponse {
  errorCode: string;
  errorMessage: string;
}

export interface InvalidTokenErrorResponse extends ErrorResponse {
  errorCode: "invalid_token";
  errorMessage: "Token has expired";
}

export interface InsufficientScopeErrorResponse extends ErrorResponse {
  errorCode: "insufficient_scope";
  errorMessage: "The client is missing required privileges to access the given function";
}
