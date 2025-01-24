//Importaciones
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import RootLayout from "../layout/RootLayout"
import Home from "../pages/Home";
import { ROUTES } from "./paths"
import SearchPage from "../pages/SearchPage";
import FavoritesPage from "../pages/FavoritesPage";
import PokemonDetailPage from "../pages/PokemonDetailPage";
import AboutPage from "../pages/AboutPage";



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
            },
            {
                path: ROUTES.ABOUT,
                element: <AboutPage />
            },

        ]
    }
]);