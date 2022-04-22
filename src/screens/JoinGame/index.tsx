import { Button, IconButton, TextField } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";
import { ForegroundContainer, TopBar } from "../../components";
import { Container, HintText } from "./styles";
import { useHistory } from "react-router-dom";

export const JoinGame: React.FC = () => {
  const { padding } = useTheme();
  const { push } = useHistory();
  return (
    <ForegroundContainer>
      <Container>
        <TopBar />
        <HintText>Type or paste your game code below</HintText>
        <TextField
          variant="outlined"
          label="game code"
          style={{ marginBottom: padding.MD }}
        />
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            push("/board");
          }}
        >
          Join a game
        </Button>
      </Container>
    </ForegroundContainer>
  );
};
