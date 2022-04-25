import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { restUrl } from "../constants";
import { toast } from "react-toastify";

var stompClient: any = null;

export const createStompClient = () => {
  stompClient = Stomp.over(new SockJS(`${restUrl}/gameplay`));
  stompClient.connect({}, onConnected, onError);
};

const onConnected = () => {
  console.log("conectou");
  stompClient.subscribe("/topic/game-progress/connected", (response: any) => {
    toast("The player has connected", { type: "default" });
  });
};

const onError = () => {
  console.log("deu erro");
};

export { stompClient };
