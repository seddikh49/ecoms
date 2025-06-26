"use client"
import { useShop } from "../context/shopContext";
import Image from "next/image";

import Link from "next/link";
import { useEffect } from "react";



export default function Products() {
  const {allProducts,currency } = useShop();
 



  return (
    <>
    <div className="grid gap-10 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
  {allProducts.map((product, index) => (
    <div
      key={index}
      className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col justify-between"
    >
      <div className="overflow-hidden rounded-xl">
        <Image
          src={product.image[0]}
          alt={product.name || 'صورة المنتج'}
          width={300}
          height={300}
          className="object-cover w-full h-64 transform group-hover:scale-105 transition duration-300"
          priority
        />
      </div>

      <div className="mt-4 flex flex-col justify-between flex-grow">
        <h1 className="text-lg font-semibold text-gray-800 mb-2 text-center">
          {product.name.slice(0, 20)}
        </h1>

        <div className="flex justify-between items-center px-2 mb-4">
          <span className="text-xl text-indigo-600 font-bold">
            {product.price} {currency}
          </span>
        </div>

        <Link href={`collection/${product.id}`} className="block">
          <button className="w-full font-bold bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
            شراء المنتج
          </button>
        </Link>
      </div>
    </div>
  ))}
</div>
      {/* <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xm:grid-cols-1  w-full gap-10  mt-10'>

        {allProducts.map((product, index) => (
          <div
            key={index}
            className="group  rounded-2xl bg-amber-600 shadow-lg hover:shadow-2xl transition duration-300 p-4 w-full  mx-auto"
          >
            <div className="overflow-hidden rounded-xl">
              <Image
                src={product.image[0]}
                alt={product.name || 'صورة المنتج'}
                width={300}
                height={300}
                className="object-cover  lg:h-64 md:h-64  w-full transform group-hover:scale-105 transition duration-300"
                priority
              />
            </div>

            <div className="mt-4 text-center">
              <div className="flex justify-between px-2 items-center">
                <h1 className="text-md font-semibold text-gray-800 whitespace-nowrap">{product.name.slice(0, 20)}</h1>
              <p className="text-xl text-indigo-600 font-bold mt-2">{product.price} {currency}</p>
              </div>

              <Link href={`collection/${product.id}`} className="block">
                <button className="mt-4 w-full font-bold bg-indigo-600 text-white py-2 px-4 rounded-t-md hover:bg-indigo-700 transition duration-300">
                  شراء المنتج
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div> */}


    </>
  )
}