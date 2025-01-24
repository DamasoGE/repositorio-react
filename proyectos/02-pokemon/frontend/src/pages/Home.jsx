import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPokemons()
  }, [])
  
  const fetchPokemons = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20") //la información de cada pokemon está dentro de una url dentro de cada objeto
      if(!response.ok){
        throw new Error ("Something went wrong");
      }
      const data = await response.json();
      //Ahora obtengamos la data de todos los pokemon uno detrás de otro
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon)=>{
          const respon = await fetch(pokemon.url)
          if(!response.ok){
            throw new Error ("Something went wrong");
          }
          return respon.json();
        })
      )
      setPokemons(pokemonDetails);
    } catch (error) {
      console.log("Error fetching pokemon:", error);
    } finally {
      setIsLoading(false)
    }


  }

  if(isLoading) {
    return <div> Loading...</div>
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pokemon disponibles</h1>
      {/* Aqui irían las tarjetitas que deberían ir a un componente */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
        {
          pokemons.map((pokemon)=>(
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
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-800"
                //onClick={han} aqui llamare a la funcion del contexto de favoritos
                >
                  Añadir a Favoritos
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