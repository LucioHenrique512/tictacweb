import { Button, IconButton, TextField } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";
import { ForegroundContainer } from "../../components";
import { Container, Header } from "./styles";
import { MdArrowBack } from "react-icons/md";
import { useHistory } from "react-router-dom";

export const JoinGame: React.FC = () => {
  const { padding } = useTheme();
  const { push } = useHistory();
  return (
    <ForegroundContainer>
      <Container>
        <Header>
          <IconButton
            onClick={() => {
              push("/");
            }}
          >
            <MdArrowBack />
          </IconButton>
        </Header>
        <TextField
          variant="outlined"
          label="game code"
          style={{ marginBottom: padding.MD }}
        />
        <Button size="large" variant="contained" disabled>
          Join a game
        </Button>
      </Container>
    </ForegroundContainer>
  );
};
