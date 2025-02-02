import { useNavigate } from "react-router-dom";
import isAuthenticated from "../helpers/isAuthenticated";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // crear una clave en el localStorage llamada token con el valor 123
    // y navegate a /dashboard
    localStorage.setItem("token", "123");
    navigate("/dashboard");
  };
  return (
    <div>
      {isAuthenticated() ? (
        <h1 className="text-3xl font-bold mb-8">Ya estás logueado</h1>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8">
            Bienvenido a Ejercicio 1 de React Router Dom v7
          </h1>
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

// {!isAuthenticated && (
//         <div>
//           <h1 className="text-3xl font-bold mb-8">
//             Bienvenido a Ejercicio 1 de React Router Dom v7
//           </h1>
//           <button
//             onClick={handleLogin}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Login
//           </button>
//         </div>
//       )}
//       :(
//       <h1 className="text-3xl font-bold mb-8">Ya estás logueado</h1>)
