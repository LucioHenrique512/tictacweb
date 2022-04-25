import { Dispatch, SetStateAction } from "react";
import { GameType, PlayerType } from "../types/gameTypes";

export interface TicTacContextType {
  game: GameType | undefined;
  setGame: Dispatch<SetStateAction<GameType | undefined>>;
  playerType: PlayerType | undefined;
  setPlayerType: Dispatch<SetStateAction<PlayerType | undefined>>;
}
