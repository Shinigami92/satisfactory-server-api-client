import type { ApiRequest } from "./common.js";
import { buildApiRequest } from "./common.js";

export type ShutdownRequest = ApiRequest<"Shutdown">;

export type ShutdownResponse = string;

export const buildShutdown = buildApiRequest<ShutdownRequest, ShutdownResponse>(
  "v1",
  {
    function: "Shutdown",
  }
);
