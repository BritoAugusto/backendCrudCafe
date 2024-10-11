import { Router } from "express";
import {
  crearUser,
  listarUsers,
  login
} from "../controllers/users.controllers.js";
import validacionUsuario from "../helpers/validacionUsuarios.js"
import validacionLogin from "../helpers/validacionLogin.js";

const router = Router();
router.route("/")
.post([validacionUsuario],crearUser)
.get(listarUsers);

router.route("/login")
.post([validacionLogin],login);


export default router;
