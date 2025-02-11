import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser' ;
import authRoutes from './routes/authRoutes.js';
import usersRoutes from './routes/userRoutes.js';
import { connectDB } from './config/db.js';


const app = express();

// CONFIGURACIÓN DE EXPRESS

//cors
const allowOrigins = [ "http://localhost:5173", "http://localhost:5174"]
app.use(cors({
    origin: (origin, callback)=>{
        if(!origin || allowOrigins.includes(origin)){
            callback(null, origin);
        }else{
            callback(new Error("Origin not allowed"))
        }
    },
    credentials:true, //permite el envio de cookies
    methods:["GET","POST","PUT","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"],
}))

app.use(express.json());
app.use(cookieParser());

//conexión a la base de datos
connectDB();

//rutas

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);

export default app;