import React from 'react'
import { FaAlignLeft } from 'react-icons/fa'

const MobileMenu = () => {
  return (
    <div className='sm:flex xm:flex xl:hidden  lg:hidden'>
      <FaAlignLeft className='text-gray-700 text-xl hoverEffect'/>
    </div>
  )
}

export default MobileMenu
