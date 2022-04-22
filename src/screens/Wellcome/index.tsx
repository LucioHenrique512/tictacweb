import { Button } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";
import { ForegroundContainer } from "../../components";
import { Container } from "./styles";

export const Wellcome: React.FC = () => {
  const { padding } = useTheme();
  return (
    <ForegroundContainer>
      <Container>
        <Button
          size="large"
          variant="contained"
          style={{ marginBottom: padding.MD }}
        >
          Create a new game
        </Button>
        <Button size="large" variant="outlined">
          Join a game
        </Button>
      </Container>
    </ForegroundContainer>
  );
};
