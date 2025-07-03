import React, { useContext, useState } from 'react'
import { OrderContext } from '../context/orderContext';
import axios from 'axios';
import { backEndUrl } from '../App'
import { useEffect } from 'react';
import { RiSettings4Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';


const Categories = ({ token }) => {
    const { categories,fetchCategories } = useContext(OrderContext)
    const [name, setName] = useState("");

    


    const handelCategory = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${backEndUrl}/api/category/add`, { name }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.data.success) {
               
                setName("");
                fetchCategories()
            }
        } catch (error) {
            console.error(error);
        }
    }

    const deleteCategory = async (id) => {
        try {
            const response = await axios.delete(`${backEndUrl}/api/category/delete/${id}`)
            if (response.data.success) {
                fetchCategories()
            }

        } catch (error) {
              console.log(error)
        }
    }


    return (
        <div dir='rtl' className='p-10'>
            <div className="mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-6 w-1/2 " >

                {/* نموذج إضافة فئة */}
                <form onSubmit={handelCategory} className="flex flex-row-reverse items-center space-x-reverse space-x-4">
                    <input
                        type="text"
                        placeholder="اسم الفئة"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-right"
                    />
                    <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"> إضافة فئة</button>
                </form>

                {/* قائمة الفئات */}
                <div className="space-y-2" >
                    {categories.length === 0 ? (
                        <p className="text-gray-500 text-center">لا توجد فئات مضافة بعد</p>
                    ) : (
                        categories.map((cat) => (
                            <div dir='ltr'
                                key={cat.id}
                                className="px-4 py-2 bg-gray-100 rounded-xl shadow-sm flex flex-row-reverse justify-between items-center hover:bg-gray-200 transition"
                            >
                                <h1>{cat.name}</h1>
                                <button onClick={() => deleteCategory(cat.id)} className='bg-red-400 hover:bg-red-400/85  text-white px-2 rounded-md cursor-pointer'>حذف</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>

    );
};

export default Categories
