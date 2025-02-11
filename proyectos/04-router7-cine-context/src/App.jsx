import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => {

  return (
    // aquí podríamos poner cualquier contexto que necesitemos
    <RouterProvider router={router}/>
  ) ;
};

export default App;
