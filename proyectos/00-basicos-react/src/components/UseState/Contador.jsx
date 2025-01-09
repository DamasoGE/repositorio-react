//rafce para crear rápido un componente con default

import { useState } from "react";

const Contador = () => {
    //Espacio para los hooks

    //Espacio para declarar variables y funciones
    let [contador,setContador]=useState(0)

    function handlerClick(numero=1) {
        setContador(contador+numero);
    }

  return (
    <>
        <h1>Contador en React</h1>
        <h2>valor del contador: {contador}</h2>
        <button onClick={()=>handlerClick(1)}>Incrementar</button>
        <button onClick={()=>handlerClick(-1)}>Decrementar</button>
    </>
  )
}

export default Contador