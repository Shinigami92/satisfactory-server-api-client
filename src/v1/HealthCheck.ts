import type { ApiRequest, ApiSuccessResponse } from "./common.js";
import { buildApiRequest } from "./common.js";

export type HealthCheckRequest = ApiRequest<
  "HealthCheck",
  {
    /**
     * Custom Data passed from the Game Client or Third Party service. Not used by vanilla Dedicated Servers.
     */
    clientCustomData: string;
  }
>;

export type HealthCheckResponseData = {
  /**
   * "healthy" if tick rate is above ten ticks per second, "slow" otherwise.
   */
  health: "healthy" | "slow";
  /**
   * Custom Data passed from the Dedicated Server to the Game Client or Third Party service. Vanilla Dedicated Server returns empty string.
   */
  serverCustomData: string;
};

export type HealthCheckResponse = ApiSuccessResponse<HealthCheckResponseData>;

export const buildHealthCheck = buildApiRequest<
  HealthCheckRequest,
  HealthCheckResponse
>("v1", {
  function: "HealthCheck",
});
