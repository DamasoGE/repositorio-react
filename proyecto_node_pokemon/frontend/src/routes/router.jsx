//Importaciones
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.jsx";
import RootLayout from "../layout/RootLayout.jsx"
import Home from "../pages/Home.jsx";
import { ROUTES } from "./paths.js"
import SearchPage from "../pages/SearchPage.jsx";
import FavoritesPage from "../pages/FavoritesPage.jsx";
import PokemonDetailPage from "../pages/PokemonDetailPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";



export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home />
            },
            {
                path: ROUTES.SEARCH,
                element: <SearchPage />
            },
            {
                path: ROUTES.FAVORITES,
                element: <FavoritesPage />
            },
            {
                path: ROUTES.POKEMON_DETAIL,
                element: <PokemonDetailPage />,
                errorElement: <ErrorPage />,
                //loader: // el loeader permite dehacer un fetch directamente en la ruta
                loader: async ({ params })=>{
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ params.name }`);
                    if(!response.ok){
                        throw new Error("Pokemon not found");
                    }
                    return await response.json();
                }
            },
            {
                path: ROUTES.ABOUT,
                element: <AboutPage />
            },

        ]
    }
]);