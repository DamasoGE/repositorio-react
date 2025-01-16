import React from 'react'

const ProductCard = (props) => {

    const { key, product, addCart } = props

    const handlerClick = () =>{
      addCart(product)
    }
    
  return (
    <div className=' text-xs bg-white border shadow-md rounded flex-column gap-2 m-2 p-2'>
        <h2>Nombre: { product.name } </h2>
        <p>Precio: { product.price } </p>
        <p>Tag: { product.tag } </p>
        <button onClick={handlerClick} className='bg-gray-500 hover:bg-blue-400 text-white rounded p-2 m-2'>Agregar al carrito</button>
    </div>
  )
}

export default ProductCard