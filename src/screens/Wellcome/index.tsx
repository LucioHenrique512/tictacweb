import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getNewGame } from "../../services/api";
import { WellcomeView } from "./view";
import { toast } from "react-toastify";
import { useTicTacContext } from "../../context";
import { GameType } from "../../types/gameTypes";

export const Wellcome: React.FC = () => {
  const { push } = useHistory();
  const [loading, setLoading] = useState<boolean>();
  const { setGame } = useTicTacContext();

  const onCreateNewGameClick = async () => {
    try {
      setLoading(true);
      const { data } = await getNewGame();
      setLoading(false);
      setGame(data);
      push("/board");
    } catch (error: any) {
      setLoading(false);
      const message = error.response?.data?.message;
      toast(message ?? "Error connecting to server", { type: "error" });
    }
  };

  const onJoinGameClick = () => {
    push("/join");
  };

  return (
    <WellcomeView
      onCreateNewGameClick={onCreateNewGameClick}
      onJoinGameClick={onJoinGameClick}
      loading={loading}
    />
  );
};
