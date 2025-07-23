"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Loader2, Repeat } from 'lucide-react';
import NoProductsAvailable from './NoProductsAvailable'
import { AnimatePresence, motion } from 'framer-motion';
import { useShop } from '../context/shopContext';


const AllProducts = ({ products, categories }) => {
    const [loading, setLoading] = useState(false);
    const [allProducts, setAllProducts] = useState(products);
    const { language, setLanguage } = useShop()


    const [allCategories, setAllCategories] = useState(categories);
    const [selectedCategory, setSelectedCategory] = useState("");

    const changeSelected = (c) => {
        setSelectedCategory(c.name)
    }


    useEffect(() => {
        const FilterProducts = async () => {
            setLoading(true);
            try {
                if (selectedCategory === "") {
                    setAllProducts(products);
                    return;
                }
                await new Promise(resolve => setTimeout(resolve, 250));
                const filterdProducts = products.filter((p) => {
                    return p.Category.name === selectedCategory;
                });
                setAllProducts(filterdProducts);
            } finally {
                setLoading(false);
            }
        };

        FilterProducts();
    }, [selectedCategory, products]);




    return (
        <div className='w-full' dir={language === 'ar' ? 'rtl' : 'ltr'}  >
            <div className='flex justify-center items-center '>
                <div className='flex items-center gap-1.5'>
                    {allCategories?.map((c) => {
                        return <button onClick={() => changeSelected(c)} className={`border cursor-pointer border-black px-4 xl:py-1 xl:px-6
                      rounded-full text-black font-medium  hover:text-white hover:bg-black hoverEffect ${c?.name === selectedCategory && 'bg-black text-white'}`} key={c.id}>{c.name} </button>
                    })}
                    <button className='border border-black p-2 
                      rounded-full  hover:text-white hover:bg-black hoverEffect '>
                        <Repeat className=' w-5 h-5 ' />
                    </button>
                </div>

            </div>
            {
                loading ? (
                    <motion.div className='flex items-center justify-center w-full
                                   bg-gray-100 rounded-lg space-x-2 py-10  mt-10  text-blue-800  '>
                        <Loader2 className='w-5 h-5 animate-spin' />
                        <span className='text-xl font-semibold'>Product Loading...</span>
                    </motion.div>

                ) : allProducts.length ? (
                    <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xm:grid-cols-1 mt-10 gap-8 w-full  '>
                        {
                            allProducts?.map((item) => {
                                return <div key={item.id}> <ProductCard product={item} /></div>
                            })
                        }
                    </div>
                ) :
                    <NoProductsAvailable selectedCategory={selectedCategory} />
            }
        </div>
    )
}

export default AllProducts
