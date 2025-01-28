import express from 'express';
import { auth } from '../middleware/authMiddleware';

const router = express.Router()

//router.get("/perfil")
// ruta con un middleware para comprobar la autentificación
router.get("/perfil", auth, getProfile);

export default router;