import express from 'express';

const router = express.Router();

//rutas de autentificación

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);

//Aqui poner las rutas que falten (google)

export default router;