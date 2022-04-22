import { ButtonBase } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div``;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 15px 0px;
  display: flex;
  display: flex;
  justify-content: flex-end;
`;

export const GameCodeButton = styled(ButtonBase)`
  p {
    font-size: ${({ theme }) => theme.fontSize.SM}rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-right: 5px;
  }
`;
