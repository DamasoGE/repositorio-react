import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const stateInitial = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {

  const [formData, setFormData] = useState(stateInitial);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { register } = useAuth();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(formData.password == ""){
      setError("No ha introducido la contraseña")
    }
    
    if(formData.name == ""){
      setError("No ha introducido el nombre")
    }

    if(formData.email == ""){
      setError("No ha introducido el email")
    }

    console.log("hola 0");


    if(formData.password != "" && formData.name != "" && formData.email != ""){
      console.log("hola");
      try {
        const responseRegister = await register(formData);
        if(responseRegister=="Error"){
          setError("Email ya en uso")
          throw new Error ("Error en inicio de sesion")
        }else{
          navigate("/login");
        }
      } catch (error) {
        console.log("Error en el registro", error);
      }
    }

  }


    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Registro
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
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
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
                Dar de alta
              </button>
            </div>
          </form>
          <div><p>¿Ya estás registrado?</p><Link to="/login" className="text-purple-600">Iniciar Sesión</Link></div>
        </div>
      </div>
    );
  };
  
  export default Register;
  