import { IconButton } from "@mui/material";
import { MdArrowBack } from "react-icons/md";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface TopBarProps {
  text?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ text }) => {
  const { goBack } = useHistory();
  return (
    <Container>
      <IconButton onClick={goBack}>
        <MdArrowBack />
      </IconButton>
      <Text>{text}</Text>
    </Container>
  );
};

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.SM}rem;
  color: ${({ theme }) => theme.colors.secondary};
`;
