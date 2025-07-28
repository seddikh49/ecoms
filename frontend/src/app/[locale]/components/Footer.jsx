import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Link from 'next/link'
import SocialMedia from './SocialMedia'
import { Button } from '../../../../@/components/ui/button'
import { fetchCategories, quickLinksData } from '../../../../constants/index'
import { useTranslations } from 'next-intl'




const Footer = async() => {
  const f = useTranslations('footer')
   const categories = await fetchCategories();


  return (
    <div className='bg-white border-t'>

      <Container>
        <FooterTop />
        <div className='py-12 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 space-y-3 sm:grid-cols-1 xm:grid-cols-1'>
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
            <h3 className='font-bold text-black'>Quick Links</h3>
            <div className='flex flex-col gap-2'>
              {quickLinksData?.map((link, index) => {
                return <Link className='hover:text-black font-medium hoverEffect text-sm' href={link.href} key={index}>{link.title} </Link>
              })}
            </div>
          </div>
          <div className='space-y-2 mb-4'>
            <h3 className='font-bold text-black'>Our Categories</h3>
            <div className='flex flex-col gap-2'>
              {categories?.map((category, index) => {
                return <h3 className='hover:text-black font-medium hoverEffect text-sm'  key={index}>{category.name} </h3>
              })}
            </div>
          </div>
          <div className='flex flex-col gap-3 mb-4'>
            <h3 className='font-bold text-black'>Newsletter </h3>
            <p>
              Subscribe to our newsletter to receive updates and exclusive offers.
            </p>
            <form action="" className='flex flex-col gap-2'>
              <input type="email" placeholder='Enter your email'
                className='border px-3 py-1 rounded-lg text-lg
               focus:outline-0 focus:ring-2 focus:ring-gray-200' />
              <Button className={'text-xl tracking-wide w-full text-gray-400 hover:text-white border cursor-pointer hoverEffect'}>Subscribe</Button>
            </form>
          </div>
        </div>


        {/* <div className='flex xl:flex-row xl:items-start md:items-start lg:items-start sm:items-end xm:items-end  lg:flex-row md:flex-row sm:flex-col xm:flex-col   justify-evenly mt-10 mb-10 gap-10 '>
        
      <div className='flex flex-col gap-5 pt-2' dir='rtl'>
          <h1 className='text-2xl font-extrabold text-gray-600 font-cairo '>تواصل معنا</h1>
          <ul>
            <li className='text-lg font-abold text-gray-600 font-poppins'>0664753237</li>
            <li className='text-lg font-abold text-gray-600 font-poppins'>seddikh49@gmail.com</li>
          </ul>
        </div>
        
        <div className='flex flex-col  gap-3 pt-2' dir='rtl'>
          <h1 className='text-2xl font-extrabold text-gray-600 font-cairo' >المتجر</h1>
          <ul style={{ direction: 'rtl' }}>
            <li className='text-lg font-abold text-gray-600 font-cairo'>الرئيسية</li>
            <li className='text-lg font-abold text-gray-600 font-cairo'>من نحن</li>
            <li className='text-lg font-abold text-gray-600 font-cairo'>التوصيل</li>
            <li className='text-lg font-abold text-gray-600 font-cairo'>الخصوصية</li>
          </ul>
        </div>


        <div className='  sm:w-full xm:w-full  flex flex-col sm:flex-col gap-4 justify-start ' dir='rtl'>
          <h1 className="text-4xl   font-extrabold  text-gray-600 font-cairo  ">
            كامسد<span className="text-orange-400 aspect-square font-cairo">.</span>
          </h1>
          <p className='text-lg  font-abold text-gray-600 font-cairo'>شركة متخصصة في بيع المنتجات عالية الجودة، تهدف إلى تلبية احتياجات العملاء من خلال توفير تشكيلة واسعة من السلع بأسعار تنافسية وخدمة موثوقة.
          </p>
        </div>
      </div>
      <div className='text-center  py-6 text-xl font-light text-gray-600 font-cairo border-gray-400  border-t-1'>@kamsed.com  {date.getFullYear()} - كل الحقوق محفوظة </div> */}
      </Container>

    </div>
  )
}

export default Footer


