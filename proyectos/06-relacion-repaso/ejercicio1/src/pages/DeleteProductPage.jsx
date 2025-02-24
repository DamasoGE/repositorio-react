import { useParams } from "react-router-dom"

const DeleteProductPage = () => {

  const { id } =  useParams();

  return (
    <div>DeleteProductPage: {id}</div>
  )
}

export default DeleteProductPage