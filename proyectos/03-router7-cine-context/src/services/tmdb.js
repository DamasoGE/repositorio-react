const VITE_API_TOKEN =import.meta.env.VITE_API_TOKEN;
const VITE_BASE_URL =import.meta.env.VITE_BASE_URL;
const VITE_BASE_IMG_URL=import.meta.env.VITE_BASE_IMG_URL;


//Objeto que me permite decidir el tamaño de las imagenes
export const IMAGE_SIZES = {
    POSTER: "w500",
    BACKDROP: "original",
}

//--------FUNCIONES QUE VOY A CREAR PARA LA API ------------//

export const getImageUrl = (path, size = IMAGE_SIZES) =>{
    if(!path) return "/placeholder-movie.png"; //esto puede ser que este mal **********************
    return `${VITE_BASE_IMG_URL}/${size}${path}`

}

export const fetchFromAPI = async (endpoint, options=[]) =>{
    try {
        const response = await fetch(`${VITE_BASE_URL}${endpoint}?api_key=${VITE_API_TOKEN}&language=es-ES&${ new URLSearchParams(options)}`);
        if(!response.ok) throw new Error("No se ha podido hacer fetch")
        return await response.json();

    } catch (error) {
        console.log("Error: ", error);
    }
}

export const getPopularMovies = async ( page = 1 ) =>{
    return fetchFromAPI("movies/popular", { page })
}

export const getMoviesDetails = async ( id ) =>{
    return fetchFromAPI(`movies/${id}`);
}

export const searchMovies = async(query, page = 1) =>{
    return fetchFromAPI("search/movie", {query, page})
}

export const getMovieVideos = async (id) =>{
    return fetchFromAPI(`/movie/${id}/videos`)
}