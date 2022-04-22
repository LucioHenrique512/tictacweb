import React from "react";
import { Container } from "./styles";

type ForegroundContainerProps = {
  children: JSX.Element;
};

export const ForegroundContainer: React.FC<ForegroundContainerProps> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};
