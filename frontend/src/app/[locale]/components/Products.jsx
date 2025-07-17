
import { fetchProducts } from '../../../../lib/fetchProducts'
import AllProducts from './AllProducts'
import { fetchCategories } from '../../../../constants/index'



const Products = async () => {
  const products = await fetchProducts()
  const categories = await fetchCategories();


  return (
    <div className='w-full'>
      <AllProducts products={products}  categories={categories} />
    </div>
  )
}

export default Products
