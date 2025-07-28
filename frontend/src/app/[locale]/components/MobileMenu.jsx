'use client'

import React, { useState } from 'react'
import { FaAlignLeft } from 'react-icons/fa'
import SideBar from "./SideBar"


const MobileMenu = () => {

  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  return (
   <>
    <button onClick={()=> setIsOpenSideBar(!isOpenSideBar)}  className='sm:flex cursor-pointer xm:flex xl:hidden md:flex  lg:hidden'>
      <FaAlignLeft className='text-gray-700 text-xl hoverEffect'/>
    </button>
    <div>
      <SideBar isOpen={isOpenSideBar} onClose={()=> setIsOpenSideBar(false)}/>
    </div>
   </>
  )
}

export default MobileMenu
