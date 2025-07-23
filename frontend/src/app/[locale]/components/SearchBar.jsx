import DialogContainer from './DialogContainer'
import { fetchProducts } from '../../../../lib/fetchProducts'
const SearchBar =async () => {

  const products = await fetchProducts()




  return (
    <>
     <DialogContainer allProducts={products}/>
    </>
  
  )
}

export default SearchBar
