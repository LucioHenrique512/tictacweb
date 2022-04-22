import { Button, TextField } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";
import { ForegroundContainer, TopBar } from "../../components";
import { Container, HintText } from "./styles";

interface JoinGameViewProps {
  onJoinClick: () => void;
  onChange: (text: string) => void;
  value: string;
  disabled?: boolean;
}

export const JoinGameView: React.FC<JoinGameViewProps> = ({
  onJoinClick,
  onChange,
  value,
  disabled
}) => {
  const { padding } = useTheme();

  return (
    <ForegroundContainer>
      <Container>
        <TopBar />
        <HintText>Type or paste your game code below</HintText>
        <TextField
          variant="outlined"
          label="game code"
          style={{ marginBottom: padding.MD }}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <Button
          disabled={disabled}
          size="large"
          variant="contained"
          onClick={onJoinClick}
        >
          Join a game
        </Button>
      </Container>
    </ForegroundContainer>
  );
};
