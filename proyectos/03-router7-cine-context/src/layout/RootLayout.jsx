import { NavLink, Outlet } from "react-router-dom"
import ROUTES from "../routes/paths"

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-sky-950 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
              {/* Seccion izqueirda del nav */}
              <div className="flex items-center">
                {/* Titulo logo */}
                <NavLink to={ROUTES.HOME} className="text-lg font-bold">LOGO</NavLink>

                <div className="flex space-x-4 ml-10">
                  <NavLink to={ROUTES.MOVIELIST}  className="hover:text-amber-600">PELÍCULAS</NavLink>
                </div>
                <div className="flex space-x-4 ml-10">
                  <NavLink to={ROUTES.SEARCH} className="hover:text-amber-600">SEARCH</NavLink>
                </div>
                <div className="flex space-x-4 ml-10">
                  <NavLink to={ROUTES.REVIEWS}  className="hover:text-amber-600">REVIEWS</NavLink>
                </div>
                <div className="flex space-x-4 ml-10">
                  <NavLink to={ROUTES.FAVORITES}  className="hover:text-amber-600">FAVORITES</NavLink>
                </div>
              </div>
          </div>
        </div>
      </nav>

      {/* Contenedor principal */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="bg-sky-950 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center">VIDEOCLUB © 2025</p>
        </div>
      </footer>
    </div>
  )
}

export default RootLayout