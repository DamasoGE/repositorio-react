import express from 'express';
import { addUser, getUserProfile } from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js'

const router = express.Router();

//rutas de autentificación

router.post('/', addUser);
router.get('/me', authMiddleware, getUserProfile);

//Aqui poner las rutas que falten (google)

export default router;