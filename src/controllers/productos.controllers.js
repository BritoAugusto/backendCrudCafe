import Producto from "../database/model/producto.js";

export const leerPrueba = (req, res)=>{
 res.send("Desde el backend del proyecto crudCafe");
}

export const crearProducto = async (req, res)=>{
 try {
    //validar los datos para crear el producto
    //pedir al modelo Producto que genere uno nuevo
    const productoNuevo = new Producto(req.body);
    //guardo en la BD
    await productoNuevo.save();
    //envio una respuesta al front
    res.status(201).json({
        mensaje: 'El Producto fue creado correctamente'
    })
} catch (error) {
     //envio una respuesta al front si algo sale mal
    console.error(error)
     res.status(500).json({
        mensaje: "Ocurrio un error, no se pudo crear el producto"
     })
 }
}



