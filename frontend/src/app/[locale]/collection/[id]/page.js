
import axios from "axios";
<<<<<<< HEAD
import ProductDetails from "../../components/ProductDetails";
=======
import ProductDetails from "@/src/app/components/ProductDetails";
>>>>>>> 2f49f236105de22d670dc21916f036747d7ddaf2
import { fetchProducts } from "@/lib/fetchProducts";


export default async function Product( {params} ) {
  
  const { id } = await  params
  
  const products = await fetchProducts()

  const singleProduct = products.find(
    (prod) => prod.id === Number(id)
  );
  

  return (
    <div>
      <ProductDetails product={singleProduct}/>
    </div>
  );
}