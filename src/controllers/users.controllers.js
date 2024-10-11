import User from "../database/model/users.js";
import bcrypt from "bcrypt";

export const crearUser = async (req, res) => {
  try {
    const { email, password, nombreUser} = req.body;
    //encriptar password
    //crear los saltos
    const saltos = bcrypt.genSaltSync(10);
    const passworHasheado = bcrypt.hashSync(password, saltos);
    //crear el usuario en la BD
    const userNuevo = new User({ nombreUser, email, password: passworHasheado });

    await userNuevo.save();
    res.status(201).json({
      mensaje: "El usuario fue creado correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear el usuario",
      error: error.message
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //verificar si el correo existe
    const usuarioExistente = await User.findOne({ email });
    //no encontre al usuario
    if (!usuarioExistente) {
      return res.status(400).json({
        mensaje: "Correo electronico o password incorrecta --email",
      });
    }

    //verificar si el password es el mismo
    const passworValido = bcrypt.compareSync(
      password,
      usuarioExistente.password
    );
    //si no es valido el password
    if (!passworValido) {
      return res.status(400).json({
        mensaje: "Correo electronico o password incorrecta --password",
      });
    }
    //el usuario y passsword son correctos
    res.status(200).json({
      mensaje: "Los datos del usuario son correctos",
      nombreUser: usuarioExistente.nombreUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo loguear el usuario",
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

export const editarUser = async (req, res) => {
  try {
    const userBuscado = await User.findById(req.params.id);
    if (!userBuscado) {
      return res.satus(404).json({
        mensaje: "Ocurrio un error al intentar editar el usuario",
      });
    }
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El usuario fue editado correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error al intentar editar el usuario",
    });
  }
};
