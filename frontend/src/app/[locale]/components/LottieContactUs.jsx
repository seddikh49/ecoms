'use client'
import React from 'react'
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import contact from '../../../../public/‏‏assets/animation/contact.json'


const LottieContactUs = () => {

    return (
        <div>

            <Lottie
                className='xm:w-full xl:w-[600px] sm:w-[450px] lg:w-[700px] md:w-[650px]'
                animationData={contact}
                loop={true}
            />
        </div>
    )
}

export default LottieContactUs
