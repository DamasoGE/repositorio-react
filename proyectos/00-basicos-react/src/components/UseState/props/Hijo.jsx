import Nieto from "./nieto"

const Hijo = (props) => {

    const { handleClick } = props;



  return (
    <>
        <div>Hola yo soy tu Hijo</div>

        <button onClick={handleClick} className="bg-blue-600 text-white rounded px-2 py-5 mb-5 mt-6">Aumento del contador desde el hijo</button>
        <Nieto  handleClick={handleClick} />
    </>

  )
}

export default Hijo