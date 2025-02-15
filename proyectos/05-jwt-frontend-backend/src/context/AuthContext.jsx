import { createContext, useContext, useState } from "react";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAutenticated, setIsAutenticated] = useState(false);
  // funciones en mi contexto:
  // login -> para iniciar sesión
  const login = async (username, password) => {
    try {
      const response = await fetch(`${VITE_BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include", // para que las cookies se guarden servidor
      });
      if (!response.ok) {
        return { sucess: false, message: "Usuario o contraseña incorrectos" };
      }
      setIsAutenticated(true);
      return { sucess: true, message: "Usuario logueado correctamente" };
    } catch (error) {
      console.log("Error en login", error);
    }
  };
  // logout -> para cerrar sesión

  // checkAuth -> para verificar si el usuario está autenticado simpre que monte o renderice el componente
  const checkAuth = async () =>{
    try {
      const response = await fetch(`${VITE_BACKEND_URL}/auth/check-auth`,{
        credentials: "include" // para indicar que se envien las cookies al servidor
      });
      if(response.ok){
        setIsAutenticated(true);
        return true;
      }else{
        throw new Error("No autentificado");
      }
    } catch (error) {
      setIsAutenticated(false);
      console.log("Error check-auth: ", error);
      return false;
    }
  };



  // register -> para registrar un nuevo usuario

  //exportamos el contexto como un hook


  //Provider

  return (
    <AuthContext.Provider value={{ isAutenticated, login, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () =>{
  const context = useContext(AuthContext);
  if(!context){
    throw new Error("useAuth debe estar dentro del proveedor AuthProvider")
  }
  return context;
}