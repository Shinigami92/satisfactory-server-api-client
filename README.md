# Satisfactory Server API Client

![Satisfactory](https://raw.githubusercontent.com/Shinigami92/satisfactory-server-api-client/main/.github/logo.png "Satisfactory logo")

[![npm version](https://badgen.net/npm/v/satisfactory-server-api-client)](https://www.npmjs.com/package/satisfactory-server-api-client)
[![npm downloads](https://badgen.net/npm/dm/satisfactory-server-api-client)](https://www.npmjs.com/package/satisfactory-server-api-client)

This is an unofficial HTTP API wrapper for Satisfactory Dedicated Server API.

The project is in an early state and will not document changelogs until v1.0.0 release.  
If you want a specific API Endpoint prioritized, please open an issue.

Official API Docs can be found at `Steam/steamapps/common/Satisfactory/CommunityResources/DedicatedServerAPIDocs.md` or at [GitHub wolveix/satisfactory-server Official API Docs](https://github.com/wolveix/satisfactory-server/wiki/Official-API-Docs).

You can obtain an `accessToken` by executing `server.GenerateAPIToken` in your server console.

## Usage

```ts
import { createClient } from "satisfactory-server-api-client";

// If your dedicated server uses a self-signed certificate (generated by default),
// you can disable SSL verification by configuring the following environment variable.
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const client = createClient({
  accessToken: "<your-access-token>",
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

client.v1.VerifyAuthenticationToken().then(() => {
  // response will be an empty string if valid
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
```
