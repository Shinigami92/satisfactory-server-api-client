import { env } from "node:process";
import { buildV1, type InternalClientOptions } from "./v1/index.js";

export interface ClientOptions {
  /**
   * Base URL of the API server.
   *
   * @default "https://localhost:7777/api"
   */
  baseUrl?: string;
  /**
   * Access token to use for authentication.
   *
   * @default process.env.ACCESS_TOKEN
   */
  accessToken?: string;
}

export function createClient(options: ClientOptions = {}) {
  const {
    baseUrl = "https://localhost:7777/api",
    accessToken = env.ACCESS_TOKEN,
  } = options;

  if (accessToken == null) {
    throw new Error(
      "Access token must be provided in options or ACCESS_TOKEN environment variable"
    );
  }

  const internalOptions: InternalClientOptions = { baseUrl, accessToken };

  // TODO @Shinigami92 2024-09-10: Common... don't do this
  env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  return {
    v1: buildV1(internalOptions),
  };
}

export type * from "./v1/index.js";

// Following are just debug code
const client = createClient();

client.v1.QueryServerState().then((response) => {
  console.log(response);
});

client.v1.GetServerOptions().then((response) => {
  console.log(response);
});
