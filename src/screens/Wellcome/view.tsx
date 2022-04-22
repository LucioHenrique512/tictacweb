import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "styled-components";
import { ForegroundContainer } from "../../components";
import { Container } from "./styles";
import { LoadingSpinner } from "../../components/LoadingSpinner";

interface WellcomeViewProps {
  onCreateNewGameClick: () => void;
  onJoinGameClick: () => void;
  loading?: boolean;
}

export const WellcomeView: React.FC<WellcomeViewProps> = ({
  onCreateNewGameClick,
  onJoinGameClick,
  loading,
}) => {
  const { padding } = useTheme();

  return (
    <ForegroundContainer>
      <Container>
        <Button
          size="large"
          variant="contained"
          style={{ marginBottom: padding.MD }}
          onClick={onCreateNewGameClick}
          disabled={loading}
        >
          {loading ? <LoadingSpinner size={15} /> : "Create a new game"}
        </Button>
        <Button size="large" variant="outlined" onClick={onJoinGameClick}>
          Join a game
        </Button>
      </Container>
    </ForegroundContainer>
  );
};
