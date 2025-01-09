import { useState } from "react";


const ContinuacionNumeros = () => {
    const [numbers, setNumbers] = useState([5,2,3,1,4])

    const addNextNumber = () =>{
        const maxNumber = Math.max(...numbers);

        setNumbers((prevNumbers)=>[...prevNumbers,maxNumber+1]) //NUNCA REALIZAR PUSH
    }

    //función que añada el numero siguiente al ultimo numero del array (hay que ordenar los numeros)


  return (
    <>
        <div>ContinuacionNumeros</div>
        <button className="bg-slate-400 rounded mb-2 mx-2"
        onClick={addNextNumber}>Añade el siguiente numero</button>
        <ul className="flex gap-2 my-2">
            {numbers.map((number, index)=>{
                <li key={index}></li>
            })}
        </ul>
    </>

  )
}

export default ContinuacionNumeros