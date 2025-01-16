import React from 'react'

const LiProductList = (props) => {
    const { product, key } = props;

  return (
    <li
        className='bg-gray-100 shadow-lg dounded-lg p-6 flex flex-col justify-between mb-10'
        key={product.id}>

        <span>{product.name}</span>
        <span>{product.price}</span>
        <button className='bg-red-500 text-white rounded p-2 m-2'>Borrar el producto</button>

    </li>
  )
}

export default LiProductList