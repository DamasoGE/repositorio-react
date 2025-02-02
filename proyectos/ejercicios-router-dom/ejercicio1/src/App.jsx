import { RouterProvider } from "react-router-dom";
import { router } from "./router"; //coge automaticamente index.jsx

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
