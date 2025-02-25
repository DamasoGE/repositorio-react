import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import EventNewPage from "../pages/EventNewPage";
import EventEditPage from "../pages/EventEditPage";
import Register from "../pages/Register";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
        path: "event",
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "new",
            element: (
              <ProtectedRoute>
                <EventNewPage />
              </ProtectedRoute>
            ),
          },
          {
            path: "edit/:id",
            element: (
              <ProtectedRoute>
                <EventEditPage />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);
