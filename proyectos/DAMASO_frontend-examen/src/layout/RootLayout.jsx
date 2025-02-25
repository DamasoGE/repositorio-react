import { FaCalendarAlt } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RootLayout = () => {

  const { logout } = useAuth()
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    console.log("hola");
    e.preventDefault();
    logout();
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="flex justify-between items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <NavLink className="flex p-2 space-x-2" to="/">
                <FaCalendarAlt className="text-3xl text-white opacity-90" />
                <h1 className="text-2xl font-bold tracking-tight">
                  Examen DWEC 2 Dual
                </h1>
              </NavLink>

            </div>
            <nav className="flex items-center space-x-4"></nav>
          </div>
        </div>


        { localStorage.getItem("token")==null ? (
          <NavLink to="/login" className="text-white px-4 py-2 mx-5 rounded-lg bg-rose-600 hover:bg-white hover:text-rose-600">
          Login
          </NavLink>
        ):(
          <div className="flex justify-center items-center">
            <NavLink to="/event/new" className="text-white px-4 py-2 mx-5 rounded-lg bg-purple-400 hover:bg-purple-300">
            NuevoEvento
            </NavLink>
            <p>🪪{JSON.parse(localStorage.getItem("user")).name}</p>
            <button onClick={handleSubmit} className="text-white px-4 py-2 mx-5 rounded-lg bg-rose-600 hover:bg-white hover:text-rose-600">
              Logout
            </button>
          </div>

        )}

      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-gray-300 py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} - Francisco Dámaso Giménez Escudero
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
