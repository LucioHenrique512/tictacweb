import axios from "axios";
import { restUrl } from "../constants";
import { GameType } from "../types/gameTypes";

const api = axios.create({ baseURL: restUrl });

export const getNewGame = () => api.get<GameType>("/game/start");

type PostConnectPayload = {
  gameId: string;
};

export const postConnect = (payload: PostConnectPayload) =>
  api.post<GameType>("/game/connect", payload);

type PostGamePlayPayloadType = {
  gameId?: string;
  type?: number;
  coordinateX?: number;
  coordinateY?: number;
};

export const postGamePlay = (payload: PostGamePlayPayloadType) =>
  api.post<GameType>(`/game/gameplay`, payload);
