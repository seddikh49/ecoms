"use client"
import React from 'react'
import { Map, MapPin, Phone, MdEmail, Mail } from 'lucide-react'
import { MdMarkEmailRead, MdOutlineEmail } from 'react-icons/md'
import { useTranslations } from 'next-intl';
import { useShop } from '../context/shopContext';


const FooterTop = () => {
  const {language } = useShop()
  const ft = useTranslations('footerTop')
  const data = [
    {
      title:ft("visitUs"),
      subtitle: ft("place"),
      icon: <Map />

    },

    {
       title:ft("callUs"),
      subtitle: "+213 664753237",
      icon: <Phone />
    },
    {
      title:ft("workingHours"),
      subtitle:ft("daily"),
      icon: <MapPin />

    },
    {
      title:ft("emailUs"),
      subtitle: "seddikh49@gmail.com",
      icon: <Mail />

    }

  ]

  return (
    <div  dir={language === 'ar' ? "rtl" : "ltr"} className='grid  xl:grid-cols-4 mt-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3 xm:grid-cols-2 border border-b border-x-0 border-t-0 '>
      {data.map((item, index) => {
        return (
          <div className='flex sm:justify-start xl:justify-center lg:justify-center items-center gap-3 group hover:bg-gray-50 p-4  transition-colors hoverEffect' key={index}>
            <p>{item.icon} </p>
            <div>
              <h1 className='text-black font-semibold xl:text-lg lg:text-[16px] md:text-lg sm:text-[15px] xm:text-[8px] whitespace-nowrap'>{item.title}</h1>
              <h2 className='group-hover:text-black xl:text-lg lg:text-[17px]  md:text-lg sm:text-[15px] xm:text-[8px]' >{item.subtitle} </h2>
            </div>
          </div>)
      })}
    </div>
  )
}

export default FooterTop
