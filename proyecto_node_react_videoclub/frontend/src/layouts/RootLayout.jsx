import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

const RootLayout = () => {

  const {user, isAuth, logout, checkAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isAuthBefore = isAuth;
    const authenticate = async () =>{
      await checkAuth();
    }
    authenticate();
    if(isAuth==false && isAuthBefore!=isAuth){
      logout();
    }
  }, [location])

  const logoutHandler = async (e)=>{
    e.preventDefault();
    logout(navigate);
    navigate("/login");
  }

  return (
    // Contenedor principal
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      <nav className="bg-sky-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex  justify-between h-16">
            {/* Sección izquierda del vav */}
            <div className="flex items-center">
              {/* Título */}
              <NavLink to="/" className="text-lg font-bold">
                VideoClub
              </NavLink>
              <div className="flex space-x-4 ml-10">
                <NavLink to="/search" className="hover:text-amber-600">
                  Buscar
                </NavLink>
                <NavLink to="/reviews" className="hover:text-amber-600">
                  Reseñas
                </NavLink>
                <NavLink to="/favorites" className="hover:text-amber-600">
                  Favoritos
                </NavLink>
              </div>
            </div>
            <div className="flex items-center">
              {isAuth ? (
                <>
                  <div className="w-50 flex items-center justify-end px-4 capitalize font-semibold">
                    <p className="text-3xl mb-3">🪪</p>
                    <p>{user}</p>
                    </div>
                  <button onClick={logoutHandler}className="text-center w-40 cursor-pointer bg-rose-700 text-white px-2 py-1 rounded-lg font-semibold hover:bg-rose-500 transition">Cerrar Sesión</button>
                </>
                ):(
                <Link to="/login" className="text-center w-40 cursor-pointer bg-rose-700 text-white px-2 py-1 rounded-lg font-semibold hover:bg-rose-500 transition">
                  Iniciar Sesión
                </Link>
              )}
            
            </div>

          </div>

        </div>
      </nav>
      

      <main className="flex-1 flex px-4 py-6">
        {/* Outlet */}
        <Outlet />
      </main>
      {/* pie de página */}
      <footer className="bg-sky-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center">Videoclub © 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
