import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    //CADA VEZ QUE SE MODIFICA EL COMPONENTE
    // useEffect(() => {
    //     //NUNCA UTILIZAR ASYNC AWAY DENTRO
    //     console.log("Componente Montado")
    // }, )

    //SOLO SE EJECUTA UNA VEZ
    // useEffect(()=>{
    //     console.log("Componente Montado");
    // },[]) 

    //SE MODIFICA CUANDO  HAY CAMBIOS EN EL ARRAY DE DEPENDENCIAS
    useEffect(()=>{
        console.log("Componente Montado");
    },[ counter ])
    
  return (
    <>
        <div>Timer</div>
        <p>Contador1: {counter} </p>
        <p>Contador2: {counter2} </p>
        <button onClick={()=> setCounter((prevCounter)=>prevCounter+1)} className='bg-blue-500 rounded text-white m-1 p-1'>Iniciar contador</button>
        <button onClick={()=> setCounter2((prevCounter)=>prevCounter+1)} className='bg-blue-500 rounded text-white m-1 p-1'>Iniciar contador 2</button>
        <br></br>
        <button className='bg-blue-500 rounded text-white m-1 p-1'> No modifica </button>
    </>

  )
}

export default Timer