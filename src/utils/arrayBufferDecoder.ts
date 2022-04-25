import { arrayBuffer } from "stream/consumers";

export const decodeArrayBuffer = (arrayBuffer: ArrayBuffer) => {
  try {
    return new TextDecoder("utf-8").decode(arrayBuffer);
  } catch (error) {
    return "";
  }
};
