import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import MovieList from "../pages/MovieList";
import MovieDetails from "../pages/MovieDetails";
import Search from "../pages/Search";
import Reviews from "../pages/Reviews";
import Favorites from "../pages/Favorites";
import ROUTES from "./paths";


export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: ROUTES.MOVIELIST,
                element: <MovieList />
            },
            {
                path: ROUTES.MOVIEDETAILS,
                element: <MovieDetails />
            },
            // {
            //     path: ROUTES.SEARCH,
            //     element: <Search />
            // },
            // {
            //     path: ROUTES.REVIEWS,
            //     element: <Reviews />
            // },
            // {
            //     path: ROUTES.FAVORITES,
            //     element: <Favorites />
            // }
        ]
    }
]);