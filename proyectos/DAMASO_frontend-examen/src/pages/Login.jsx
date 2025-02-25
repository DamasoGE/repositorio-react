import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const stateInitial = {
  email: "",
  password: "",
};

const Login = () => {

  const [formData, setFormData] = useState(stateInitial);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
      const loginresponse = await login(formData);
      console.log(loginresponse);
      if(loginresponse=="Error"){
        setError("Error en las credenciales")
        throw new Error ("Error en inicio de sesion")
      }else{
        navigate("/");
      }
    } catch (error) {
      console.log("Error en el registro", error);
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Iniciar sesión
          </h2>
        </div>
        <form 
            onSubmit={handleSubmit}
            className="mt-8 space-y-6">
              { error ? (
                  <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              ):(
                ""
              )}

  
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input 
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
              </div>
              <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contraseña
                </label>
                <input 
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}                  
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Iniciar Sesion
              </button>
            </div>
          </form>
        <div><p>¿Aún no te has registrado?</p><Link to="/register" className="text-purple-600">Registro</Link></div>
      </div>
    </div>
  );
};

export default Login;
