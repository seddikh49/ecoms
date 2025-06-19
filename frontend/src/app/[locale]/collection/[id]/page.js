
import axios from "axios";
import ProductDetails from "../../components/ProductDetails";

import { fetchProducts } from "../../../../../lib/fetchProducts";


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