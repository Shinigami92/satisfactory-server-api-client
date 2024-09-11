// @ts-check
import { env } from "node:process";
import { createClient } from "./dist/index.js";

const client = createClient({
  accessToken: env.ACCESS_TOKEN,
});

client.v1.QueryServerState().then((response) => {
  console.log("QueryServerState Response:", response);
});

client.v1.GetServerOptions().then((response) => {
  console.log("GetServerOptions Response:", response);
});

client.v1
  .HealthCheck({
    data: {
      clientCustomData: "",
    },
  })
  .then((response) => {
    console.log("HealthCheck Response:", response);
  });

client.v1.VerifyAuthenticationToken().then((response) => {
  console.log("VerifyAuthenticationToken Response:", typeof response);
});
