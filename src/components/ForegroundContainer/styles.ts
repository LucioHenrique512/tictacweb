import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.foreground};
  padding: ${({ theme }) => theme.padding.MD}px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
`;
