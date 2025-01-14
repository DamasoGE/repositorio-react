import React, { useEffect, useState } from 'react'

const UsersPlaceHolder = () => {

    const [users, setUsers] = useState([])

    const fetchDataPlaceHolder = async () =>{ //La función debe hacerlo todo incluyendo settear el estado
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok){
                throw new Error("Error en la respuesta")
            }

            setUsers(await response.json());
        } catch (error) {
            console.log("Error:" + error);
        }
    }

    useEffect(() => {
      fetchDataPlaceHolder();
    }, [])
    
  return (
    <div className='bg-gary-200 shadow-lg p-6 flex-col justify-center items-center'>
        <h1>Prueba</h1>
        {users.map((user)=>{
            return (
            <div key={user.id} className='flex justify-center items-center'>
                <h2 className='text-xl font-bold mb-4'>Username: {user.username}</h2>
                <p className='text-gray-600 mb-4'>City: {user.address.city}</p>
            </div>
            );
        })}

    </div>
  )
}

export default UsersPlaceHolder