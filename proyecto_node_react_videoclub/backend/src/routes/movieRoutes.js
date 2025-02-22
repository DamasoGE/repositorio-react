import express from "express";
import { getMovieById, getMovies } from "../controllers/movieController.js";

const router = express.Router();

// Rutas de autenticación
router.get("/", getMovies);
router.get("/:id", getMovieById);


export default router;
