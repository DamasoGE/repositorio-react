import express from 'express';

const router = express.Router();

//rutas de autentificación

router.post('/', addUser);
router.get('/me', middleware_auth, getUserProfile);

//Aqui poner las rutas que falten (google)

export default router;