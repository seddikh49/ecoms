"use client"

import React, { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic';

// import Lottie from 'lottie-react';
import axios from 'axios';
import { FaCartShopping } from "react-icons/fa6";

import money from '../../../../public/‏‏assets/animation/money'
import { useShop } from '../context/shopContext'
import Link from 'next/link';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });







const Confirm = () => {
    const [animationData, setAnimationData] = useState(null);
    const [animationData2, setAnimationData2] = useState(null);

    const { nameConfirmation,
        currency,
        setfullName,
        fullName,
        setPhone,
        phone,
        setWilaya,
        wilaya,
        setCommune,
        commune,
        quantity,
        setQuantity,
        deliveryPrice,
        setdeliveryPrice,
        totalPrice,
        productName,
        settotalPrice } = useShop()

    useEffect(() => {
        axios.get('https://assets9.lottiefiles.com/packages/lf20_puciaact.json')
            .then(response => setAnimationData(response.data))
            .catch(error => console.error('خطأ في جلب الأنيميشن', error));

        axios.get('https://assets2.lottiefiles.com/packages/lf20_obhph3sh.json')
            .then(response => setAnimationData2(response.data))
            .catch(error => console.error('خطأ في جلب الأنيميشن', error));
    }, []);




    return (
        <div className='mb-10' dir='rtl' >
            {fullName !== '' ? (
                <div>
                    <div className='flex justify-evenly xm:space-y-5 items-center md:flex-col sm:flex-col xm:flex-col xl:flex-row lg:flex-row'>

                        {/* <div className='lg:w-[450px] xl:w-[600px] md:w-full sm:w-full xm:w-full px-4 mt-10'>
                            <div className='absolute right-0 top-20'>
                                <Lottie animationData={animationData2} loop={true} className='w-100' />
                            </div>
                            <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col  xm:flex-col  gap-3'>
                                <h1 className='font-bold text-4xl whitespace-nowrap  py-2'> شكر جزيلا لك </h1>
                                <h1 className='font-bold text-4xl text-white bg-amber-500 whitespace-nowrap   py-2'>{nameConfirmation} </h1>

                            </div>
                            <h2 className='xl:text-4xl lg:text-3xl md:text-xl font-bold pb-4'>على ثقتك بنا وعلى طلبك الكريم</h2>
                            <p className='xl:text-2xl lg:text-xl md:text-xl font-bold'>يسعدنا خدمتك، وسنتصل بك خلال مدة قصيرة لتأكيد تفاصيل الطلب والتأكد من تلبية جميع احتياجاتك.
                                .نحن دائمًا هنا لخدمتك ونتطلع إلى تقديم أفضل تجربة ممكنة</p>
                        </div> */}
                        <div className='relative lg:w-[450px] xl:w-[600px] w-full px-4 mt-10'>
                            {/* لوتي أنيميشن */}
                            <div className='absolute right-0 top-20 opacity-70 z-0'>
                                <Lottie animationData={animationData2} loop={true} className='w-32' />
                            </div>

                            {/* المحتوى */}
                            <div className='relative z-10 space-y-5 bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200'>
                                {/* العنوان + الاسم */}
                                <div className='flex flex-wrap gap-3 items-center justify-center text-center'>
                                    <h1 className='font-extrabold text-3xl sm:text-4xl text-gray-800 whitespace-nowrap py-2'>
                                        شكرًا جزيلاً لك
                                    </h1>
                                    <h1 className='font-extrabold text-3xl sm:text-4xl bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text drop-shadow-md whitespace-nowrap py-2'>
                                        {nameConfirmation}
                                    </h1>
                                </div>

                                {/* العنوان الفرعي */}
                                <h2 className='text-2xl sm:text-3xl font-semibold text-gray-700 text-center'>
                                    على ثقتك بنا وعلى طلبك الكريم
                                </h2>

                                {/* الفقرة التوضيحية */}
                                <p className='text-lg sm:text-xl font-medium text-gray-600 leading-relaxed text-center'>
                                    يسعدنا خدمتك، وسنتصل بك خلال مدة قصيرة لتأكيد تفاصيل الطلب والتأكد من تلبية جميع احتياجاتك.
                                    <br />
                                    نحن دائمًا هنا لخدمتك ونتطلع إلى تقديم أفضل تجربة ممكنة.
                                </p>
                            </div>
                        </div>

                        <div>
                            <Lottie animationData={animationData} loop={true} className='xl:w-[500px] lg:w-100 xm:w-full sm:w-full md:w-[500px]' />
                        </div>
                    </div>


                    <div className="max-w-2xl mx-auto mt-12 rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white/80 backdrop-blur-md">
                        {/* العنوان العلوي */}
                        <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-t-3xl">
                            <h1 className="text-xl font-bold tracking-wide">تفاصيل الطلب</h1>
                            <FaCartShopping className="text-2xl" />
                        </div>

                        {/* المحتوى */}
                        <div className="divide-y divide-gray-200 px-6 py-6 space-y-5 text-gray-800">

                            {/* المنتج */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <span className="text-gray-600 text-sm sm:text-base">المنتج:</span>
                                <span className="font-semibold text-base sm:text-lg text-gray-900">{productName}</span>
                            </div>

                            {/* الكمية */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4">
                                <span className="text-gray-600 text-sm sm:text-base">الكمية:</span>
                                <span className="font-semibold text-base sm:text-lg text-gray-900">{quantity}</span>
                            </div>

                            {/* سعر التوصيل */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4">
                                <span className="text-gray-600 text-sm sm:text-base">سعر التوصيل:</span>
                                <span className="font-semibold text-base sm:text-lg">
                                    {deliveryPrice} <span className="text-sm">{currency}</span>
                                </span>
                            </div>

                            {/* سعر المنتج */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4">
                                <span className="text-gray-600 text-sm sm:text-base">سعر المنتج:</span>
                                <span className="font-semibold text-base sm:text-lg">
                                    {totalPrice - deliveryPrice} <span className="text-sm">{currency}</span>
                                </span>
                            </div>

                            {/* السعر الإجمالي */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-gray-300">
                                <span className="text-lg sm:text-xl font-bold text-gray-800">السعر الإجمالي:</span>
                                <div className="flex items-center gap-2 pt-2 sm:pt-0">
                                    <Lottie className="w-10 h-10" animationData={money} loop={true} />
                                    <span className="text-xl font-extrabold text-emerald-600">{totalPrice}</span>
                                    <span className="text-md font-bold text-gray-700">{currency}</span>
                                </div>
                            </div>
                        </div>
                    </div>







                </div>
            ) :

                <div className='flex justify-between items-center flex-col gap-8 py-10'>
                    <h1 className='xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl xm:text-2xl  '>أدخل معلومات الشراء</h1>
                    <Link className={'bg-black rounded-lg font-bold  flex items-center justify-center px-4 text-white hoverEffect border-1 py-1 text-lg hover:bg-white hover:text-black'} href={'/collection'} >الذهاب الى صفحة المنتجات</Link>


                </div>

            }

        </div>
    )
}

export default Confirm