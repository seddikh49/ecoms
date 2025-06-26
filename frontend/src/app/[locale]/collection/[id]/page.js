
import axios from "axios";
import ProductDetails from "../../components/ProductDetails";

import { fetchProducts } from "../../../../../lib/fetchProducts";

export async function generateMetadata({ params }) {
  const products = await fetchProducts()
  const singleProduct = products.find(
    (prod) => prod.id === params.id);
  if (singleProduct) {
    return {
      title: singleProduct.name,
      description: singleProduct.description,
    }
  }
}


export default async function Product({ params }) {

  const { id } = await params

  const products = await fetchProducts()

  const singleProduct = products.find(
    (prod) => prod.id === id
  );


  return (
    <div>
      <ProductDetails product={singleProduct} />
    </div>
  );
}