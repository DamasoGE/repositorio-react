// importamos la librería jwt para manejar los tokens

import jwt from 'jsonwebtoken';

//creamos el middleware para proteger las rutas

export const auth = (req,res,next)=>{
    try {
        // Extraemos de la parte del token eliminando Bearer 
        // buscando la cadena authorization en el header

        const token = req.header("Authorization")?.replace("Bearer","");
        //verificamos si el token está
        if(!token){
            res.status(401).json({message:"Token no proporcionado"});
        }
        //verificamos y decodificamos el token.
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // añador el id del usuario al objeto request para usarlo después

        req.userId = decoded.userId;

        //continuamos con el siguiente middleware
        next();

    } catch (error) {
        res.status(401).json({message: "Debes autentificarte para continuar"})
    }
}