import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import { usePokemon } from "../context/PokemonContext.jsx";

const Home = () => {

  const api = import.meta.env.VITE_BACKEND_ENDPOINT;

  const [isLoading, setIsLoading] = useState(true);

  const { favorites, toggleFavorites, pokemons, fetchPokemons } = usePokemon();

  useEffect(() => {
    fetchPokemons(setIsLoading);
  }, [])

  if(isLoading) {
    return <Spinner></Spinner>
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pokemon disponibles</h1>
      {/* Aqui irían las tarjetitas que deberían ir a un componente */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
        {

          pokemons.sort((a, b) => a.id - b.id).map((pokemon)=>(
            <div key={pokemon.id} className="bg-white shadow-md rounded-md p-6">
              <div className="relative group">
                <img src={`${api}/pokemon/image/${pokemon.id}`} alt={pokemon.name}
                  className="w-32 h-32 mx-auto transform group-hover:scale-140 transition-transform duration-500" 
                />
              </div>
              <h2 className="text-xl font-semibold text-center capitalize">
                {pokemon.name}
              </h2>
              

              {/* Aqui van los botones */}
              <div className="flex justify-center space-x-2 mt-4">

                <button
                  onClick={() => toggleFavorites(pokemon)}
                  className={favorites.includes(pokemon.id) ? 
                    "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800":
                    "bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-800"}
                >
                  {favorites.includes(pokemon.id) ? "Quitar de favoritos" : "Añadir a favoritos"}
                </button>

                
                <Link 
                  to={`/search/${pokemon.name}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800"
                > 
                  Ver detalles 
                </Link>

              </div>
          

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home