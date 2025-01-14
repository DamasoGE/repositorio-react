import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import uploadRoutes from "./routes/uploadRoutes.js"

const app = express(); //Creamos instancia de express

const __filename = fileURLToPath(import.meta.url); //Ruta del directorio actual
const __dirname = path.dirname(__filename) //Obtenemos el directorio del fichero

//ruta de la carpeta uploads
const uploadDir = path.join(__dirname, "uploads");

//comprobacion si la carpeta existe y si no la creamos
if(!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
    console.log(`Carpeta uploads ${uploadDir} creada correctamente`);
}


// middleware para servir los archivos estáticos html.
app.use(express.static(path.join(__dirname,'public')));

//asociar la carpeta para la subida de archivos en el endpoint /uploads/files
app.use('/uploads/files', uploadRoutes)

//configuramos el puerto
const PORT = 3000;
app.listen(PORT,()=>console.log(`Servidor corriendo en el puerto ${PORT}`))