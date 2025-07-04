'use client'
import React, { useEffect, useState } from 'react'
import { Repeat } from 'lucide-react';
import { fetchProducts } from '../../../../lib/fetchProducts';
import ProductCard from './ProductCard'

const CategoryList = ({ categories, products }) => {
    const [allCategories, setAllCategories] = useState(categories);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [allProducts, setAllProducts] = useState(products);
    const [loading, setLoading] = useState(false);
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

        <div className=''>
            <div className='flex items-center gap-1.5'>
                {allCategories?.map((c) => {
                    return <button onClick={() => changeSelected(c)} className={`border cursor-pointer border-black px-4 xl:py-2 xl:px-6
                      rounded-full  hover:text-white hover:bg-black hoverEffect ${c?.name === selectedCategory && 'bg-black text-white'}`} key={c.id}>{c.name} </button>
                })}
                <button className='border border-black p-2 
                      rounded-full  hover:text-white hover:bg-black hoverEffect '>
                    <Repeat className=' w-5 h-5  ' />
                </button>
            </div>
            <div className='grid xl:grid-cols-3'>
                {allProducts.length ? (loading ? (<span>Product Loading... </span>) : allProducts.map((item) => {
                return <div  key={item.id}> <ProductCard product={item} /></div>
            })) : <p>No Products </p>}
            </div>
        </div>

    )
}

export default CategoryList
