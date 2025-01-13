import { useState } from "react";

const ContinuacionNumeros = () => {
  const [numbers, setNumbers] = useState([5, 2, 3, 1, 4]);
  // función que añada el número siguiente al último número del array (hay que ordenar los números)
  const addNextNumber = () => {
    const maxNumber = Math.max(...numbers);
    setNumbers((prevNumbers) => [...prevNumbers, maxNumber + 1]);
  };

  return (
    <>
      <div>
        <button
          className="bg-slate-400 rounded mb-2 mt-2"
          onClick={addNextNumber}
        >
          {" "}
          Añade el siguiente número
        </button>
        <ul className="flex gap-2 my-2">
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContinuacionNumeros;
