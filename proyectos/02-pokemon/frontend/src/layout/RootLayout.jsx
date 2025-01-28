import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const RootLayout = () => {
  return (
    //contenedor principal
    <div className="min-h-screen bg-gray-100">
        <Navbar />
    {/* Aqui se renderiza el contenido de las rutas */}
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout