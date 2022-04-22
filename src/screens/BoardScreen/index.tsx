import { useTicTacContext } from "../../context";
import { BoardScreenView } from "./view";
import { toast } from "react-toastify";

export const BoardScreen: React.FC = () => {
  const { game } = useTicTacContext();
  const board = game?.board ?? [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const onCopyPress = () => {
    if (!!game?.id) {
      const gameCode = game?.id ?? "";
      navigator.clipboard.writeText(gameCode);
      toast(`Copied, send it to the second player! code:${gameCode}`, {
        type: "info",
      });
    }
  };

  const onBoardPress = (rowIndex:number,itemIndex:number) =>{
    console.log(rowIndex,itemIndex)
  }

  return (
    <BoardScreenView
      onCopyPress={onCopyPress}
      gameCode={game?.id}
      board={board}
      onBoardPress={onBoardPress}
    />
  );
};
