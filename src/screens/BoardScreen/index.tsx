import { useTicTacContext } from "../../context";
import { BoardScreenView } from "./view";
import { toast } from "react-toastify";

export const BoardScreen: React.FC = () => {
  const { game } = useTicTacContext();

  const onCopyPress = () => {
    if (!!game?.id) {
      const gameCode = game?.id ?? "";
      navigator.clipboard.writeText(gameCode);
      toast(`Copied, send it to the second player! code:${gameCode}`, {
        type: "info",
      });
    }
  };

  return <BoardScreenView onCopyPress={onCopyPress} gameCode={game?.id} />;
};
