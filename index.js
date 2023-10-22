const express = require("express");
const http = require("http");

const app = express();

app.get("/", (req, res) => {
  console.log("Hola mundo desde nginx");
  res.send("Hola mundo");
});

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${process.env.PORT}`);
});
