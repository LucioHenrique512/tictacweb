import { Button } from "@mui/material";
import { useTheme } from "styled-components";
import { ForegroundContainer, TopBar } from "../../components";
import { Board } from "./components/board";
import { Container } from "./styles";

export const BoardScreen: React.FC = () => {
  const { padding } = useTheme();
  return (
    <ForegroundContainer>
      <Container>
        <TopBar text="Gamecode: #eba12548" />
        <Board />
        <Button fullWidth variant="contained" style={{ marginTop: padding.MD }}>
          Reset game
        </Button>
      </Container>
    </ForegroundContainer>
  );
};
