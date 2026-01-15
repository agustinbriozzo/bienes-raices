import express from "express";
import {
  formularioLogin,
  formularioRegistro,
  registrar,
  verificar,
  formularioOlvidePassword,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/login", formularioLogin);

router.get("/registro", formularioRegistro);
router.post("/registro", registrar);

router.get("/verificar/:token", verificar);

router.get("/olvide-password", formularioOlvidePassword);

export default router;
