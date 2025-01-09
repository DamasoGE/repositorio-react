import { useState } from "react"

const ContadorDoble = () => {
    const [friends, setFriends] = useState(
        {juan:0, pedro:0, maria:0}
    )

    const [PAmigos, setPAmigos] = useState(0)

    function handlerClick(nombre,num=1) {
        promedioAmigos(); //EJERCICIO PROXIMO DÍA
        setFriends((prevFriends)=>  { //importante usar el prev para que coja la variable actualizada al momento del código
                return {
                    ...prevFriends,
                    [nombre]: (prevFriends[nombre]==0 && num<0)  ?  0 : prevFriends[nombre]+num
                }
        }
        );

    }

    const promedioAmigos = () =>{
        const numAmigosArray = Object.values(friends);
        const totalAmigos = numAmigosArray.reduce((acc,num)=>acc+num,0);
        return setPAmigos( numAmigosArray.length>0 ? totalAmigos/numAmigosArray.length : 0);
    }


  return (
    <>
        <div className="text-2xl bg-cyan-600 text-center">ContadorDoble</div>

        <span className="text-center">Juan tiene <strong>{friends.juan}</strong> amigos</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-2 rounded" onClick={()=>handlerClick('juan',1)}>Incrementar</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold m-2 py-2 px-2 rounded" onClick={()=>handlerClick('juan',-1)}>Decrementar</button>
        <br />

        <span className="text-center">Pedro tiene <strong>{friends.pedro}</strong> amigos</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-2 rounded" onClick={()=>handlerClick('pedro',1)}>Incrementar</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold m-2 py-2 px-2 rounded" onClick={()=>handlerClick('pedro',-1)}>Decrementar</button>
        <br />

        <span className="text-center">Maria tiene <strong>{friends.maria}</strong> amigos</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-2 rounded" onClick={()=>handlerClick('maria',1)}>Incrementar</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold m-2 py-2 px-2 rounded" onClick={()=>handlerClick('maria',-1)}>Decrementar</button>
        <br />

        <h2>Promedio de Amigos: {PAmigos} </h2>

    </>
    
    
  )
}

export default ContadorDoble