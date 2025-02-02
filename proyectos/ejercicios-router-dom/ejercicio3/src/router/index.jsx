import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import AdminLayout from "../layout/AdminLayout";
import ProtectedRoute from "../components/ProtectedRoute";


export const router=createBrowserRouter([
  {
    path: "/",
    element:<RootLayout />,
    errorElement:<ErrorPage />,
    children:[
      {
        index:true,
        element: <Login />
      },
      {
        path:"admin",
        element: (
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        ),
        children:[
          {

          },
          {

          }
        ]
          
      }
    ]
  },

])