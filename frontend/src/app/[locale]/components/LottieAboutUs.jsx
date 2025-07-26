"use client"
import dynamic from 'next/dynamic';
import React from 'react'
import about from '../../../../public/‏‏assets/animation/about'



const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const LottieAboutUs = () => {
  return (
    <div>
       <Lottie className='sm:w-[450px] xl:w-[600px] lg:w-[700px] md:w-[700px]'
            animationData={about}
            loop={true}
          />
    </div>
  )
}

export default LottieAboutUs
