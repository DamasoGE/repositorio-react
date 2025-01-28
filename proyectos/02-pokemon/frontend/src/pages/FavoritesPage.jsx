import { Link } from "react-router-dom";
import { usePokemon } from "../context/pokemonContext"
import { ROUTES } from "../routes/paths";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = usePokemon();

  if(favorites.length == 0){
    return(
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold mb-4">
          Favoritos
        </h1>
        <p>
          No hay pokemon favoritos
        </p>
        <Link to={ROUTES.HOME} className="text-blue-500 underline">Volver a la página de inicio</Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Tus pokemon favoritos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        { favorites.map((pokemon)=>(
            <div key={pokemon.id} className="bg-white shadow-md rounded-md p-6">
              <div className="relative group">
                <img src={pokemon.sprites.front_default} alt={pokemon.name}
                  className="w-32 h-32 mx-auto transform group-hover:scale-140 transition-transform duration-500" 
                />
              </div>
              <h2 className="text-xl font-semibold text-center capitalize">
                {pokemon.name}
              </h2>
              {/* Aqui van los botones */}
              <div className="flex justify-center space-x-2 mt-4">
                <button 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800"
                onClick={()=> removeFromFavorites(pokemon.id)}
                //onClick={han} aqui llamare a la funcion del contexto de favoritos
                >
                  Eliminar de Favoritos
                </button>
                
                  <Link 
                    to={`${ROUTES.SEARCH}/${pokemon.name}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800"
                  > 
                    Ver detalles 
                  </Link>

              </div>
          

            </div>
          ))}
      </div>
    </div>
  )
}

export default FavoritesPage