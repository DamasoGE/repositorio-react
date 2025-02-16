import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import { FRONTEND_URL } from "./config/config.js";
import { fetchAllDataMovies } from "./utils/fetchMovies.js";

const app = express();

// Configuración de CORS (Express maneja CORS, no Nginx)
const allowedOrigins = [
  "http://localhost:5174",
  FRONTEND_URL,
  "http://localhost:5173",
];


app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error("No permitido por CORS"));
      }
    },
    credentials: true, // Permitir cookies
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser());

//conecta a la base de datos y coge las películas de la api de tmdb
const movieDB = await fetchAllDataMovies();

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes)

export default app;
