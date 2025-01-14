// gestion de rutas que permiten subir archivos usando controllers/uploadController.js

import { Router } from 'express';
import { upload, uploadFile } from '../controller/uploadController.js'

const router = Router();

//Ruta para subir archivo
router.post("/", upload.single("file") ,uploadFile)
// //Ruta para listar archivo
// router.get("/", listFiles)
// //Ruta para eliminar archivo
// router.delete('/:filename', deleteFile)

export default router;