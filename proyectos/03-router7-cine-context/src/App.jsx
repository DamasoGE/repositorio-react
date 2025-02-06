import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

const App = () => {
  return (
    // Aqui podríamos poner cualquier contexto que necesite
    <RouterProvider router={router}/>
  )
}

export default App