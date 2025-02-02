import connectDB from "../database.js";
import Pokemon from "../models/pokemon.js";
import { fileURLToPath } from 'url';
import path from 'path';

connectDB();


export const getPokemonList = async (req,res)=>{
    //retorno todos los productos

    const pokemonList = await Pokemon.find()

    if(pokemonList.length===0){
        return res.status(404).json({error: "No hay pokemon cargados"});
    }
    res.json(pokemonList);
}

export const getPokemonByName = async (req,res)=>{

    const { name } = req.params

    const pokemon = await Pokemon.findOne({ name: name });

    if(pokemon==null){
        return res.status(404).json({ error: "Pokemon not Found"})
    }

    res.json(pokemon);
}

export const toogleFavorite = async (req, res) => {
    try {
      const { name } = req.params;
      
      // Buscar el Pokémon por su ID
      const pokemon = await Pokemon.findOne({ name: name });
      
      if (!pokemon) {
        return res.status(404).json({ message: "❌ Pokémon no encontrado" });
      }
  
      // Alternar el estado de favorito (true ↔ false)
      pokemon.favorite = !pokemon.favorite;
      await pokemon.save();
  
      res.json({ message: "✅ Estado de favorito actualizado", pokemon });
    } catch (error) {
      res.status(500).json({ message: "❌ Error al actualizar el favorito", error });
    }
  }

export const getPokemonImage = async (req, res) => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const { id } = req.params;

    const imagePath = path.join(`${__dirname}/../../`, 'public', 'img', `${id}.png`);
  
    res.sendFile(imagePath, (err) => {
      if (err) {
        console.error(err);
        return res.status(404).send('Imagen no encontrada');
      }
    });
};