// @ts-check
import { env } from "node:process";
import { createClient, PrivilegeLevel } from "./dist/index.js";

env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const client = createClient({
  accessToken: env.ACCESS_TOKEN,
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

client.v1.QueryServerState().then((response) => {
  console.log("QueryServerState Response:", response);
});

client.v1.GetServerOptions().then((response) => {
  console.log("GetServerOptions Response:", response);
});

client.v1.GetAdvancedGameSettings().then((response) => {
  console.log("GetAdvancedGameSettings Response:", response);
});

client.v1
  .PasswordlessLogin({
    data: {
      minimumPrivilegeLevel: PrivilegeLevel.NotAuthenticated,
    },
  })
  .then((response) => {
    console.log("PasswordlessLogin Response:", response);
  });

client.v1
  .PasswordLogin({
    data: {
      minimumPrivilegeLevel: PrivilegeLevel.NotAuthenticated,
      password: "your-password",
    },
  })
  .then((response) => {
    console.log("PasswordLogin Response:", response);
  });

client.v1
  .ApplyAdvancedGameSettings({
    data: {
      appliedAdvancedGameSettings: {
        "FG.GameRules.NoPower": "False",
      },
    },
  })
  .then((response) => {
    console.log("ApplyAdvancedGameSettings Response:", typeof response);
  });

client.v1
  .ClaimServer({
    data: {
      serverName: "your-server",
      adminPassword: "your-password",
    },
  })
  .then((response) => {
    console.log("ClaimServer Response:", response);
  });

client.v1
  .RenameServer({
    data: {
      serverName: "Shinigami-PC localhost",
    },
  })
  .then((response) => {
    console.log("RenameServer Response:", typeof response);
  });
