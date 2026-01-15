import "dotenv/config";
import express from "express";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import db from "./config/db.js";

// Crear la app
const app = express();

// Habilitar lectura de datos de formulario
app.use(express.urlencoded({ extended: true }));

// Habilitar Cookie Parser
app.use(cookieParser());

// Habilitar CSRF
app.use(csrf({ cookie: true }));

// Conexión a la base de datos
try {
  await db.authenticate();
  db.sync();
  console.log("Base de datos conectada");
} catch (error) {
  console.log(error);
}

// Habilitar pug
app.set("view engine", "pug");
app.set("views", "./views");

// Carpeta pública
app.use(express.static("public"));

// Routing
app.use("/auth", usuarioRoutes);

// Definir puerto y arrancar el proyecto
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
