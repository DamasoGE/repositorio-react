import { NavLink } from "react-router-dom"
import { ROUTES } from "../routes/paths.js"

const Navbar = () => {



  return (
    <nav className="bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg">
      {/* Buscar icono */}
      <div className="container mx-auto p-4 flex items-center justify-between">
        <NavLink to={ROUTES.HOME} className="text-white text-xl font-bold">
          POKEDEX
        </NavLink>
        {/* isActive te permite modificar el estilo si estás donde apunta el NavLink */}
        <div className="space-x-4">
          <NavLink to={ROUTES.HOME} className={({ isActive }) => `text-white text-xl
          ${isActive ? "font-bold":""}`} >
            INICIO
          </NavLink>
          <NavLink to={ROUTES.SEARCH} className={({ isActive }) => `text-white text-xl
          ${isActive ? "font-bold":""}`} >
            SEARCH
          </NavLink>
          <NavLink to={ROUTES.FAVORITES} className={({ isActive }) => `text-white text-xl
          ${isActive ? "font-bold":""}`} >
            FAVORITES
          </NavLink>
          <NavLink to={ROUTES.ABOUT} className={({ isActive }) => `text-white text-xl
          ${isActive ? "font-bold":""}`} >
            ABOUT
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar