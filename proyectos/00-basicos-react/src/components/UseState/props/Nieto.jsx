const Nieto = (props) => {

    const { handleClick } = props;


  return (
    <>
        <div>Hola yo soy tu nieto</div>
        <button onClick={handleClick} className="bg-orange-600 text-white rounded px-2 py-5 mb-5 mt-6">Aumento del contador desde el nieto</button>
     
    </>
  
  )
}

export default Nieto