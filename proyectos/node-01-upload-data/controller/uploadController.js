//Logica para la configuración de Multer: almacenamiento, eliminacion de archivos

import multer from 'multer';
import path from 'path';
import fs from 'fs';

//configuración de multer

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        //carpeta donde se guardan los archivos
        cb(null, path.join(process.cwd(),'uploads')) //process.cwd() dice donde me encuentro
    },
    filename: (req,file,cb) => {
        //nombre del fichero
        cb(null, `${date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage });

export const uploadFile = (req,res) =>{
    try {
        if(!req.file){
            return res.status(400).send("Por favor suba un fichero");
        }
        res.status(200).send("Archivo subido correctamente");
    } catch (error) {
        //res.status(300).json({ message: error.message}); //UNA FORMA
        res.status(300).send("Error al subir el archivo")
    }
}

// export const listFiles

// export const deleteFiles

export { upload };

