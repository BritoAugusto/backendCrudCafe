import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  leerPrueba,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import validacionProducto from "../helpers/validacionProducto.js";
import verificarJWT from "../helpers/verificarJWT.js";

const router = Router();
router.route("/prueba").get(leerPrueba);
router
  .route("/productos")
  .post(
    [verificarJWT,validacionProducto],
    crearProducto
  )
  .get(listarProductos);
router
  .route("/productos/:id")
  .get([verificarJWT],obtenerProducto)
  .delete(borrarProducto)
  .put([verificarJWT,validacionProducto],editarProducto);

export default router;
