

import React from 'react'
import { fetchCategories } from '../../../../constants/index'

const HomeTabBar = async () => {
  const categories = await fetchCategories();

   
  return (
    <div className='flex items-center gap-1.5 text-sm font-semibold'>
     
    </div>
  )
}

export default HomeTabBar
