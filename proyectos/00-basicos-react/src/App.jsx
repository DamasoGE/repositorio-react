import Contador from "./components/UseState/Contador"
import ContadorDoble from "./components/UseState/ContadorDoble"
import ContinuacionNumeros from "./components/UseState/ContinuacionNumeros"

const App = () => {
  return (
    <>
        <div className="text-3xl font-bold underline">Hola mundo!!!</div>
        <Contador />
        <ContadorDoble />
        <ContinuacionNumeros />
    </>

  )
}

export default App