import type {
  ApiRequest,
  ApiSuccessResponse,
  BooleanString,
} from "./common.js";
import { buildApiRequest } from "./common.js";

export type GetServerOptionsRequest = ApiRequest<"GetServerOptions">;

export type GetServerOptionsResponseData = {
  /**
   * All current server option values. Key is the name of the option, and value is it's stringified value.
   */
  serverOptions: {
    "FG.DSAutoPause": BooleanString;
    "FG.DSAutoSaveOnDisconnect": BooleanString;
    "FG.AutosaveInterval": string;
    "FG.ServerRestartTimeSlot": string;
    "FG.SendGameplayData": BooleanString;
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

/**
 * @internal
 */
export const buildGetServerOptions = buildApiRequest<
  GetServerOptionsRequest,
  GetServerOptionsResponse
>("v1", {
  function: "GetServerOptions",
});
