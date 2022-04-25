import { createContext, useContext, useEffect, useState } from "react";
import { GameType, PlayerType } from "../types/gameTypes";
import { TicTacContextType } from "./type";

type ContextProviderProps = {
  children: JSX.Element;
};

const Context = createContext<TicTacContextType>({} as TicTacContextType);

export const TicTacContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [game, setGame] = useState<GameType>();
  const [playerType, setPlayerType] = useState<PlayerType>();
  return (
    <Context.Provider value={{ game, setGame, playerType, setPlayerType }}>
      {children}
    </Context.Provider>
  );
};

export const useTicTacContext = () => useContext(Context);
