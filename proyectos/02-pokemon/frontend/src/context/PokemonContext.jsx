import { createContext, useContext, useState } from "react";
import { toast } from 'sonner';

//creamos el contexto
const PokemonContext = createContext();

export function PokemonProvider({ children }){

    const [favorites, setFavorites] = useState([])

    const addToFavorites = (pokemon) =>{
        //comprobar si el pokemon ya está en favoritos
        if(favorites.some(p => p?.id==pokemon.id)){
            //mensaje de error
            toast.error(`El pokemon ${pokemon.name} ya está en favoritos`, {
                style: {

                },
                icon:"❌"
            });

            return;
        }else{
            toast.success(`El pokemon ${pokemon.name} ha sido añadido en favoritos`, {
                style: {

                },
                icon:"⭐"
            });
        }

        setFavorites((prevFavorites)=>[...prevFavorites, pokemon])

    }

    const removeFromFavorites = (pokemonId) => {
        setFavorites((prevFavorites)=>prevFavorites.filter((p)=> p.id!=pokemonId))

        toast.success(`El pokemon ha sido eliminado en favoritos`, {
            style: {

            },
            icon:"❌"
        });
    }

    return (
        <PokemonContext.Provider value = {{favorites, addToFavorites, removeFromFavorites}}>
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