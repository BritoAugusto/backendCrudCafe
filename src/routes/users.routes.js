import { Router } from "express";
import {
  borrarUser,
  crearUser,
  editarUser,
  listarUsers,
  obtenerUser,
} from "../controllers/users.controllers.js";
import validacionUsuario from "../helpers/validacionUsuarios.js"

const router = Router();
router.route("/")
.post([validacionUsuario],crearUser)
.get(listarUsers);


router.route("/:id")
.get(obtenerUser)
.delete(borrarUser)
.put([validacionUsuario],editarUser);

export default router;
