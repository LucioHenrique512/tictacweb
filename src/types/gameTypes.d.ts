export interface GameType {
  id: string;
  amountPlayers: number;
  lastTicToe: any;
  state: "NEW";
  board: [number[], number[], number[]];
  winner: any;
  xscore: number;
  oscore: number;
}
