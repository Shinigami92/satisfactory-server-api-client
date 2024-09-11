import { env } from "node:process";
import { createClient } from "./dist/index.js";

const client = createClient({
  accessToken: env.ACCESS_TOKEN,
});

client.v1.QueryServerState().then((response) => {
  console.log(response);
});

client.v1.GetServerOptions().then((response) => {
  console.log(response);
});
