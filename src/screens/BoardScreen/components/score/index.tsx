import styled, { useTheme } from "styled-components";
import { MdOutlineCircle, MdOutlineClose } from "react-icons/md";

export const Score: React.FC = () => {
  const { colors, fontSize } = useTheme();
  return (
    <Container>
      <MdOutlineCircle size={`${fontSize.SM}rem`} color={colors.secondary} />
      <Counter>1</Counter>
      <MdOutlineClose size={`${fontSize.SM}rem`} color={colors.secondary} />
      <Counter>2</Counter>
    </Container>
  );
};

const Container = styled.div`
  margin-top: ${({ theme }) => theme.padding.LG}px;
  display: flex;
`;

const Counter = styled.p`
  margin-right: ${({ theme }) => theme.padding.SM}px;
`;
