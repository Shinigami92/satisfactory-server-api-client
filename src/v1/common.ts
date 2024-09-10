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
  return (baseUrl: string, accessToken: string) => () =>
    ky
      .post(`${baseUrl}/${version}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        json: body,
      })
      .json<ApiSuccessResponse<TResponseData>>();
}
