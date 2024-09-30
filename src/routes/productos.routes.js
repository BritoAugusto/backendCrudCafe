import { Router } from "express";
import {crearProducto, leerPrueba} from "../controllers/productos.controllers.js";

// app.get("/prueba", (req, res, next) => {
//   // console.log('desde la funcion de prueba')
//   res.send("Desde el backend del proyecto crudCafe");
// });

const router = Router();
router.route("/prueba").get(leerPrueba);
router.route("/productos").post(crearProducto);

export default router;
