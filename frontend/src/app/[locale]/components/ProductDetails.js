"use client"
import React, { useEffect, useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import { communes } from '../../../../public/‏‏assets/frontend_assets/communes'
import { wilayas } from '../../../../public/‏‏assets/frontend_assets/wilayas'

import { ClipLoader } from "react-spinners";
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from "framer-motion";




import { useShop } from '../context/shopContext'
import Link from 'next/link';
import axios from 'axios';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../../../../@/components/ui/button';
import Image from 'next/image';



const ProductDetails = ({ product }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [loadTimer, setLoadTimer] = useState(false);
    const [status, setstatus] = useState('جديد');
    const [notification, setnotification] = useState(1);
    const { imageIndex, setimageIndex, fullName,
        wilaya,
        commune,
        phone,
        quantity,
        productName,
        setProductName,
        communess,
        setCommuness,
        setfullName,
        setWilaya,
        setCommune,
        setPhone,
        setQuantity,
        currency,
        deliveryPrice,
        setdeliveryPrice,
        totalPrice,
        settotalPrice,
        setnameConfirmation,
        apiUrl

    } = useShop()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setProductName(product.name)
        setnameConfirmation(fullName)

        try {
            const response = await axios.post(`${apiUrl}/api/order/add`, {
                fullName,
                phone,
                wilaya,
                commune,
                quantity,
                productName: product.name,
                status,
                notification,
                date: new Date()
            });


            if (response.data.success) {
                toast.success(response.data.msg)
                setLoading(false)
                router.push('/confirm')
            }
            if (!response.data.success) {
                if (response.data.msg.message) {
                    setLoading(false)
                    return toast.error(response.data.msg.message)
                } else {
                    setLoading(false)
                    return toast.error(response.data.msg.errors[0].message)
                }

            }


        } catch (error) {
            console.log(error)
        }
    }


    const incrementQuantity = () => {
        setQuantity(prev => prev + 1)

    }


    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)

        }
    }
    const filterCommunes = async () => {
        let coms = await communes.filter((com) => com.wilaya_name === wilaya)
        setCommuness(coms)
        const filterPrice = await wilayas.filter((wil) => {
            return wil.wil === wilaya
        })
        if (filterPrice.length) {
            setdeliveryPrice(filterPrice[0].deliveryPrice)
        }
    }

    const getTotlaPrice = async () => {
        if (product) {
            const add = await (product.price * quantity) + deliveryPrice
            settotalPrice(add)

        }
    }


    useEffect(() => {
        setLoadTimer(true)
        const loadingTime = setTimeout(() => {
            setLoadTimer(false)
        }, 1000)
        return () => {
            clearTimeout(loadingTime)
        }
    }, []);



    useEffect(() => {
        filterCommunes()
        getTotlaPrice()
    }, [wilaya, quantity, deliveryPrice, totalPrice]);








    return (
       <>
       {loadTimer ? <div className='w-full h-[93vh] bg-violet-300 flex justify-center items-center'><h1>Loading.....</h1></div> :
        <div>
         
            <div className='w-full max-h-max gap-10 sm:px-10 mb-5   flex xl:flex-row lg:flex-row md:flex-col sm:flex-col  xm:flex-col mt-10 '>
                    
                <div className='xl:w-1/2 lg:w-1/2 md:w-full  h-max flex flex-col md:items-center lg:items-end xl:items-end sm:items-end xm:items-end  sm:justify-start   '>
                   <div className='flex p-8 flex-col items-end gap-2 pb-3 sm:ml-auto ' >
                        <p className='text-xl font-bold'>{product.name}</p>
                        <div className='flex text-2xl gap-1 font-bold'>
                            <h1>{currency} </h1>
                            <h4 className='text-xl'>{product.price}  </h4>
                        </div>
                    </div>

                    <motion.form
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="flex  flex-col gap-6 xl:w-4/5 md:w-full sm:w-full xm:w-full  p-8 rounded-2xl shadow-xl border border-gray-200">
                        {/* الاسم ورقم الهاتف */}

                        <div dir="rtl" className="flex flex-col md:flex-row gap-5">
                            <div className="relative w-full">
                                <input
                                    onChange={(e) => setfullName(e.target.value)}
                                    value={fullName}
                                    placeholder="الاسم الكامل"
                                    type="text"
                                    className="w-full py-3 pl-10 pr-4 text-sm font-medium bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <MdAccountCircle className="absolute top-1/2 -translate-y-1/2 left-3 text-xl text-gray-500" />
                            </div>
                            <div className="relative w-full">
                                <input
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                    type="text"
                                    placeholder="رقم الهاتف"
                                    className="w-full py-3 pl-10 pr-4 text-sm font-medium bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <FaPhone className="absolute top-1/2 -translate-y-1/2 left-3 text-xl text-gray-500" />
                            </div>
                        </div>

                        {/* البلدية والولاية */}
                        <div className="flex flex-col md:flex-row sm:flex-col-reverse xm:flex-col-reverse gap-5">
                            <select
                                onChange={(e) => setCommune(e.target.value)}
                                value={commune}
                                className="w-full py-3 px-4 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                            >
                                <option value="">البلدية</option>
                                {communess.map((wil, index) => (
                                    <option key={index} value={wil.num}>
                                        {wil.commune_name}
                                    </option>
                                ))}
                            </select>

                            <select
                                onChange={(e) => setWilaya(e.target.value)}
                                value={wilaya}
                                className="w-full py-3 px-4 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                            >
                                <option value="">الولاية</option>
                                {wilayas.map((wil, index) => (
                                    <option key={index} value={wil.wil}>
                                        {wil.wil} - {wil.num}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* كمية المنتج */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                            <div className="flex items-center justify-between max-w-30 w-28 rounded-md  overflow-hidden border">
                                <Button variant={"outline"} type="button" onClick={incrementQuantity} className="flex justify-between items-center hoverEffect text-black font-bold hover:text-white  bg-white hover:bg-black ">
                                    <Plus className='w-7 h-7' />
                                </Button>
                                <div className=" flex items-center justify-center font-bold text-lg">{quantity}</div>
                                <Button variant={"outline"} type="button" onClick={decrementQuantity} className="flex justify-between items-center hoverEffect text-black font-bold hover:text-white bg-white hover:bg-black">
                                    <Minus className='w-7 h-7' />
                                </Button>

                            </div>
                            <h1 className="text-lg font-bold text-gray-700 text-right">:    كمية المنتج</h1>
                        </div>

                        {/* تفاصيل الطلب */}
                        <div className="rounded-xl border border-gray-300 bg-gray-50 overflow-hidden">
                            <div className="flex items-center justify-between bg-black p-4">
                                <FaCartShopping className="text-white text-2xl" />
                                <h1 className="text-white font-bold text-lg">: تفاصيل الطلب</h1>
                            </div>
                            <div className="p-4 space-y-4 text-sm text-gray-700">
                                <div className=" flex justify-between">
                                    <p>{product.name}</p>
                                    <h2 className="font-bold">: المنتج</h2>

                                </div>
                                <div className="flex justify-between">
                                    <div className="flex gap-1 font-bold">
                                        <span>{quantity}</span>

                                    </div>
                                    <span className="font-bold">: الكمية</span>
                                </div>
                                <div className="flex justify-between font-bold">
                                    <div className='flex gap-2'>
                                        <h1> {currency}  </h1> <h1>{deliveryPrice}</h1>
                                    </div>
                                    <span>: سعر التوصيل</span>
                                </div>
                                <div className="flex justify-between font-bold">
                                    <div className='flex gap-2'>
                                        <h1>{currency}</h1> <h1> {product.price * quantity}  </h1>
                                    </div>
                                    <span>: سعر المنتج</span>
                                </div>
                                <div className="flex justify-between border-t pt-3 font-bold text-lg">
                                    <div className='flex gap-2'>
                                        <h1>{currency} </h1>  <h1>{totalPrice}</h1>
                                    </div>
                                    <span>: السعر الاجمالي</span>
                                </div>
                            </div>
                        </div>

                        {/* زر الطلب عبر واتساب */}
                        <Link
                            href="whatsapp"
                            className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 transition text-white font-bold text-center flex items-center justify-center gap-3"
                        >
                            <FaWhatsapp className="text-2xl" />
                            اضغط هنا للطلب عبر الواتساب
                        </Link>

                        {/* زر تأكيد الطلب */}
                        <Button
                            type="submit"
                            className="w-full tracking-wider py-6 font-black bg-blue-900 cursor-pointer"
                        >
                            {loading ? <ClipLoader color="#fff" size={24} /> : "اضغط هنا لتأكيد الطلب"}
                        </Button>
                    </motion.form>
                </div>









                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='xl:w-1/2 lg:w-1/2 md:w-[100%] overflow-hidden flex flex-col gap-2 justify-center md:items-center sm:items-center xm:items-center xl:items-start '>
                    {/* <AnimatePresence mode='wait'> */}
                    <motion.div
                        key={product?.image[imageIndex]} // مهم جداً لتغيير الصورة
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className='overflow-hidden xl:w-[500px] lg:w-[400px] md:w-[100%]  xm:w-[90%] border-gray-300 border rounded-md group flex flex-col gap-2 justify-center md:items-center sm:items-center xm:items-center xl:items-start '>
                        <Image
                            width={500} height={500} src={product.image[imageIndex]} alt=""
                            className=' group-hover:scale-110  xl:w-[500px] hoverEffect lg:w-[400px] md:w-[100%] xm:w-[100%] sm:w-[100%]' />
                    </motion.div>
                    {/* </AnimatePresence> */}
                    <div className='grid grid-cols-4 xl:w-[500px] lg:w-[400px] md:w-full gap-2 sm:w-[90%] xm:w-[90%] '>
                        {product.image.map((img, index) => {
                            return (
                                <img key={index} onClick={() => setimageIndex(index)} className={`cursor-pointer ${index === imageIndex && "border-1 border-gray-400 rounded-sm"}`} src={img} alt="" />
                            )
                        })}

                    </div>
                </motion.div>
            </div>

        </div>

       
       
       }
       </>
    )
}

export default ProductDetails
