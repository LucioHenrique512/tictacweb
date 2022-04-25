export type BoardType = Array<Array<number>>;

export interface GameType {
  id: string;
  amountPlayers: number;
  lastTicToe: any;
  state: "NEW";
  board: BoardType;
  winner: any;
  xscore: number;
  oscore: number;
}

export type PlayerType = 0 | 1;
