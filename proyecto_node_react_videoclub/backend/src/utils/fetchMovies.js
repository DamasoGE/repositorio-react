import { IMAGE_URL, URL_API, URL_API_TOKEN } from "../config/config.js";
import connectDB from "../config/db.js";
import Movie from "../models/Movie.js";
import downloadImage from "./downloadImage.js";

await connectDB();

export const fetchAllDataMovies = async () => {

  const isMovieCharged = await Movie.countDocuments() ? true:false;
    //URL_API=https://api.themoviedb.org/3
  if(!isMovieCharged){
    try {
      const urlPopular = `${URL_API}/movie/popular?api_key=${URL_API_TOKEN}&language=es-ES&page=1`;
      const response = await fetch(`${urlPopular}`) //la información de cada película está dentro de una url dentro de cada objeto
      if(!response.ok){
        throw new Error ("Something went wrong getting populars");
      }
      const data = await response.json();

      //Ahora obtengamos la data de todos los pokemon uno detrás de otro
      const movieDetails = await Promise.all(
        data.results.map(async (movie)=>{
          const urlMovie = `${URL_API}/movie/${movie.id}?api_key=${URL_API_TOKEN}&language=es-ES`
          const respon = await fetch(`${urlMovie}`)
          if(!respon.ok){
            throw new Error ("Something went wrong getting movies");
          }
          return await respon.json();

        })
      )


      movieDetails.map( async (movie)=>{

        const urlBackdrop =`${IMAGE_URL}/original/${movie.backdrop_path}`
        const urlPoster = `${IMAGE_URL}/w500/${movie.poster_path}`

        const backdrop_path = `${movie.id}-backdrop.jpg`
        const poster_path = `${movie.id}-poster.jpg`

        downloadImage(urlBackdrop,`../../public/img/${backdrop_path}`);
        downloadImage(urlPoster,`../../public/img/${poster_path}`);

        const genres = movie.genres.map((genre)=> {
            return { name: genre.name}
        });

        const videosResponse = await fetch(`${URL_API}/movie/${movie.id}/videos?api_key=${URL_API_TOKEN}&language=es-ES`)

        if(!videosResponse){
            throw new Error("No se ha podido acceder a videos")
        }

        const videosData = await videosResponse.json();

        let video = null;
        if(videosData.results.length > 0){
            const videoKey = videosData.results[0].key
            video = `https://www.youtube.com/embed/${videoKey}`;
        }

        try {

            const newMovie = new Movie({
                id: movie.id, 
                title: movie.title,
                runtime: movie.runtime,
                release_date: movie.release_date,
                genres: genres,
                overview: movie.overview,
                vote_average: movie.vote_average,
                popularity: movie.popularity,
                backdrop_path: backdrop_path,
                poster_path: poster_path,
                video: video
            });
            
            await newMovie.save();
            console.log("✅ Película agregada:", newMovie.title);

        } catch (error) {
            console.error("❌ Error al agregar Película:", error);
        } finally {

        }
      })


    } catch (error) {
      console.log("Error:", error);
    }
  }else{
    console.log("✅ Ya están cargados");
  }
  


}