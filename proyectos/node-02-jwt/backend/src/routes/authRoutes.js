import express from 'express';

const router = express.Router();

//ruta POST para registro de usuarios
router.post("/register", funcion_para_registrar);

//ruta POST para login de 
router.post("/login", funcion_para_login);

export default router;