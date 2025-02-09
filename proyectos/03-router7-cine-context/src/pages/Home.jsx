import { Link } from "react-router-dom"
import ROUTES from "../routes/paths"
import { useEffect, useState  } from "react"

const Home = () => {

  const [movies, setMovies] = useState([])
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.VITE_API_TOKEN}`;
  const fetchingDataMovies = async () =>{
      const response = await fetch(url)
      if(!response.ok){
          throw new Error("no se ha podido conectar")
      }
      const data = await response.json();
      setMovies(data.results);
  }

  useEffect(() => {
    fetchingDataMovies();
  }, [])


  return (
    <div className="space-y-8">
      {/* CABECERA */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-900">BIENVENIDOS A VIDEOCLUB</h1>
        <p className="mt-2 text-gray-600"></p>
      </header>
      {/* SECCION PELICULAS */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Peliculas populares</h2>
          <Link to={ROUTES.MOVIELIST} className="text-sky-900 hover:underline">Ver todas</Link>
        </div>
      </section>
      {/* SECCION PELICULAS POPULARES */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies?.map((movie)=>{
            <MovieCard key={movie.id} movie={movie} />
        })}
      </section>
    </div>
  )
}

export default Home