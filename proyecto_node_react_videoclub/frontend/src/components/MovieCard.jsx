import { Link } from "react-router-dom";
import { fetchMovieImages } from "../services/fetchMovies";

const MovieCard = ({ movie }) => {
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";
  return (
    <Link to={`/movies/${movie.id}`} className="bg-sky-800">
      <article className="card transform transition-transform duration-300 hover:scale-105">
        <div className="relative aspect-[2/3]">
          <img
            src={fetchMovieImages(movie.poster_path)}
            alt={movie.title}
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white py-1  px-2 rounded">
            ⭐ {rating}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg line-clamp-2 text-white">{movie.title}</h3>
          <p className="text-sm text-white line-clamp-2" >
            {new Date(movie.release_date).getFullYear()}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
