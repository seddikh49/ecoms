"use client"
import React, { useEffect, useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
<<<<<<< HEAD
import { communes } from '../../../../public/‏‏assets/frontend_assets/communes'
import { wilayas } from '../../../../public/‏‏assets/frontend_assets/wilayas'
=======
import { communes } from '../../../public/‏‏assets/frontend_assets/communes'
import { wilayas } from '../../../public/‏‏assets/frontend_assets/wilayas'
>>>>>>> 2f49f236105de22d670dc21916f036747d7ddaf2
import { ClipLoader } from "react-spinners";
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion";





import { useShop } from '../context/shopContext'
import Link from 'next/link';
import axios from 'axios';

const ProductDetails = ({ product }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);
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
            const response = await axios.post(`https://backend.kamsed.com/api/order/add`, {
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
                toast.success('تم طلب المنتج')
                setLoading(false)
                router.push('/confirm')
            }
            if (!response.data.success) {
                if(response.data.msg.message){
                    setLoading(false)
                    return toast.error(response.data.msg.message)
                }else{
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

    //     useEffect(() => {
    //     getSingleProduct();
    //   }, [ product]);

    useEffect(() => {
        filterCommunes()
        getTotlaPrice()
    }, [wilaya, quantity, deliveryPrice, totalPrice]);








    return (
        <div>
            <div className='w-full max-h-max gap-10  flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xm:flex-col mt-10 '>
                <div className='xl:w-1/2   lg:w-1/2 md:w-full  h-max flex flex-col md:items-center  lg:items-end xl:items-end sm:items-center xm:items-center  sm:justify-start   '>
                    <div className='flex flex-col items-end gap-2 pb-3 sm:ml-auto' >
                        <p className='text-2xl font-bold'>{product.name}</p>
                        <div className='flex text-2xl font-bold'>
                            <h1>{currency} </h1>
                            <h1>{product.price}  </h1>
                        </div>
                    </div>

                    <motion.form
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-[600px] bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                        {/* الاسم ورقم الهاتف */}

                        <div dir="rtl" className="flex flex-col md:flex-row gap-5">
                            <div className="relative w-full">
                                <input
                                    onChange={(e) => setfullName(e.target.value)}
                                    value={fullName}
                                    placeholder="الاسم الكامل"
                                    type="text"
                                    className="w-full py-3 pl-10 pr-4 text-sm font-medium bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <MdAccountCircle className="absolute top-1/2 -translate-y-1/2 left-3 text-xl text-gray-500" />
                            </div>
                            <div className="relative w-full">
                                <input
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                    type="text"
                                    placeholder="رقم الهاتف"
                                    className="w-full py-3 pl-10 pr-4 text-sm font-medium bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <FaPhone className="absolute top-1/2 -translate-y-1/2 left-3 text-xl text-gray-500" />
                            </div>
                        </div>

                        {/* البلدية والولاية */}
                        <div className="flex flex-col md:flex-row gap-5">
                            <select
                                onChange={(e) => setCommune(e.target.value)}
                                value={commune}
                                className="w-full py-3 px-4 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                className="w-full py-3 px-4 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                            <div className="flex items-center overflow-hidden border border-gray-300 rounded-xl">
                                <button type="button" onClick={incrementQuantity} className="w-10 h-10 bg-blue-600 text-white font-bold text-xl hover:bg-blue-700 transition">
                                    +
                                </button>
                                <div className="w-10 h-10 flex items-center justify-center font-bold text-lg">{quantity}</div>
                                <button type="button" onClick={decrementQuantity} className="w-10 h-10 bg-red-600 text-white font-bold text-xl hover:bg-red-700 transition">
                                    -
                                </button>
                            </div>
                            <h1 className="text-lg font-bold text-gray-700 text-right">:    كمية المنتج</h1>
                        </div>

                        {/* تفاصيل الطلب */}
                        <div className="rounded-xl border border-gray-300 bg-gray-50 overflow-hidden">
                            <div className="flex items-center justify-between bg-gradient-to-l from-orange-500 to-yellow-400 p-4">
                                <FaCartShopping className="text-white text-2xl" />
                                <h1 className="text-white font-bold text-lg">: تفاصيل الطلب</h1>
                            </div>
                            <div className="p-4 space-y-4 text-sm text-gray-700">
                                <div className="text-end">
                                    <h2 className="font-bold">: المنتج</h2>
                                    <p>{product?.name}</p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex gap-1 font-bold">
                                        <span>{quantity}</span>
                                        <span>ق</span>
                                    </div>
                                    <span className="font-bold">: الكمية</span>
                                </div>
                                <div className="flex justify-between font-bold">
                                    <span>
                                        {deliveryPrice} {currency}
                                    </span>
                                    <span>: سعر التوصيل</span>
                                </div>
                                <div className="flex justify-between border-t pt-3 font-bold text-lg">
                                    <span>
                                        {totalPrice} {currency}
                                    </span>
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
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-bold text-center flex items-center justify-center gap-3"
                        >
                            {loading ? <ClipLoader color="#fff" size={24} /> : "اضغط هنا لتأكيد الطلب"}
                        </button>
                    </motion.form>
                </div>









                <motion.div initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }} className='xl:w-1/2 lg:w-1/2 md:w-full flex flex-col gap-2 justify-center md:items-center sm:items-center xm:items-center xl:items-start '>
                    <img src={product.image[imageIndex]} alt="" className='xl:w-[500px] lg:w-[400px] md:w-4/5 sm:w-[90%] xm:w-[90%]' />
                    <div className='grid grid-cols-4 xl:w-[500px] lg:w-[400px] md:w-4/5 gap-2 sm:w-[90%] xm:w-[90%]'>
                        {product.image.map((img, index) => {
                            return (
                                <img key={index} onClick={() => setimageIndex(index)} className='cursor-pointer' src={img} alt="" />
                            )
                        })}

                    </div>
                </motion.div>
            </div>

        </div>

    )
}

export default ProductDetails
