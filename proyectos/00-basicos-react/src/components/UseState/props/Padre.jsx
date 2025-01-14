import { useState } from "react"
import Hijo from "./hijo";

const Padre = () => {

    const [counter, setCounter] = useState(0);

    const handleClick = () =>{
        setCounter((prevCounter) => prevCounter+1);
    }

  return (
    <>
        <div>Hola soy tu padre</div>
        <p>El contador vale {counter}</p>
        <Hijo handleClick={handleClick}/>
    </>

  )
}

export default Padre