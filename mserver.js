// mserver.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

// Criar __dirname em ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Criar app Express
const app = express();
const server = http.createServer(app);

const distPath = path.join(__dirname, 'dist');

app.use('/webXash', express.static(distPath));
app.get('/webXash/*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Criar servidor WebSocket para multiplayer
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  // Relay simples de eventos do jogo
  socket.on("game-event", (data) => {
    socket.broadcast.emit("game-event", data);
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Servidor multiplayer rodando na porta ${PORT}`));