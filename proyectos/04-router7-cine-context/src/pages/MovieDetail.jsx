import { Link, useParams } from "react-router-dom";
import { getImageUrl, getMovieDetails, getMovieVideos } from "../services/tmdb";
import { useFetch } from "../hooks/useFetch";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useEffect, useState } from "react";

const MovieDetail = () => {

  const { id } = useParams();

  const [videos, setVideos] = useState([])

  const { data, loading, error } = useFetch(
    () => getMovieDetails(Number(id)),
    [id]
  );

  useEffect( () => {
    const fetchVideos = async () =>{
      setVideos(await getMovieVideos(id));
    }
    fetchVideos();
  }, [id])
  

  if (error) {
    return (
      <div className="text-center p-10">
        <h2 className="text-red-600 text-2xl font-bold">
          Error al cargar la película
        </h2>
        <p className="text-xl font-medium">{error.message}</p>
        <Link to="/" className="text-blue-600">
          Volver al inicio
        </Link>
      </div>
    );
  }

  if(loading){
    return <ClimbingBoxLoader />
  }

  return (
    <>
      <article className="max-4-xl mx-auto">
        {console.log(data)}
        {/* Header con imagen de fondo */}
        <header className="relative h-96 mb-2">
          <img 
            className="w-full h-full object-cover rounded-lg"
            src={getImageUrl(data?.backdrop_path, "original")}
            alt={data?.title}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg">
            <div className="absolute bottom-0 text-white p-6">
              <h1 className="text-4xl font-bold">{data?.title}</h1>
              <p className="text-lg">{data?.runtime} min, {data?.release_date.split("-")[0]}</p>
              <p className="text-lg">{data?.vote_average}⭐</p>
            </div>
          </div>

        </header>

        <div className="flex justify-center">
            {data?.genres.map(genre=>(
              <p className="bg-sky-900 text-white mx-2 px-3 py-1 rounded-full text-sm" key={genre.id}>{genre.name}</p>
            ))}
        </div>

        <div className=" m-2 p-2 flex flex-col items-center">
          <h1 className="mb-4 text-2xl font-semibold">Sinopsis</h1>
          <p className="max-w-3xl">{data.overview}</p>
        </div>

        <div className="m-2 p-2 flex flex-col items-center">
          <h1 className="mb-4 text-2xl font-semibold">Trailer</h1>
            <iframe
              className="w-full max-w-3xl h-64 md:h-96 rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${videos.results[0].key}`}
              title="Tráiler de la película"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
        </div>



      </article>


    </>

  )

}

export default MovieDetail