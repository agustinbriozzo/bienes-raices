import "dotenv/config";
import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import db from "./config/db.js";

const app = express();

try {
  await db.authenticate();
  console.log("Base de datos conectada");
} catch (error) {
  console.log(error);
}

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));
app.use("/auth", usuarioRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
