import ky from "ky";

export interface QueryServerStateRequest {
  function: "QueryServerState";
}

export interface QueryServerStateResponse {
  data: {
    serverGameState: {
      activeSessionName: string;
      numConnectedPlayers: number;
      playerLimit: number;
      techTier: number;
      activeSchematic: string;
      gamePhase: string;
      isGameRunning: boolean;
      totalGameDuration: number;
      isGamePaused: boolean;
      averageTickRate: number;
      autoLoadSessionName: string;
    };
  };
}

export function buildQueryServerState(baseUrl: string, accessToken: string) {
  return () =>
    ky
      .post(`${baseUrl}/v1`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        json: {
          function: "QueryServerState",
        } satisfies QueryServerStateRequest,
      })
      .json<QueryServerStateResponse>();
}
