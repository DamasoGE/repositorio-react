import { URL_API } from "../config/config.js";
import { closeDB } from "../database.js";
import connectDB from "../database.js";
import Pokemon from "../models/pokemon.js";
import downloadImage from "./downloadImage.js";



await connectDB();

// export const fetchPokemon = async () =>{
//   try {
//     const response = await fetch(URL_API) //la información de cada pokemon está dentro de una url dentro de cada objeto
//     if(!response.ok){
//       throw new Error ("Something went wrong");
//     }
//     return await response.json();
//   } catch (error) {
//     console.log("Error fetching pokemon:", error);
//   }
// }

export const fetchAllDataPokemons = async () => {

  const isPokemonCharged = await Pokemon.countDocuments() ? true:false;

  if(!isPokemonCharged){
    try {
      const response = await fetch(URL_API) //la información de cada pokemon está dentro de una url dentro de cada objeto
      if(!response.ok){
        throw new Error ("Something went wrong");
      }
      const data = await response.json();

      //Ahora obtengamos la data de todos los pokemon uno detrás de otro
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon)=>{
          const respon = await fetch(pokemon.url)
          if(!respon.ok){
            throw new Error ("Something went wrong");
          }
          return await respon.json();
          
        })
      )


      pokemonDetails.map( async (pokemon)=>{

        const url = pokemon.sprites.front_default;
        const image_path = `../../public/img/${pokemon.id}.png`

        downloadImage(url,image_path);

        const stats = pokemon.stats.map((stats)=> {
            return { name: stats.stat.name, value: stats.base_stat}}
        )

        const types = pokemon.types.map((types)=>{
            return types.type.name;
        })

        try {

            const newPokemon = new Pokemon({
                id: pokemon.id,  // ID personalizado (ejemplo: el ID de Charizard en la Pokédex)
                name: pokemon.name,
                stats: stats,
                types: types
            });
            
            await newPokemon.save();
            console.log("✅ Pokémon agregado:", newPokemon.name);

        } catch (error) {
            console.error("❌ Error al agregar Pokémon:", error);
        } finally {

        }



      }
    )


    } catch (error) {
      console.log("Error:", error);
    }
  }else{
    console.log("✅ Ya están cargados");
  }
  


}