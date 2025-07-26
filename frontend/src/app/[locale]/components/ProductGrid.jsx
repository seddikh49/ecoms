import React from 'react'
import HomeTabBar from './HomeTabBar'
import Products from './Products'

const ProductGrid = ({slicer}) => {
  return (
    <div className='mt-10 flex flex-col items-center'>
      <Products slicer={slicer} />
    </div>
  )
}

export default ProductGrid
