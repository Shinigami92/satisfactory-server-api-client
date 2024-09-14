import type { ApiRequest } from "./common.js";
import { buildApiRequest } from "./common.js";

export type SetAutoLoadSessionNameRequest = ApiRequest<
  "SetAutoLoadSessionName",
  {
    /**
     * Name of the session to automatically load on Dedicated Server startup.
     */
    sessionName: string;
  }
>;

export type SetAutoLoadSessionNameResponse = string;

export const buildSetAutoLoadSessionName = buildApiRequest<
  SetAutoLoadSessionNameRequest,
  SetAutoLoadSessionNameResponse
>("v1", {
  function: "SetAutoLoadSessionName",
});
