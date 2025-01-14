import React from 'react'

const ProductCard = (props) => {
    const { id, name, price, tag, img } = props
  return (
    <div className=' text-xs bg-white border shadow-md rounded flex-column gap-2 m-2 p-2'>
        <p>Id: { id } </p>
        <p>Nombre: { name } </p>
        <p>Precio: { price } </p>
        <p>Tag: { tag } </p>
        <p>Img: { img }</p>
    </div>
  )
}

export default ProductCard