

"use client";

import React from 'react';
import dynamic from 'next/dynamic';

import TextContent from '../components/TextContent';
import Link from 'next/link';


const Lottie = dynamic(() => import('lottie-react'), { ssr: false });



import contact from '../../../../public/‏‏assets/animation/contact.json'




const Contact = () => {
  return (
    <div className='flex flex-col  justify-center md:items-center sm:items-center xl:items-center lg:items-center xm:items-end mb-23'>
      <div className='mt-10 text-black text-center px-10'>
        <TextContent text1={'معنا'} text2={'تواصل'} />
      </div>

      <div className='flex  xm:items-end xm:px-10 justify-between lg:flex-row xl:flex-row md:flex-col-reverse sm:flex-col-reverse xm:flex-col-reverse lg:items-center xl:items-center gap-5 text-gray-500'>
        <div dir='rtl' className='font-cairo flex flex-col gap-3 justify-center items-start'>
          <h1 className='text-2xl font-bold text-gray-800'>متجرنا</h1>
          <p>القديد</p>
          <p>الجلفة - الجزائر</p>
          <p>رقم الهاتف: 0664753237</p>
          <p>الإيميل: seddikh49@gmail.com</p>
          <p>اكتشف المزيد عنا:</p>
          <Link href={'/about'} className='border font-bold hover:bg-black/50 hover:text-amber-50 transition-all py-3 px-8 duration-500'>
            من نحن
          </Link>
        </div>

        <Lottie
          className='xm:w-full xl:w-[600px] sm:w-[450px] lg:w-[700px] md:w-[650px]'
          animationData={contact}
          loop={true}
        />
      </div>
    </div>
  );
};

export default Contact;