import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express(); //Creamos instancia de express

const __filename = fileURLToPath(import.meta.url); //Ruta del directorio actual
const __dirname = path.dirname(__filename) //Obtenemos el directorio del fichero

// middleware para servir los archivos estáticos html.
app.use(express.static(path.join(__dirname,'public')));

//asociar la carpeta para la subida de archivos en el endpoint /uploads/files
app.use('/uploads/files', )

//configuramos el puerto
const PORT = 3000;
app.listen(PORT,()=>console.log(`Servidor corriendo en el puerto ${PORT}`))