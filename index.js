import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import './src/database/databaseConection.js';

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
const __filename = fileURLToPath(import.meta.url); //para obtener la direccion  de la carpeta
const __dirname = path.dirname(__filename) //para sacar el nombre del directorio
// console.log(__filename)
// console.log(__dirname)
// console.log(path.join(__dirname, '/public'))
app.use(express.static(path.join(__dirname, '/public'))) //configuramos un archivo estatico para ver el index.html en la ruta principal
//agregar como recibir conexiones remotas

//3-configurar las rutas

app.get('/prueba', (req, res, next)=>{
    // console.log('desde la funcion de prueba')
    res.send('Desde el backend del proyecto crudCafe')
})