import { getIO } from "../config/socket.js";

export const emitActivity = (data) => {
  const io = getIO();
  io.emit("activity", data);
};