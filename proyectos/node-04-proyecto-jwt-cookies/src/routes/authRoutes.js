import express from 'express';
import { login, register, logout } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

//rutas de autentificación

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);

//Aqui poner las rutas que falten (google)

router.get("/check-auth", authMiddleware, (req,res) =>{
    res.status(200).json({ message: "Autentificado", userId: req.userId })
})

export default router;