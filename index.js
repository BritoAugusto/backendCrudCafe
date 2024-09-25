import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
//1-configurar un puerto
const app = express(); 


app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.info('Estoy escuchando el puerto '+app.get('port'))
})

//2-configurar middlewares
app.use(cors()); //permite conexiones remotas
app.use(morgan('dev')); // nos da informacion extra en la terminal
app.use(express.json()); // interpreta los datos del body en formato json
app.use(express.urlencoded({extended:true})) //interpretar datos enviados de formularios
//agregar como recibir conexiones remotas

//3-configurar las rutas

app.get('/prueba', (req, res, next)=>{
    // console.log('desde la funcion de prueba')
    res.send('Desde el backend del proyecto crudCafe')
})