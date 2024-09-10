import type { ApiRequest, ApiSuccessResponse } from "./common.js";
import { buildApiRequest } from "./common.js";

export type GetServerOptionsRequest = ApiRequest<"GetServerOptions">;

export type GetServerOptionsResponseData = {
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

export type GetServerOptionsResponse =
  ApiSuccessResponse<GetServerOptionsResponseData>;

export const buildGetServerOptions = buildApiRequest<
  GetServerOptionsRequest,
  GetServerOptionsResponseData
>("v1", {
  function: "GetServerOptions",
});
