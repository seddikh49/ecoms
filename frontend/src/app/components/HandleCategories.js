"use client"
import { GoChevronDown } from "react-icons/go";
import { useShop } from "../context/shopContext";


import React, { useContext, useState, useEffect } from 'react'

const HandleCategories = () => {
    const { rotateIcon, setRotateIcon, search, products, filterCategoryProducts } = useShop()
    const [icon, setIcon] = useState(true)
    const [showCategories, setshowCategories] = useState("hidden")
    const [category, setCategory] = useState([])
    const [sortedBy, setsortedBy] = useState();
    const [checkedCategory, setcheckedCategory] = useState("");




    const filterCategory = (e) => {
        if (checkedCategory === e.target.value) {
            setcheckedCategory('')
        }
        else {
            setcheckedCategory(e.target.value)
        }
    }


    useEffect(() => {
        filterCategoryProducts(checkedCategory)
    }, [checkedCategory]);



    const showCategoriesHandle = () => {
        if (showCategories === 'hidden') {
            setIcon(false)
            setshowCategories('flex')
        } else {
            setIcon(true)
            setshowCategories('hidden')
        }
    }



    return (
        <div className='sm:w-full h-max  mt-5 md:w-full w-full lg:w-52 flex flex-col gap-y-4 rounded-xl border border-gray-200 shadow-sm  p-4' dir='rtl' >
            <h1
                onClick={showCategoriesHandle}
                className='font-cairo font-bold text-gray-700 text-xl flex items-center justify-between cursor-pointer'
            >
                الفلترة
                <span className='xl:hidden lg:hidden z-2'>
                    <GoChevronDown
                        className={`${icon ? 'rotate-0' : 'rotate-180'} ${rotateIcon ? 'inline-block' : 'hidden'} transition-transform duration-300`}
                    />
                </span>
            </h1>

            <div className={`border border-gray-200 rounded-md w-full flex flex-col gap-4 p-4 xl:flex lg:flex ${showCategories} xm:${showCategories} md:${showCategories}`}>
                <h1 className='text-gray-800 text-lg font-cairo font-bold'>الفئة</h1>

                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-2'>
                        <input
                            className='accent-blue-600 w-4 h-4'
                            onChange={(e) => filterCategory(e)}
                            type="checkbox"
                            value={'Men'}
                            checked={checkedCategory === "Men"}
                        />
                        <label className='font-poppins text-gray-600 text-sm'>Men</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input
                            className='accent-blue-600 w-4 h-4'
                            onChange={(e) => filterCategory(e)}
                            type="checkbox"
                            value={'Women'}
                            checked={checkedCategory === "Women"}
                        />
                        <label className='font-poppins text-gray-600 text-sm'>Women</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input
                            className='accent-blue-600 w-4 h-4'
                            onChange={(e) => filterCategory(e)}
                            type="checkbox"
                            value={'Kids'}
                            checked={checkedCategory === "Kids"}

                        />
                        <label className='font-poppins text-gray-600 text-sm'>Kids</label>
                    </div>
                </div>
            </div>
        </div>

      


    )
}

export default HandleCategories
