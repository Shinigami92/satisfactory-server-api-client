import { buildQueryServerState } from "./QueryServerState.js";

export function buildV1(baseUrl: string, accessToken: string) {
  return {
    QueryServerState: buildQueryServerState(baseUrl, accessToken),
  };
}

export type * from "./QueryServerState.js";
