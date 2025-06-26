"use client"
import React from 'react'
import { useShop } from "../context/shopContext";
import Image from 'next/image';
import Link from 'next/link';
import TextContent from './TextContent';
import { motion } from "framer-motion";
import { Currency } from 'lucide-react';



const HomeProducts = () => {
  const { products,currency } = useShop();

  return (
    <div dir='rtl' className="w-full mt-10">
  <TextContent text1="أحدث المنتجات" />

  <div className="grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 mt-10 w-full">
    {products.slice(0, 4).map((product, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
      >
        <div className="overflow-hidden rounded-xl aspect-square">
          <Image
            src={product.image[0]}
            alt={product.name || "صورة المنتج"}
            width={300}
            height={300}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        <div className="mt-4 text-center">
          <h1 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h1>
          <div className="text-xl text-indigo-600 font-bold mt-2 flex gap-2 "> <h1>{currency}</h1> <h1>{product.price}</h1></div>

          <Link href={`/collection/${product.id}`} className="block mt-4">
            <button className="w-full bg-indigo-600 cursor-pointer text-white font-bold py-2 px-4 rounded-xl hover:bg-indigo-700 transition-colors duration-300">
              شراء المنتج
            </button>
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
</div>
    
  )
}

export default HomeProducts
