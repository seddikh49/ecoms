
import axios from "axios";
import ProductDetails from "../../components/ProductDetails";
import { fetchProducts } from "../../../../../lib/fetchProducts";

export async function generateMetadata({ params }) {

  const products = await fetchProducts()
  const { name } = await params
 const decodedName = decodeURIComponent(name)
  
  const singleProduct = products.find(
    (prod) => prod.name === decodedName);
  if (singleProduct) {
    return {
      title: singleProduct.name,
      description: singleProduct.description,
    }
  }
}



export default async function Product({ params }) {

  const { name } = await params

  const decodedName = decodeURIComponent(name) // الناتج: "Red T-shirt"

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