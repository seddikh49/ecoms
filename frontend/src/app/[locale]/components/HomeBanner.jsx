import React from 'react'
import Title from './Title'

const HomeBanner = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 tracking-widest'>
      <Title className={'xl:text-4xl uppercase font-bold text-center text-black'}>
        Best Clothing Collection
      </Title>
      <p className='text-center text-gray-700 font-medium max-w-[480px]'>
        find everything you need to look and feel best, and shop the latest  men&apos;s fashion and lifestyle products
      </p>
     
    </div>
  )
}

export default HomeBanner
