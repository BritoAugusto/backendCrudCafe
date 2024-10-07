import { Router } from "express";
import {
    borrarProducto,
  crearProducto,
  editarProducto,
  leerPrueba,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import { check } from "express-validator";


const router = Router();
router.route("/prueba").get(leerPrueba);
router.route("/productos").post([
  check("nombreProducto").notEmpty().withMessage('El nombre del producto es un dato obligatorio').isLength({
    min: 2,
    max: 50
  }).withMessage('El nombre del producto debe contener como minimo 2 caracteres y como maximo 50 inclusive')
],crearProducto).get(listarProductos);
router.route("/productos/:id").get(obtenerProducto).delete(borrarProducto).put(editarProducto);

export default router;
