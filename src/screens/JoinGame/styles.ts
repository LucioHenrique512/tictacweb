import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HintText = styled.p`
  margin: ${({ theme }) => theme.padding.MD}px 0px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.SM}rem;
`;
