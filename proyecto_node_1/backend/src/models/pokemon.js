import mongoose from "mongoose";

const statSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true }
});

const pokemonSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    stats: { type: [statSchema], required: true },  // Array de stats
    types: { type: [String], required: true },     // Array de tipos (ej. ["Fire", "Flying"])
    favorite: {type: Boolean, default:false}
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

export default Pokemon;