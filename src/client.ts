import type { InternalClientOptions } from "./v1/index.js";
import { buildV1 } from "./v1/index.js";

export interface ClientOptions {
  /**
   * Base URL of the API server.
   *
   * @default "https://localhost:7777/api"
   */
  baseUrl?: string;
  /**
   * Access token to use for authentication.
   */
  accessToken: string;
}

export interface Client {
  readonly v1: ReturnType<typeof buildV1>;
}

export function createClient(options: ClientOptions): Client {
  const { baseUrl = "https://localhost:7777/api", accessToken } = options;

  if (!accessToken) {
    throw new Error(
      "Access token must be provided in options or ACCESS_TOKEN environment variable"
    );
  }

  const internalOptions: InternalClientOptions = { baseUrl, accessToken };

  return {
    v1: buildV1(internalOptions),
  };
}
