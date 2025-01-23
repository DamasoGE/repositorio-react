import cors from 'cors';

export const corsOptions = {
    origin: process.env.FRONTEND_URL, //URL's permitidas
    methods: ["GET","POST","PUT","DELETE"], //Metodos permitidos
    allowedHeaders: ["Content-Type","Authorization"], //Cabeceras permitidas
    credentials: true, //Permitir envio de cookies y headers en la autenticacion
}