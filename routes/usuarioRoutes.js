import express from "express";
import {
  formularioLogin,
  formularioRegistro,
  registrar,
  verificar,
  formularioOlvidePassword,
  resetPassword,
  comprobarToken,
  nuevoPassword,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/login", formularioLogin);

router.get("/registro", formularioRegistro);
router.post("/registro", registrar);

router.get("/verificar/:token", verificar);

router.get("/olvide-password", formularioOlvidePassword);

router.post("/olvide-password", resetPassword);

// Guardar nueva contraseña
router.get("/olvide-password/:token", comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);
export default router;
