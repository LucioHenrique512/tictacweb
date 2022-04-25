import { useTicTacContext } from "../../context";
import { BoardScreenView } from "./view";
import { toast } from "react-toastify";
import React, { useEffect } from "react";
import { postGamePlay } from "../../services/api";
import { stompClient } from "../../services/wsClient";
import { decodeArrayBuffer } from "../../utils/arrayBufferDecoder";
import { GameType } from "../../types/gameTypes";

export const BoardScreen: React.FC = () => {
  const { game, playerType, setGame } = useTicTacContext();

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

  const onBoardPress = async (rowIndex: number, itemIndex: number) => {
    try {
      await postGamePlay({
        gameId: game?.id,
        type: playerType,
        coordinateX: rowIndex,
        coordinateY: itemIndex,
      });
    } catch (error: any) {
      const message = error.response?.data?.message;
      toast(message ?? "An error ocurred!", {
        type: "error",
      });
    }
  };

  useEffect(() => {
    stompClient?.subscribe(`/topic/game-progress/${game?.id}`, (event: any) => {
      const recivedGamePlay: GameType = JSON.parse(
        decodeArrayBuffer(event._binaryBody)
      );
      console.log("jogada ->", recivedGamePlay);
      setGame(recivedGamePlay);
    });
  }, [stompClient]);

  return (
    <React.Fragment>
      <BoardScreenView
        onCopyPress={onCopyPress}
        gameCode={game?.id}
        board={board}
        onBoardPress={onBoardPress}
      />
    </React.Fragment>
  );
};
