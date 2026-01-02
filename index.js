import express from "express";

// Crear app
const app = express();

// Routing
app.get("/", function (req, res) {
  res.send("hola mundo en express");
});

app.get("/nosotros", function (req, res) {
  res.send("informacion de nosotros");
});

// Definir puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
