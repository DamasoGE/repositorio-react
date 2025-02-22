import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";


import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { fetchMovieData } from "../services/fetchMovies";

const Home = () => {

  const [movieData, setMovieData] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () =>{
      const data = await fetchMovieData();
      setMovieData(data); 
      setLoading(false);
    }

    fetchData();

  }, [])
  
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-950">
          Bienvenido a Videoclub
        </h1>
      </header>
      {/* sección de películas populares */}
      <section>
        <h2 className="text-2xl font-bold text-sky-950 mb-10">
          Películas Disponibles
        </h2>
        {loading ? (
          <ClimbingBoxLoader />
        ) : (
          <>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            xl:grid-cols-5 gap-6"
            >
              {movieData?.map((movie) => {
                return (
                  // aquí va el componente MovieCard
                  <MovieCard key={movie.id} movie={movie} />
                )
              })}
            </div>

          </>
        )}
      </section>
    </div>
  );
};

export default Home;
