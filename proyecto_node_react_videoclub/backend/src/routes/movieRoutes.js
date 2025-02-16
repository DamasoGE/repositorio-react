import express from "express";
import { getMovies } from "../controllers/movieController.js";

const router = express.Router();

// Rutas de autenticación
router.get("/movies", getMovies);


export default router;
