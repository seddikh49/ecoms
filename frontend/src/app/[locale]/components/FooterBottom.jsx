'use client'
import React from 'react'
import { useShop } from '../context/shopContext'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import SocialMedia from './SocialMedia'
import { navLinks } from '../../../../constants/index'
import { Button } from '../../../../@/components/ui/button'






const FooterBottom = ({categories}) => {
  const { language } = useShop()
    const f = useTranslations('footer')
    const t = useTranslations('links')



  return (
    <> 
    <div dir={language === 'ar' ? "rtl" : "ltr"} className='py-12  grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 space-y-3 sm:grid-cols-2 xm:grid-cols-1'>
      <div className='mb-4 space-y-3'>
        <Link href={"/"} className='text-2xl font-bold text-black'>
          KAMSED
        </Link>
        <p className='max-w-[250px]'>
          {
            f('siteDescription')
          }
        </p>
        <div>
          <SocialMedia />
        </div>
      </div>
      <div className='space-y-2 mb-4'>
        <h3 className='font-bold text-black'>{f('quickLinks')} </h3>
        <div className='flex flex-col gap-2'>
          {navLinks?.map((link, index) => {
            return <Link className='hover:text-black font-medium hoverEffect text-sm' href={t(`${link}.href`)} key={index}>{t(`${link}.label`)}</Link>
          })}
        </div>
      </div>
      <div className='space-y-2 mb-4'>
        <h3 className='font-bold text-black'> {f('ourCategories')}</h3>
        <div className='flex flex-col gap-2'>
          {categories?.map((category, index) => {
            return <h3 className='hover:text-black font-medium hoverEffect text-sm' key={index}>{category.name} </h3>
          })}
        </div>
      </div>
      <div className='flex flex-col gap-3 mb-4'>
        <h3 className='font-bold text-black'>{f('beTheFirst')} </h3>
        <p>
          {f('beTheFirstP')}
        </p>
        {/* <form action="" className='flex flex-col gap-2'>
          <input type="email" placeholder='Enter your email'
            className='border px-3 py-1 rounded-lg text-lg
               focus:outline-0 focus:ring-2 focus:ring-gray-200' />
          <Button className={'text-xl tracking-wide w-full text-gray-400 hover:text-white border cursor-pointer hoverEffect'}>Subscribe</Button>
        </form> */}
      </div>
    </div>
    </>
  )
}

export default FooterBottom