import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
    name: {type: String}
});

// Definir el esquema del usuario
const movieSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },  
  title: {type: String},
  runtime: {type: String},
  release_date: {type: Date},
  genres: {type: [genreSchema]},
  overview: {type: String},
  vote_average: {type: Number},
  popularity: {type: Number},
  backdrop_path: {type: String},
  poster_path: {type: String},
  video: {type: String}
});

export default mongoose.model("Movie", movieSchema);