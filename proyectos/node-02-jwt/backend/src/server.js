import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//cargamos las variables de entorno
dotenv.config();

const app=express();

//aplicamos las middlewares CORS Y parse de JSON
app.use(cors());
app.use(express.json());

//Conexion con la base de datos

//rutas
//app.use("/auth", xxxx)
//app.use("/user", xxxx)

//gestionar los errores
app.use((err,req,res,next) => {
    //registrar un error en el debugging
    console.error(err.stack); // ¿stack?

    res
        .status(500)
        .json({ mensaje: err.mensaje || "Error interno en el servidor"});
})

//Iniciar el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en puerto ${PORT}`)
})