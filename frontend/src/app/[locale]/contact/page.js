

import React from 'react';


import Link from 'next/link';
import LottieContactUs from '../components/LottieContactUs'





export const metadata = {
  title: "تواصل معنا - Contact Us",
  description: "نحن هنا لخدمتك! تواصل معنا عبر النموذج أو وسائل الاتصال المتاحة للاستفسارات، الملاحظات، أو الدعم الفني. نحن نرحب بك دائمًا.",
};


const Contact = () => {
  return (
    <div className='flex flex-col  justify-center   xl:items-center lg:items-center xm:items-end mb-23'>
      {/* <div className='mt-10 text-black text-center px-10'>
       fddfgfd
      </div> */}

      <div className='flex px-5  xm:items-end  justify-between lg:flex-row xl:flex-row md:flex-col-reverse sm:flex-col-reverse xm:flex-col-reverse lg:items-center xl:items-center gap-5 text-gray-500'>
        <div dir='rtl' className='font-cairo flex flex-col gap-3 justify-center items-start xm:text-center sm:text-center'>
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
        <LottieContactUs/>

      </div>
    </div>
  );
};

export default Contact;