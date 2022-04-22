import styled, { useTheme } from "styled-components";
import { MdOutlineCircle, MdOutlineClose } from "react-icons/md";
import {
  Container,
  BoardContainer,
  BoardList,
  BoardItem,
  ItemButton,
} from "./styles";

export const Board: React.FC = () => {
  return (
    <Container>
      <BoardContainer>
        <BoardList>
          <Item />
          <Item />
          <Item />
          <Item isTimes />
          <Item isTimes />
          <Item isTimes />
          <Item />
          <Item />
          <Item />
        </BoardList>
      </BoardContainer>
    </Container>
  );
};

type ItemProps = {
  isTimes?: boolean;
};

const Item: React.FC<ItemProps> = ({ isTimes }) => {
  const { fontSize, colors } = useTheme();
  const iconSize = `${fontSize.MD}rem`;

  return (
    <BoardItem>
      <ItemButton>
        {isTimes ? (
          <MdOutlineClose size={iconSize} color={colors.primary} />
        ) : (
          <MdOutlineCircle size={iconSize} color={colors.primary} />
        )}
      </ItemButton>
    </BoardItem>
  );
};
