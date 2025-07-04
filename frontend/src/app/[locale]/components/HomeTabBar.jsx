

import React from 'react'
import { fetchCategories } from '../../../../constants/index'
import { fetchProducts } from '../../../../lib/fetchProducts'
import CategoryList from "./CategoryList"

const HomeTabBar = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts()
   

  return (
    <div className='flex items-center gap-1.5 text-sm font-semibold'>
        <CategoryList categories={categories} products={products}/>
    </div>
  )
}

export default HomeTabBar
