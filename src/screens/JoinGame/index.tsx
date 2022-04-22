import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useTicTacContext } from "../../context";
import { postConnect } from "../../services/api";
import { JoinGameView } from "./view";
import { toast } from "react-toastify";

export const JoinGame: React.FC = () => {
  const { push } = useHistory();
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { setGame } = useTicTacContext();

  const onFieldChange = (text: string) => setValue(text.trim());

  const onJoinClick = async () => {
    try {
      setLoading(true);
      const { data } = await postConnect({ gameId: value });
      setLoading(false);
      setGame(data);
      toast(`Connected! code: ${data.id}`, { type: "success" });
      push("/board");
    } catch (error: any) {
      setLoading(false);
      const message = error.response?.data?.message;
      toast(message ?? "Error connecting to server", { type: "error" });
    }
  };

  return (
    <JoinGameView
      value={value}
      onChange={onFieldChange}
      onJoinClick={onJoinClick}
      disabled={value.length < 3}
    />
  );
};
