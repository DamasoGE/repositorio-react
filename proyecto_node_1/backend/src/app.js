import express from 'express';
import pokemonRoutes from './routes/pokemonRoutes.js'
import { ENDPOINT, PORT } from './config/config.js';
import { fetchAllDataPokemons } from './utils/fetchingPokemon.js';
import { fileURLToPath } from 'url';
import path from 'path';



// Creamos la instancia de express
const app = express();

//ruta para servir imágenes estáticas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/public', express.static(path.join(__dirname, 'public')));

//expresamos el middleware para que nuestro servidor pueda entender json.
app.use(express.json());


const pokemonDB = await fetchAllDataPokemons();

//rutas que podemos usar
app.use(ENDPOINT,pokemonRoutes);
//puerto en el que se va a correr el srevidor

app.listen(PORT, '0.0.0.0', ()=>{ //Escucha en todas las interfaces de red
    console.log(`Server running on http://localhost:${PORT}`);
})
