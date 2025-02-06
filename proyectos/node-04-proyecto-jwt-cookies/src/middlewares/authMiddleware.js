import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";

//middleware para verificar el token

const authMiddleware = async (req, res, next)=>{
    //extraemos el token de la cookie
    try {
        const token = req.cookie.token;
        if(!token){
            return res.status(401).json({message: "Acceso denegado"});
        }
        //Verificamos el token
        const verified = jwt.verify(token, JWT_SECRET);
        req.userId = verified.userId;
        next();
    } catch (error) {
        res.status(401).json({message: "Token no valido o expirado"});
        console.log("Error: ", error);
    }
}