import { fileURLToPath } from "url";
import path from "path";

// Definir __dirname no ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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