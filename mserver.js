import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Servir frontend construído
app.use(express.static(path.join(__dirname, "dist")));

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  // Relay simples de eventos do jogo
  socket.on("game-event", (data) => {
    socket.broadcast.emit("game-event", data);
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Servidor multiplayer rodando na porta ${PORT}`));