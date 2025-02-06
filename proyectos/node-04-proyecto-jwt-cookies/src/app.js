import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser' ;
import authRoutes from './routes/authRoutes';
import usersRoutes from './routes/userRoutes';
import { connectDB } from './config/db';


const app = express();

// CONFIGURACIÓN DE EXPRESS

//cors
const allowOrigin = [ "http://localhost:5173", "http://localhost:5174"]
app.use(cors()) //<--- Recordar modificarlo ********************

app.use(express.json());
app.use(cookieParser());

//conexión a la base de datos
connectDB();

//rutas

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);

export default app;