import { createContext, useContext, useState } from "react";
import { GameType } from "../types/gameTypes";
import { TicTacContextType } from "./type";

type ContextProviderProps = {
  children: JSX.Element;
};

const Context = createContext<TicTacContextType>({} as TicTacContextType);

export const TicTacContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [game, setGame] = useState<GameType>();
  return (
    <Context.Provider value={{ game, setGame }}>{children}</Context.Provider>
  );
};

export const useTicTacContext = () => useContext(Context);
