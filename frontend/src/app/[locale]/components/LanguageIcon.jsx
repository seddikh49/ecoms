'use client'
import React, { useContext, useEffect, useState } from 'react'
import { MdLanguage } from "react-icons/md";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useShop } from '../context/shopContext';



const LanguageIcon = () => {
 
  const locale = useLocale(); // يعيد: "ar", "en", ...
  
  const {language, setLanguage} = useShop()
 
  const pathname = usePathname()
  const router = useRouter();

  useEffect(() => {
    setLanguage(locale)
  }, []);


  const changeLanguage = (e) => {
    console.log(e.target.value)
    console.log(language)
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
        <select className=' rounded-md' onChange={(e) => changeLanguage(e)} value={language} >
          <option value='ar' key='ar'>العربية</option>
          <option value='an' key='an'>الانجليزية</option>
        </select>
      </div>
    </div>
  )
}

export default LanguageIcon
