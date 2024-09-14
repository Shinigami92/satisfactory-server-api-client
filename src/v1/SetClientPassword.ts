import type { ApiRequest } from "./common.js";
import { buildApiRequest } from "./common.js";

export type SetClientPasswordRequest = ApiRequest<
  "SetClientPassword",
  {
    /**
     * Client Password to set on the Dedicated Server, in plaintext.
     */
    password: string;
  }
>;

export type SetClientPasswordResponse = string;

export const buildSetClientPassword = buildApiRequest<
  SetClientPasswordRequest,
  SetClientPasswordResponse
>("v1", {
  function: "SetClientPassword",
});
