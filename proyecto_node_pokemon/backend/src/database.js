import mongoose from "mongoose";
import { MONGO_URI } from "./config/config.js";

const connectDB = async () => {
        await mongoose.connect(MONGO_URI).then(
            () => { 
               console.log(" ✅ Connected to DB!");
           },
            err => { 
              console.log("❌ Error al conectar a MongoDB:", err);
           }
        );

                // Definir un esquema para la colección 'pokemons'
                const pokemonSchema = new mongoose.Schema({
                    name: { type: String, required: true },
                    type: [String],
                    stats: [{ name: String, value: Number }],
                });


};

export const closeDB = async () =>{
    mongoose.connection.close();
}

export default connectDB;