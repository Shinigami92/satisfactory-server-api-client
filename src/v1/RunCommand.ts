import type { ApiRequest, ApiSuccessResponse } from "./common.js";
import { buildApiRequest } from "./common.js";

export type RunCommandRequest = ApiRequest<
  "RunCommand",
  {
    /**
     * Command Line to run on the Dedicated Server.
     */
    command: string;
  }
>;

export type RunCommandResponseData = {
  /**
   * Output of the command executed, with \n used as line separator.
   */
  commandResult: string;
};

export type RunCommandResponse = ApiSuccessResponse<RunCommandResponseData>;

export const buildRunCommand = buildApiRequest<
  RunCommandRequest,
  RunCommandResponse
>("v1", {
  function: "RunCommand",
});
