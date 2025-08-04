import express from 'express';
import {connectDB} from './config/dbconfig.mjs'; 
import superHeroeRutas from './routes/superHeroeRutas.mjs';

const app = express();
const PORT = process.env.PORT||3000; 

//Middleware  para pasar a Json
app.use(express.json());

//conexión a MongoDB
connectDB();

//conexión de rutas.
app.use('/api',superHeroeRutas);


//Manejo de errores para rutas no encontradas.
app.use((req, res) => {
    res.status(404).send({ mensaje: 'Ruta no encontrada' });
});

//iniciar servidor.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)});

