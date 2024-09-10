import ky from "ky";

export interface GetServerOptionsRequest {
  /**
   * Name of the API function to execute. Names of the API functions and their behavior is described below.
   */
  function: "GetServerOptions";
}

export interface GetServerOptionsResponse {
  /**
   * Data returned by the function executed. Type depends on the function the request performed.
   */
  data: {
    /**
     * All current server option values. Key is the name of the option, and value is it's stringified value.
     */
    serverOptions: {
      "FG.DSAutoPause": "True" | "False";
      "FG.DSAutoSaveOnDisconnect": "True" | "False";
      "FG.AutosaveInterval": string;
      "FG.ServerRestartTimeSlot": string;
      "FG.SendGameplayData": "True" | "False";
      "FG.NetworkQuality": string;
      [key: string]: string;
    };
    /**
     * Server option values that will be applied when the session or server restarts.
     */
    pendingServerOptions: Record<string, string>;
  };
}

export function buildGetServerOptions(baseUrl: string, accessToken: string) {
  return () =>
    ky
      .post(`${baseUrl}/v1`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        json: {
          function: "GetServerOptions",
        } satisfies GetServerOptionsRequest,
      })
      .json<GetServerOptionsResponse>();
}
