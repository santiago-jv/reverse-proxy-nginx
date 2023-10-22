const express = require("express");
const server = express();

app.get("/", (req, res) => {
  console.log("Hola mundo desde nginx");
  res.send("Hola mundo");
});

server.listen(process.env.PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${process.env.PORT}`);
});
