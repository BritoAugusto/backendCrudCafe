import { Router } from "express";
import {leerPrueba} from "../controllers/productos.controllers.js";

// app.get("/prueba", (req, res, next) => {
//   // console.log('desde la funcion de prueba')
//   res.send("Desde el backend del proyecto crudCafe");
// });

const router = Router();
router.route("/prueba").get(leerPrueba);

export default router;
