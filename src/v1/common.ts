import ky from "ky";

export interface ApiRequest<TFunction extends string, TData = never> {
  /**
   * Name of the API function to execute.
   */
  function: TFunction;
  /**
   * Data to pass to the function to execute. Format of the object depends on the function being executed.
   */
  data?: TData;
}

export interface ApiSuccessResponse<TData> {
  /**
   * Data returned by the function executed. Type depends on the function the request performed.
   */
  data: TData;
}

export function buildApiRequest<
  TRequest extends ApiRequest<string>,
  TResponseData
>(version: "v1", body: TRequest) {
  return (options: InternalClientOptions) => () =>
    ky
      .post(`${options.baseUrl}/${version}`, {
        headers: {
          Authorization: `Bearer ${options.accessToken}`,
        },
        json: body,
      })
      .json<ApiSuccessResponse<TResponseData>>();
}

/**
 * @internal
 */
export interface InternalClientOptions {
  /**
   * Base URL of the API server.
   */
  baseUrl: string;
  /**
   * Access token to use for authentication.
   */
  accessToken: string;
}
