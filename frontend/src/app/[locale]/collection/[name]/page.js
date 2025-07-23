
import axios from "axios";
import ProductDetails from "../../components/ProductDetails";

import { fetchProducts } from "../../../../../lib/fetchProducts";

export async function generateMetadata({ params }) {
 
  const products = await fetchProducts()
  const {id} = await params
  

  const singleProduct = products.find(
    (prod) => prod.id === id);
  if (singleProduct) {
    return {
      title: singleProduct.name,
      description: singleProduct.description,
    }
  }
}



export default async function Product({ params }) {

  const { name } = await params
//   console.log(name)
const decodedName = decodeURIComponent(name) // الناتج: "Red T-shirt"
// console.log(decodedName)

  const products = await fetchProducts()

const normalize = (text) =>
  text
    ?.trim()  
const singleProduct = products.find(
  (prod) => normalize(prod.name) === normalize(decodedName)
);

  return (
    <div>
      <ProductDetails product={singleProduct} />
    </div>
  );
}