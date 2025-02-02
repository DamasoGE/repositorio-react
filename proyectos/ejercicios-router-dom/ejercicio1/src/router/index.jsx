// protección de rutas a través de un componente usando la función
// isAuthenticated()

import { createBrowserRouter, Navigate } from "react-router-dom";
import isAuthenticated from "../helpers/isAuthenticated";
import RootLayout from "../layout/RootLayout";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const ProtectedRoute = ({ children }) => {
  // condiciones de autenticación
  if (!isAuthenticated()) {
    // si no está autenticado, redirige a la página de inicio
    return <Navigate to="/" replace={true} />;
  }
  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true, //<-- esto significa que es la ruta por defecto.
        element: <Home />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
