# Satisfactory Web Server Manager

This is an unofficial HTTP API wrapper for Satisfactory Dedicated Server API.

The project is in an early state and will not document changelogs until v1.0.0 release.  
If you want a specific API Endpoint prioritized, please open an issue.

Official API Docs can be found at `Steam/steamapps/common/Satisfactory/CommunityResources/DedicatedServerAPIDocs.md`

You can obtain an `accessToken` by executing `server.GenerateAPIToken` in your server console.

## Usage

```ts
import { createClient } from "satisfactory-server-api-client";

const client = createClient({
  accessToken: "<your-access-token>",
});

client.v1.QueryServerState().then((response) => {
  console.log(response);
});

client.v1.GetServerOptions().then((response) => {
  console.log(response);
});
```
