'use client'
import React, { useContext, useEffect, useState } from 'react'
import { MdLanguage } from "react-icons/md";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useShop } from '../context/shopContext';



const LanguageIcon = () => {
 
  const locale = useLocale(); 
  const {language, setLanguage} = useShop()
 
  const pathname = usePathname()
  const router = useRouter();

  useEffect(() => {
    setLanguage(locale)
  }, []);


  const changeLanguage = (e) => {
    const newLocale = e.target.value;
    if (!newLocale) return
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.replace(segments.join('/'));

  }

  return (
    <div>
    
      <div className='flex items-center rounded-2xl  p-1'>
        <MdLanguage className='xl:text-2xl lg:text-xl sm:text-xl  xm:text-md' />
        <select className='cursor-pointer rounded-md' onChange={(e) => changeLanguage(e)} value={language} >
          <option className='cursor-pointer' value='ar' key='ar'>العربية</option>
          <option className='cursor-pointer' value='an' key='an'>الانجليزية</option>
        </select>
      </div>
    </div>
  )
}

export default LanguageIcon
