import { Link, useParams } from "react-router-dom";
import { getImageUrl, getMovieDetails } from "../services/tmdb";
import { useFetch } from "../hooks/useFetch";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const MovieDetail = () => {

  const { id } = useParams();

  const { data, loading, error } = useFetch(
    () => getMovieDetails(Number(id)),
    [id]
  );

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
        {/* Header con imagen de fondo */}
        <header className="relative h-96 mb-8">
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
      </article>

      <div> {data?.title} </div>
    </>

  )

}

export default MovieDetail