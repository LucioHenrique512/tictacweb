import { useEffect } from "react";
import { BoardScreen } from "../../screens";

import { restUrl, wsUrl } from "../../constants";
import { createStompClient, stompClient } from "../../services/wsClient";

export const BoardRoute = () => {
  useEffect(() => {
    createStompClient();
  }, []);

  return <BoardScreen />;
};
