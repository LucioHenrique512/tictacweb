import { Dispatch, SetStateAction } from "react";
import { GameType } from "../types/gameTypes";

export interface TicTacContextType {
  game: GameType | undefined;
  setGame: Dispatch<SetStateAction<GameType | undefined>>;
}
