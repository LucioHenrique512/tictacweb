import { ButtonBase } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  height: 240px;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
`;

export const BoardContainer = styled.div``;

export const BoardList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 250px;
  width: 250px;
`;

export const BoardItem = styled.li`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const ItemButton = styled(ButtonBase)`
  height: 100%;
  width: 100%;
`;
