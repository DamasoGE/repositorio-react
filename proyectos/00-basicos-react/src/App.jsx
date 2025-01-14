import { useState } from "react"
import Hijo2 from "./components/UseState/props2/Hijo2"
import Nieto2 from "./components/UseState/props2/Nieto2"
import Padre2 from "./components/UseState/props2/Padre2"
import Contador from "./components/UseState/Contador"
import ContadorDoble from "./components/UseState/ContadorDoble"
import ContinuacionNumeros from "./components/UseState/ContinuacionNumeros"
import GuitarHeroe from "./components/UseState/GuitarHeroe"
import Padre from "./components/UseState/props/padre"
import RegistrarFormulario from "./components/UseState/RegistrarFormulario"
import Timer from "./components/useEffect/useEffectCicloVida/Timer"
import UsersPlaceHolder from "./components/useEffect/useEffectCicloVida/UsersPlaceHolder"
import ProductList from "./components/useEffect/ProductList"

const App = () => {

  const [contador, setContador] = useState(0);
  const handleClick = () =>{
    setContador((prevContador)=>prevContador+1)
  }

  return (
    <div className="mx-auto bg-gray-200">
      <div className="text-3xl font-bold underline">Hola mundo!!!</div>
      <hr className="mt-10" />
      <ProductList />
      {/* <Timer /> */}
      {/* <p> Contador: {contador}</p>
      <Padre2>
        <Hijo2>
          <Nieto2 handleClick={handleClick}>

          </Nieto2 >
        </Hijo2>
      </Padre2>
      {/* <Padre />
      <hr className="mt-10" />
      <Contador />
      
      <hr className="mt-10" />
      <ContadorDoble />
      <hr className="mt-10" />
      <ContinuacionNumeros />
      <hr className="mt-10" />
      <RegistrarFormulario />
      <hr className="mt-10" />
      <GuitarHeroe /> */}
    </div>

  )
}

export default App