import { createContext, useContext, useState } from "react";
import { toast } from 'sonner';

//creamos el contexto
const PokemonContext = createContext();
const api = import.meta.env.VITE_BACKEND_ENDPOINT;


export function PokemonProvider({ children }){

    const [favorites, setFavorites] = useState([])
    const [pokemons, setPokemons] = useState([]);


    const fetchPokemons = async (setIsLoading) => {
        try {
            const response = await fetch(`${api}/pokemon`); // Obtener todos los Pokémon
            if (!response.ok) {
                throw new Error("Algo salió mal al obtener los Pokémon");
            }
            const data = await response.json();

            setPokemons(data);

            // Solo actualizar los favoritos si son nuevos o no están en el estado
            const newFavorites = data.filter(pokemon => pokemon.favorite && !favorites.includes(pokemon.id))
                                      .map(pokemon => pokemon.id);

            if (newFavorites.length > 0) {
                setFavorites(prevFavorites => [...prevFavorites, ...newFavorites]);
            }

        } catch (error) {
            console.log("Error al obtener los Pokémon:", error);
        }

        setIsLoading(false);
    };

    const toggleFavorites = async (pokemon) =>{
        //comprobar si el pokemon ya está en favoritos
        if(favorites.some(pid => pid==pokemon.id)){
            const favoritesfilter = favorites.filter((pid)=> pid != pokemon.id)
            //mensaje de error
            try {
                await fetch(`${api}/pokemon/${pokemon.name}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ favorito: false })
                });
                setFavorites(favoritesfilter);
    
                toast.error(`El pokemon ${pokemon.name} se ha eliminado de favoritos`, {
                    style: {},
                    icon: "❌"
                });
            } catch (error) {
                console.error('Error al eliminar de favoritos', error);
                toast.error('Error al eliminar de favoritos', { icon: "❌" });
            }
    
            return;

        }else{

            try {
                await fetch(`${api}/pokemon/${pokemon.name}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ favorito: true }) // Establecer como favorito
                });

                setFavorites((prevFavorites) => [...prevFavorites, pokemon.id]);
    
                toast.success(`El pokemon ${pokemon.name} ha sido añadido en favoritos`, {
                    style: {},
                    icon: "⭐"
                });
            } catch (error) {
                console.error('Error al añadir a favoritos', error);
                toast.error('Error al añadir a favoritos', { icon: "⭐" });
            }
        }



    }


    return (
        <PokemonContext.Provider value = {{favorites, toggleFavorites, pokemons ,fetchPokemons}}>
            {children}
        </PokemonContext.Provider>
    )

}


//--------------HOOK PARA CONSUMIR EL CONTEXTO -----//

export const usePokemon = () =>{
    const context = useContext(PokemonContext)

    if(context===undefined){
        throw new Error("usePokemon debe ser usado dentro de un PokemonProvider")
    }

    return context;
}