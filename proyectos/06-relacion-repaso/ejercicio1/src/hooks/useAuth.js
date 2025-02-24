import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


export const useAuth = () =>{

  const apiUrl = "http://192.168.50.134:3000";
  const context = useContext(AuthContext);

  if(!context){
    throw new Error("useAuth debe ser usado con AuthProvider")
  }

  const {
    user,
    token,
    isAuthenticated,
    authError,
    setAuthError,
    login,
    logout} = context;

  const registerUser = async (userData) =>{
    try {
      const response = await fetch(`${apiUrl}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify(userData)
        }
      );

      if(!response){
        throw new Error("Error en el registro");
      }

      const data = await response.json();
      login(data.user, data.token);
    } catch (error) {
      setAuthError(error.message);
      throw new Error("Error en el registro");
    }

  }

  const loginUser = async (userData) =>{
    try {
      const response = await fetch(`${apiUrl}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify(userData)
        }
      );

      if(!response){
        throw new Error("Error en el login");
      }

      const data = await response.json();
      login(data.user, data.token);
    } catch (error) {
      setAuthError(error.message);
      throw new Error("Error en el login");
    }
  }

}