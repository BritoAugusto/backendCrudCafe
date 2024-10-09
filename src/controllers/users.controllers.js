import User from "../database/model/users.js";

export const crearUser = async (req, res) => {
  try {
    const userNuevo = new User(req.body);
    //encriptar password
    
    await userNuevo.save();
    res.status(201).json({
      mensaje: "El usuario fue creado correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear el usuario",
    });
  }
};

export const listarUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "Ocurrio un error,no se encontraron usuarios",
    });
  }
};

export const obtenerUser = async (req, res) => {
  try {
    const userBuscado = await User.findById(req.params.id);
    if (!userBuscado) {
      return res.status(404).json({
        mensaje: "El usuario no fue encontrado",
      });
    }
    res.status(200).json(userBuscado);
  } catch (error) {
    console.error(500).json({
      mensaje: "Ocurrio un error, no se encontró el usuario",
    });
  }
};

export const borrarUser = async (req, res) => {
  try {
    const userBuscado = await User.findById(req.params.id);
    if (!userBuscado) {
      return res.status(404).json({
        mensaje: "El usuario no fue encontrado",
      });
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El usuario fue eliminado correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error al intentar borrar el usuario",
    });
  }
};

export const editarUser = async (req,res)=>{
    try {
        const  userBuscado = await User.findById(req.params.id);
        if (!userBuscado) {
            return res.satus(404).json({
                mensaje: "Ocurrio un error al intentar editar el usuario"
            })
        }
        await  User.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            mensaje: "El usuario fue editado correctamente"
        })


    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: "Ocurrio un error al intentar editar el usuario"
        })
    }
}

