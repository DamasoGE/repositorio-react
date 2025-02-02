// importamos la librería jwt para manejar los tokens

import jwt from 'jsonwebtoken';

//creamos el middleware para proteger las rutas

export const auth = (req,res,next)=>{
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res
        .status(401)
        .json({ error: "Acceso denegado, token no proporcionado" });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(400).json({ error: "Token inválido" });
    }
}

export const admin = (req, res, next) => {
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ error: "Acceso denegado, se requiere rol de admin" });
    }
    next();
  };