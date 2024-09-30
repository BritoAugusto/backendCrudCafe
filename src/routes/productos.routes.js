import { Router } from "express";
import {crearProducto, leerPrueba, listarProductos, obtenerProducto} from "../controllers/productos.controllers.js";

const router = Router();
router.route("/prueba").get(leerPrueba);
router.route("/productos").post(crearProducto).get(listarProductos)
router.route("/productos:id").get(obtenerProducto)

export default router;
