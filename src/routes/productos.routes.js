import { Router } from "express";
import {crearProducto, leerPrueba, listarProductos} from "../controllers/productos.controllers.js";

const router = Router();
router.route("/prueba").get(leerPrueba);
router.route("/productos").post(crearProducto).get(listarProductos)

export default router;
