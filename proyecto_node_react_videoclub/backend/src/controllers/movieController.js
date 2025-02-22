import Movie from "../models/Movie.js";

const getMovies = async (req,res)=>{
    //retorno todos los productos

    const movieList = await Movie.find()

    if(movieList.length===0){
        return res.status(404).json({error: "No hay películas cargadas"});
    }
    res.json(movieList);
}

export const getMovieById = async (req,res)=>{

    const { id } = req.params

    const movie = await Movie.findOne({ id: id });

    if(movie==null){
        return res.status(404).json({ error: "Pelicula no encontrada"})
    }

    res.json(movie);
}


export { getMovies }