import axios from "axios";
import { GameType } from "../types/gameTypes";

const baseURL = `http://localhost:8080`;

const api = axios.create({ baseURL });

export const getNewGame = () => api.get<GameType>("/game/start");

type PostConnectPayload = {
  gameId: string;
};

export const postConnect = (payload: PostConnectPayload) =>
  api.post<GameType>("/game/connect", payload);
