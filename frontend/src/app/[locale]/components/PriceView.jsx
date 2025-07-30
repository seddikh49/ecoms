"use client"
import { useLocale } from 'next-intl'
import React, { useEffect, useState } from 'react'

const PriceView = ({ price }) => {
  const [format, setFormat] = useState();
  const locale = useLocale()
  useEffect(() => {
    if (locale === "ar") {
      const formatted = price.toLocaleString('ar-DZ', {
        style: 'currency',
        currency: 'DZD'
      })
      setFormat(formatted)

    } else {
      const formatted = price.toLocaleString('en-DZ', {
        style: 'currency',
        currency: 'DZD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })

      const numericPart = formatted.replace(/[^\d.,]/g, '') 
      const finalFormatted = `${numericPart} DZD`
      setFormat(finalFormatted)

    }
  }, []);


  return (
    <div className='flex  gap-1 '>
      <h1 className=' text-md font-semibold text-black'>{format}</h1>
    </div>
  )
}

export default PriceView
