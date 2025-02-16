const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN;
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const VITE_BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

// objeto que me permite decidir el tamaño de las imágenes
export const IMAGES_SIZES = {
  POSTER: "w500",
  BACKDROP: "original",
};

// ------------- FUNCIONES QUE VOY A CREAR PARA LA API -------------
// función para obtener la url de una imagen
// le paso un path : https://image.tmdb.org/t/p/original/zo8CIjJ2nfNOevqNajwMRO6Hwka.jpg
export const getImageUrl = (path, size = IMAGES_SIZES.POSTER) => {
  if (!path) return "/placeholder-movie.jpg";
  return `${VITE_BASE_IMAGE_URL}/${size}${path}`;
};


const fetchFromAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(
      `${VITE_BASE_URL}${endpoint}?api_key=${VITE_API_TOKEN}&language=es-ES&${new URLSearchParams(
        options
      )}`
    );
    if (!response.ok) {
      throw new Error("Error en la petición");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    // throw new Error("Error en la petición");
    return error;
  }
};

// función para obtener las películas populares
//Direccion completa: https://api.themoviedb.org/3/movie/popular?api_key=4fd5df499036cbfd709e9051697545b8&language=es-ES&page=1
export const getPopularMovies = async (page = 1) => {
  // /movie/popular
  return fetchFromAPI("/movie/popular", { page });
};

// detalles de las películas
// ejemplo: https://api.themoviedb.org/3/movie/100?api_key=4fd5df499036cbfd709e9051697545b8&language=es-ES
export const getMovieDetails = async (id) => {
  return fetchFromAPI(`/movie/${id}`);
};

// búsqueda de una película por un query de busqueda

export const searchMovies = async (query, page = 1) => {
  return fetchFromAPI("/search/movie", { query, page });
};

export const getMovieVideos = async (id) => {
  return fetchFromAPI(`/movie/${id}/videos`);
};
