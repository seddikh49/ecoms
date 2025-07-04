

import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backEndUrl } from '../App';
import { toast } from 'react-toastify';
import { ClipLoader } from "react-spinners";
import { OrderContext } from '../context/orderContext';

const Add = ({ token }) => {
  const { categories } = useContext(OrderContext);
  console.log(categories)
  console.log("message")
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataForm = new FormData();
      dataForm.append("name", name);
      dataForm.append("description", description);
      dataForm.append("price", price);
      dataForm.append("categoryId", categoryId);

      if (image1) dataForm.append("image1", image1);
      if (image2) dataForm.append("image2", image2);
      if (image3) dataForm.append("image3", image3);
      if (image4) dataForm.append("image4", image4);

      const response = await axios.post(`${backEndUrl}/api/product/add`, dataForm, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        toast.success(response.data.msg);
        resetForm();
      } else {
        toast.error("فشل في إضافة المنتج");
      }
    } catch (error) {
      console.error(error);
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setImage1(null);
    setImage2(null);
    setImage3(null);
    setImage4(null);
    setPrice("");
    setCategoryId("");
  };
  return (
  <div className=" bg-gray-50 flex p-10 justify-center">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8" dir="rtl">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">إضافة منتج جديد</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        {/* صور المنتج */}
        <div>
          <p className="font-bold mb-2 text-gray-700">صور المنتج</p>
          <div className="flex gap-3 flex-wrap">
            {[image1, image2, image3, image4].map((img, index) => (
              <label key={index} htmlFor={`image${index + 1}`} className="cursor-pointer">
                <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-100 hover:border-gray-500 transition">
                  <img
                    className="object-cover w-full h-full"
                    src={img ? URL.createObjectURL(img) : assets.upload_area}
                    alt="upload"
                  />
                </div>
                <input
                  type="file"
                  id={`image${index + 1}`}
                  hidden
                  onChange={(e) => {
                    const setter = [setImage1, setImage2, setImage3, setImage4][index];
                    setter(e.target.files[0]);
                  }}
                />
              </label>
            ))}
          </div>
        </div>

        {/* اسم المنتج */}
        <div>
          <p className="font-bold mb-1 text-gray-700">اسم المنتج</p>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="أدخل اسم المنتج"
          />
        </div>

        {/* وصف المنتج */}
        <div>
          <p className="font-bold mb-1 text-gray-700">وصف المنتج</p>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="أدخل وصف المنتج"
          />
        </div>

        {/* الفئة والسعر */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <p className="font-bold mb-1 text-gray-700">الفئة</p>
            <select
              required
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
            >
              <option value="">اختر الفئة</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <p className="font-bold mb-1 text-gray-700">سعر المنتج</p>
            <input
              required
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
              placeholder="أدخل السعر"
            />
          </div>
        </div>

        {/* زر الإضافة */}
        <button
          disabled={loading}
          className="bg-black text-white px-8 py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition disabled:opacity-50"
        >
          {loading ? <ClipLoader color="#fff" size={20} /> : "إضافة المنتج"}
        </button>
      </form>
    </div>
  </div>
);

  // return (
  //   <div className="w-full bg-gray-100 p-10">
  //     <div className="p-5 bg-white rounded-xl shadow-xl" dir="rtl">
  //       <form onSubmit={handleSubmit} className="flex flex-col items-start gap-6">
  //         <h1 className="text-xl font-bold mb-4">إضافة منتج جديد</h1>

  //         {/* صور المنتج */}
  //         <div className="flex flex-col gap-2">
  //           <p className="font-bold">صور المنتج</p>
  //           <div className="flex gap-3 flex-wrap">
  //             {[image1, image2, image3, image4].map((img, index) => (
  //               <label key={index} htmlFor={`image${index + 1}`} className="cursor-pointer">
  //                 <img
  //                   className="w-24 h-24 object-cover border border-gray-300 rounded"
  //                   src={img ? URL.createObjectURL(img) : assets.upload_area}
  //                   alt="upload"
  //                 />
  //                 <input
  //                   type="file"
  //                   id={`image${index + 1}`}
  //                   hidden
  //                   onChange={(e) => {
  //                     const setter = [setImage1, setImage2, setImage3, setImage4][index];
  //                     setter(e.target.files[0]);
  //                   }}
  //                 />
  //               </label>
  //             ))}
  //           </div>
  //         </div>

  //         {/* اسم المنتج */}
  //         <div className="w-full max-w-[500px]">
  //           <p className="font-bold mb-1">اسم المنتج</p>
  //           <input
  //             type="text"
  //             required
  //             value={name}
  //             onChange={(e) => setName(e.target.value)}
  //             className="w-full px-4 py-2 border border-gray-300 rounded"
  //             placeholder="أدخل اسم المنتج"
  //           />
  //         </div>

  //         {/* وصف المنتج */}
  //         <div className="w-full max-w-[500px]">
  //           <p className="font-bold mb-1">وصف المنتج</p>
  //           <textarea
  //             required
  //             value={description}
  //             onChange={(e) => setDescription(e.target.value)}
  //             className="w-full px-4 py-2 border border-gray-300 rounded"
  //             placeholder="أدخل وصف المنتج"
  //           />
  //         </div>

  //         {/* الفئة والسعر */}
  //         <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[500px]">
  //           <div className="flex-1">
  //             <p className="font-bold mb-1">الفئة</p>
  //             <select
  //               required
  //               value={categoryId}
  //               onChange={(e) => setCategoryId(e.target.value)}
  //               className="w-full px-4 py-2 border border-gray-300 rounded"
  //             >
  //               <option value="">اختر الفئة</option>
  //               {categories.map((cat) => (
  //                 <option key={cat.id} value={cat.id}>{cat.name}</option>
  //               ))}
  //             </select>
  //           </div>

  //           <div className="flex-1">
  //             <p className="font-bold mb-1">سعر المنتج</p>
  //             <input
  //               required
  //               type="number"
  //               value={price}
  //               onChange={(e) => setPrice(e.target.value)}
  //               className="w-full px-4 py-2 border border-gray-300 rounded"
  //               placeholder="أدخل السعر"
  //             />
  //           </div>
  //         </div>

  //         {/* زر الإضافة */}
  //         <div className="mt-4">
  //           <button
  //             disabled={loading}
  //             className="bg-black text-white px-8 py-2 rounded font-bold flex items-center justify-center gap-2"
  //           >
  //             {loading ? <ClipLoader color="#fff" size={20} /> : "إضافة المنتج"}
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
};

export default Add;