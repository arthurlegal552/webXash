import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";

const app = express();
const server = http.createServer(app);

// Serve SPA do Vite corretamente
const distPath = path.join(process.cwd(), "dist");
app.use(express.static(distPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Multiplayer via WebSocket
const io = new Server(server, { cors: { origin: "*" } });
io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);
  socket.on("game-event", (data) => socket.broadcast.emit("game-event", data));
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Servidor multiplayer rodando na porta ${PORT}`));