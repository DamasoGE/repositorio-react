import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Toaster } from "sonner"

const App = () => {
  return (
    <>
        <Toaster position="top-right" duration={2000} />
        <RouterProvider router={router} />
    </>

  )
}



export default App;
