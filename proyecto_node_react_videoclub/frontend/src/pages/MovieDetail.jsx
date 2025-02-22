import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useEffect, useState } from "react";
import { fetchMovieById, fetchMovieImages } from "../services/fetchMovies";

const MovieDetail = () => {

  const { id } = useParams();


  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () =>{
      const data = await fetchMovieById(id);
        setMovie(data); 
        setLoading(false);
    }

    fetchData();

  }, [id])

  if(loading){
    return <ClimbingBoxLoader />
  }

  return (
    <>
      <article className="max-4-xl mx-auto">
        {/* Header con imagen de fondo */}
        <header className="relative h-96 mb-2">
          <img 
            className="w-full h-full object-cover rounded-lg"
            src={fetchMovieImages(movie.backdrop_path)}
            alt={movie?.title}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg">
            <div className="absolute bottom-0 text-white p-6">
              <h1 className="text-4xl font-bold">{movie?.title}</h1>
              <p className="text-lg">{movie?.runtime} min, {movie?.release_date.split("-")[0]}</p>
              <p className="text-lg">{movie?.vote_average}⭐</p>
            </div>
          </div>

        </header>

        <div className="flex justify-center">
            {movie?.genres.map(genre=>(
              <p className="bg-sky-900 text-white mx-2 px-3 py-1 rounded-full text-sm" key={genre.id}>{genre.name}</p>
            ))}
        </div>

        <div className=" m-2 p-2 flex flex-col items-center">
          <h1 className="mb-4 text-2xl font-semibold">Sinopsis</h1>
          <p className="max-w-3xl">{movie?.overview}</p>
        </div>


        <div className="m-2 p-2 flex flex-col items-center">
          <h1 className="mb-4 text-2xl font-semibold">Trailer</h1>
          { movie.video != null ? (
            <iframe
            className="w-full max-w-3xl h-64 md:h-96 rounded-lg shadow-lg"
            src={`${movie.video}`}
            title="Tráiler de la película"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
          ):(
            <p>No hay trailer disponible</p>
          ) }
        </div>

      </article>


    </>

  )

}

export default MovieDetail