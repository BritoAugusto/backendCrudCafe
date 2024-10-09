import { validationResult } from "express-validator";

const resultadoValidacion =  (req,res,next)=>{
    const errors =  validationResult(req);
    //errors.isEmpty() => true:  no hay errores, false: hay errores
    //quiero saber si hay errores, quiero saber si errors no está vacio
    //if(!false) === true
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    //continuar con la ejecucion del siguiente codigo
    next()
}

export default resultadoValidacion;