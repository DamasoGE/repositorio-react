import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { AuthProvider } from "./context/AuthContext";

const App = () => {

  return (
    // aquí podríamos poner cualquier contexto que necesitemos
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>

  ) ;
};

export default App;
