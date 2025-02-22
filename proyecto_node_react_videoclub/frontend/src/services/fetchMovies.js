export const fetchMovieData = async () =>{

    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/movies`);
        if(!response){
            throw new Error ("No ha habido respuesta del servidor");
        }
    
        return await response.json();
    } catch (error) {
        console.log("Error: ", error);
    }
}

export const fetchMovieById = async (id) =>{

    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/movies/${id}`);
        if(!response){
            throw new Error ("No ha habido respuesta del servidor");
        }
    
        return await response.json();
    } catch (error) {
        console.log("Error: ", error);
    }
}

export const fetchMovieImages = (imgName) =>{
    return `${import.meta.env.VITE_BACKEND_API}/images/${imgName}`
}