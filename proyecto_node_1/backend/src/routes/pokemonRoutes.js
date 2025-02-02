import express from 'express';
import { getPokemonByName, getPokemonImage, getPokemonList, toogleFavorite } from '../controllers/PokemonController.js';


// const pokemonList = await fetchPokemon(); 


// 1.-Creamos un router para manejar las rutas de los productos
const router = express.Router();


// 2.- Creamos la ruta GET para obtener la lista de pokemon
router.get("/", getPokemonList)

//3.-Creamos la ruta para obtener la información de uno solo
router.get("/:name", getPokemonByName)
//Para manipular los favoritos
router.put("/:name", toogleFavorite);


// Endpoint para coger las imagenes
router.get("/image/:id", getPokemonImage);



//4.-Exportamos el router
export default router;