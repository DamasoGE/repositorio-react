import cookieParser from "cookie-parser";
import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import { FRONTEND_URL } from "./config/config.js";
import { fetchAllDataMovies } from "./utils/fetchMovies.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(express.json());
app.use(cookieParser());

//conecta a la base de datos y coge las películas de la api de tmdb
const movieDB = await fetchAllDataMovies();

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/api/images", express.static(path.join(__dirname, "../public/img")))

export default app;
