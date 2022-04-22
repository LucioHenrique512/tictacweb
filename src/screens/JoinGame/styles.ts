import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.padding.MD}px;
`;
