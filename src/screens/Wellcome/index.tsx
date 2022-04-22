import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getNewGame } from "../../services/api";
import { WellcomeView } from "./view";
import { toast } from "react-toastify";

export const Wellcome: React.FC = () => {
  const { push } = useHistory();
  const [loading, setLoading] = useState<boolean>();

  const onCreateNewGameClick = async () => {
    try {
      setLoading(true);
      const response = await getNewGame();
      setLoading(false);
      console.log("game->", response.data.board);
      push("/board");
    } catch (error) {
      setLoading(false);
      toast("Error to conect to the server", { type: "error" });

      console.log("erro ->", error);
    }
  };

  const onJoinGameClick = () => {
    //push("/join");
  };

  return (
    <WellcomeView
      onCreateNewGameClick={onCreateNewGameClick}
      onJoinGameClick={onJoinGameClick}
      loading={loading}
    />
  );
};
