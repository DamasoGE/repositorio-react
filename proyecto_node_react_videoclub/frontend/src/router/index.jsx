import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import Reviews from "../pages/Reviews";
import Search from "../pages/Search";
import Login from "../pages/login";
import Register from "../pages/Register";
import PrivateRoute from "../components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <Navigate to="/404" replace={true} />
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "movies/:id",
        element: (
          <PrivateRoute>
            <MovieDetail />
          </PrivateRoute>
        )
      },
      {
        path: "search",
        element: (
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        )
      },
      {
        path: "reviews",
        element: (
          <PrivateRoute>
            <Reviews />
          </PrivateRoute>
        ) 
      },
      {
        path: "favorites",
        element: (
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        )
      },
      {
        path: "404",
        element: (
            <ErrorPage />
        )
      },
    ],
  },
]);
