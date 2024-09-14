import type { ApiRequest, BooleanString } from "./common.js";
import { buildApiRequest } from "./common.js";

export type ApplyServerOptionsRequest = ApiRequest<
  "ApplyServerOptions",
  {
    updatedServerOptions: {
      "FG.DSAutoPause"?: BooleanString;
      "FG.DSAutoSaveOnDisconnect"?: BooleanString;
      "FG.AutosaveInterval"?: string;
      "FG.ServerRestartTimeSlot"?: string;
      "FG.SendGameplayData"?: BooleanString;
      "FG.NetworkQuality"?: string;
      [key: string]: string | BooleanString | undefined;
    };
  }
>;

export type ApplyServerOptionsResponse = string;

export const buildApplyServerOptions = buildApiRequest<
  ApplyServerOptionsRequest,
  ApplyServerOptionsResponse
>("v1", {
  function: "ApplyServerOptions",
});
