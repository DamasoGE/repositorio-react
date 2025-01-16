import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import LiProductList from "./LiProductList";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalCart, setTotalCart] = useState(0)
    useEffect(() => {
        fetchProducts();
    }, [])
    
    useEffect(()=>{
        //Para actualizar el carrito cada vez que se borra
    }, [cart])

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

    const addCart = (product)=>{
        setCart((prevCart)=>[...prevCart, product]);
    }



  return (
    <>
        <h1>Lista de libros</h1>
        <div className="grid grid-cols-3 ">

            { products.map((product)=>{
                return(
                    <ProductCard 
                    key={product.id}
                    product={product}
                    addCart={addCart}
                    />
                )
                
            })}

        </div>

        <h1 className="text-2xl font-bold text-center">Carrito de Compra</h1>  
        <p className="text-xl font-semibold text-center mb-6">Total carrito: </p>

            {cart.length===0 ? (
                <h2>Carrito Vacío</h2>
            ):(
                <ul>
                { cart.map((product)=>{
                       return( 
                       <LiProductList key={product.id} product={product} />
                    )
                })
    
                }
                </ul>
            )}

    </>

  )
}

export default ProductList