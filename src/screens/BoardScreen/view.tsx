import { useTheme } from "styled-components";
import { ForegroundContainer, TopBar } from "../../components";
import { Board } from "./components/board";
import { Score } from "./components/score";
import {
  Container,
  ContentContainer,
  GameCodeButton,
  ButtonContainer,
} from "./styles";
import { Button } from "@mui/material";
import { MdContentCopy } from "react-icons/md";

interface BoardScreenViewProps {
  onCopyPress: () => void;
  gameCode?: string;
}

export const BoardScreenView: React.FC<BoardScreenViewProps> = ({
  onCopyPress,
  gameCode,
}) => {
  const { padding, colors, fontSize } = useTheme();

  return (
    <ForegroundContainer>
      <Container>
        <TopBar text="Game" />
        <ButtonContainer>
          <GameCodeButton onClick={onCopyPress}>
            <p>Game code:</p>
            <p>{gameCode}</p>
            <MdContentCopy
              color={colors.secondary}
              size={`${fontSize.SM}rem`}
            />
          </GameCodeButton>
        </ButtonContainer>

        <ContentContainer>
          <Board />
          <Score />
        </ContentContainer>
        <Button fullWidth variant="contained" style={{ marginTop: padding.MD }}>
          Reset game
        </Button>
      </Container>
    </ForegroundContainer>
  );
};
