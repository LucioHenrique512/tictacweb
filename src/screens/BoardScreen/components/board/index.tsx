import { useTheme } from "styled-components";
import { MdOutlineCircle, MdOutlineClose } from "react-icons/md";
import {
  Container,
  BoardContainer,
  BoardList,
  BoardItem,
  ItemButton,
  IconContainer,
} from "./styles";
import React from "react";
import { BoardType } from "../../../../types/gameTypes";
import { onBoardPress } from "../../view";

interface BoardProps {
  board: BoardType;
  onBoardPress:onBoardPress
}

export const Board: React.FC<BoardProps> = ({ board, onBoardPress }) => {
  return (
    <Container>
      <BoardContainer>
        <BoardList>
          {board.map((row,rowIndex) =>
            row.map((state, itemIndex) => (
              <Item
                key={`${rowIndex}-${itemIndex}`}
                state={state}
                onClick={() => onBoardPress(rowIndex,itemIndex)}
              />
            ))
          )}
        </BoardList>
      </BoardContainer>
    </Container>
  );
};

type ItemProps = {
  state: number;
  onClick: () => void;
};

const Item: React.FC<ItemProps> = ({ state, onClick }) => {
  const { fontSize, colors } = useTheme();
  const iconSize = `${fontSize.MD}rem`;

  const ItemState: any = () => {
    if (state === 0) return <React.Fragment />;
    if (state === 1)
      return <MdOutlineCircle size={iconSize} color={colors.primary} />;
    if (state === 2)
      return <MdOutlineClose size={iconSize} color={colors.primary} />;
  };

  return (
    <BoardItem>
      <ItemButton onClick={onClick}>
        <IconContainer>
          <ItemState />
        </IconContainer>
      </ItemButton>
    </BoardItem>
  );
};
