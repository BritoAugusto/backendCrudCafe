import { Router } from "express";
import {
    borrarUser,
  crearUser,
  editarUser,
  listarUsers,
  obtenerUser,
} from "../controllers/users.controllers.js";

const router = Router();
router.route("/user").post(crearUser).get(listarUsers);
router.route("/user/:id").get(obtenerUser).delete(borrarUser).put(editarUser)

export default router;
