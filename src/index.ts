import { env } from "node:process";
import { buildV1 } from "./v1/index.js";

export function createClient(
  baseUrl = "https://localhost:7777/api",
  accessToken = env.ACCESS_TOKEN
) {
  // TODO @Shinigami92 2024-09-10: Common... don't do this
  env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  return {
    v1: buildV1(baseUrl, accessToken!),
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
