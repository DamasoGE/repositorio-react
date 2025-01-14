import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchProducts = async () =>{
        try {
            const response = await fetch('http://localhost:5173/src/data/db.json')
            if(!response.ok){
                throw new Error("Error en la respuesta API");
            }
            setProducts(await response.json());
        } catch (error) {
            console.log("Error en la peticion" + error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    

  return (

    <div className="bg-slate-200 flex flex-wrap justify-center ">

            { products.map((product)=>{
                return(
                    <ProductCard 
                    key={product.id}
                    id={product.id}
                    name={product.name} 
                    price={product.price}
                    tag={product.tag}
                    img={product.img}
                    />
                )
                
            })}
    </div>
  )
}

export default ProductList