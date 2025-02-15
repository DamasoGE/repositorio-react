import { useLoaderData, useNavigate } from "react-router-dom"
import { usePokemon } from "../context/PokemonContext.jsx";

const PokemonDetailPage = () => {

  const pokemon = useLoaderData();

  const { favorites, toggleFavorites } = usePokemon();

  const api = import.meta.env.VITE_BACKEND_ENDPOINT;

  //navegación programática
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <button 
          className="mb-4 text-blue-800 hover:underline"
          onClick={()=>navigate(-1)}>
          Volver
        </button>
        <img 
        className="w-48 h-48 mx-auto"
        src={`${api}/pokemon/image/${pokemon.id}`} 
        alt={pokemon.name} />
        <h1
        className="text-3xl font-bold text-center capitalize mb-4"
        >
          {pokemon.name}
        </h1>

        <button
                  onClick={() => toggleFavorites(pokemon)}
                  className={favorites.includes(pokemon.id) ? 
                    "text-xl w-full mt-2 mb-2 text-white p-2 bg-red-500 hover:bg-red-800 rounded-lg":
                    "text-xl w-full mt-2 mb-2 text-white p-2 bg-pink-500 hover:bg-pink-800 rounded-lg"}
                >
                  {favorites.includes(pokemon.id) ? "Quitar de favoritos" : "Añadir a favoritos"}
        </button>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <h2 className="text-2xl text-rose-400 font-semibold mb-2">Estadisticas</h2>
              {pokemon.stats.map((stat)=>(
                <div key={stat.stat.name}>
                  <span className="text-xl font-bold capitalize">
                    {stat.stat.name}: {stat.base_stat}
                  </span>
                </div>
              )
              )}
          </div>

          <div>
          <h2 className="text-2xl text-rose-400 font-semibold mb-2">Tipos</h2>
            {pokemon.types.map((type)=>(
                  <div key={type.type.name}>
                    <span className="text-xl font-bold capitalize">
                      {type.type.name}
                    </span>
                  </div>
                )
                )}
          </div>

        </div>

      </div>
    </div>
  )
}

export default PokemonDetailPage