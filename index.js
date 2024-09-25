import express from 'express';

//1-configurar un puerto
const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.info('Estoy escuchando el puerto '+app.get('port'))
})

//2-configurar middlewares

//agregar como recibir conexiones remotas

//3-configurar las rutas

app.get('/prueba', (req, res, next)=>{
    console.log('desde la funcion de prueba')
    res.send('Desde el backend del proyecto crudCafe')
})