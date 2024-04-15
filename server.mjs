import http from "http";
const server = http.createServer((req, res) => {

});

import { Server } from "socket.io";

const io = new Server(server, {
  cors: {
    origin: "*",

    methods: ["GET", "POST"],
  },
});

let akkustandValue = null;

io.on("connection", (socket) => {
  console.log("Verbindung funktioniert");

  socket.on("akkustand", (akkustand) => {
    akkustandValue = akkustand;
    io.emit("akkustand", akkustand);
    console.log("akkustand" + akkustand);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(3001, () => {
  console.log("WebSocket server hört auf port 3001");
}); 