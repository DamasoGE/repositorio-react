import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"
import { ROUTES } from "../routes/paths";

const api = import.meta.env.VITE_BACKEND_ENDPOINT;

const SearchPage = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();

    //busqueda de nombre en la api
    try {
      const response = await fetch(`${api}/pokemon/${search.toLocaleLowerCase()}`)
      if(!response.ok){
        throw new Error("Pokemon no encontrado")
      }
      const data = await response.json();
      navigate(`${ROUTES.POKEMON_DETAIL.replace(":name", search.toLocaleLowerCase())}`)
    } catch (error) {
      toast.error("Pokemon no encontrado", error, {
        style: {
          background: "white",
          color: "black"
        }
      });
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Buscar Pokemon</h1>
      <form 
      onSubmit={handleSubmit}
      className="max-w-md mx-auto"
      >
      <input 
      type="text" 
      placeholder="Buscar pokemon" 
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      className="flex-1 p-2 border rounded-lg"
      />
      <button className="bg-blue-500 text-white px-4 py-2 mx-4 rounded hover:bg-blue-800">Buscar</button>
      </form>
    </div>
  )
}

export default SearchPage