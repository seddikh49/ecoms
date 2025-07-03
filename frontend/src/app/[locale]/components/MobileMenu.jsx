'use client'

import React, { useState } from 'react'
import { FaAlignLeft } from 'react-icons/fa'
import SideBar from "./SideBar"


const MobileMenu = () => {

  const [isOpenSideBar, setisOpenSideBar] = useState(false);
  return (
   <>
    <button onClick={()=> setisOpenSideBar(!isOpenSideBar)}  className='sm:flex xm:flex xl:hidden md:flex  lg:hidden'>
      <FaAlignLeft className='text-gray-700 text-xl hoverEffect'/>
    </button>
    <div>
      <SideBar isOpen={isOpenSideBar} onClose={()=> setisOpenSideBar(false)}/>
    </div>
   </>
  )
}

export default MobileMenu
