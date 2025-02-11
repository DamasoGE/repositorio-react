import express from 'express';
import { login, register, logout } from '../controllers/authController.js'

const router = express.Router();

//rutas de autentificación

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);

//Aqui poner las rutas que falten (google)

export default router;