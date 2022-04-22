import styled from "styled-components";

interface LoadingSpinnerProps {
  size?: number;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 20,
}) => {
  return (
    <Container size={size}>
      <svg />
    </Container>
  );
};

type StyledProps = {
  size: number;
};

const Container = styled.div<StyledProps>`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  svg {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border: ${({ size }) => size * 0.15}px solid
      ${({ theme }) => theme.colors.background};
    border-top: ${({ size }) => size * 0.15}px solid
      ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;
