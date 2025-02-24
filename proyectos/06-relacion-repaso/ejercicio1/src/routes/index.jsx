import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductsPage from "../pages/ProductsPage";
import NewProductsPage from "../pages/NewProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import EditProductsPage from "../pages/EditProductsPage";
import DeleteProductPage from "../pages/DeleteProductPage";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children:[
            {
                index: true,
                element: <Navigate to="login" replace/> //replace para reiniciar el historial
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage  />
            },
            {
                path: "products",
                children: [
                    {
                        index: true,
                        element: <ProductsPage />
                    },
                    {
                        path: "new",
                        element: (
                            <ProtectedRoute>
                                <NewProductsPage />
                            </ProtectedRoute>
                        ),
                    },
                    {
                        path: ":id",
                        element: <ProductDetailPage />
                    },
                    {
                        path: ":id/edit",
                        element: (
                            <ProtectedRoute>
                                <EditProductsPage />
                            </ProtectedRoute>
                        ),
                    },
                    {
                        path: ":id/delete",
                        element: (
                            <ProtectedRoute>
                                <DeleteProductPage />
                            </ProtectedRoute>
                        ),
                    },

                ]
            },
            {

            }
        ]
    },
    {

    }
]);

