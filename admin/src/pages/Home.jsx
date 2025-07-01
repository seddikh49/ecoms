import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    // <div className='flex justify-center flex-col items-center w-full h-1/2 '>
    //   <div className='xl:text-6xl lg:text-5xl md:text-4xl xl:flex-row  flex sm:text-3xl xm:text-xl font-bold'>
    //     <h1>KAMSED-STORE</h1>
    //     <h1 className='text-amber-500'>-</h1>
    //     <h1>صفحة الأدمين</h1></div>
    //     <p>
    //       لوحة تحكم الأدمن هي الواجهة الإدارية الخاصة بالموقع أو التطبيق، تتيح للمسؤولين إدارة المحتوى، التحكم بالمستخدمين، متابعة الطلبات، والإشراف على إعدادات النظام بكل سهولة وأما
    //     </p>
        
    // </div>
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-gray-100 to-white p-4">
  <div className="flex flex-col items-center text-center space-y-4">
    
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold flex items-center space-x-2">
      <span className="text-black">KAMSED</span>
      <span className="text-amber-500">-</span>
      <span className="text-black">STORE</span>
    </h1>

    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
      صفحة الأدمين
    </h2>

    <p className="max-w-xl text-center text-gray-600 mt-4 leading-relaxed">
      لوحة تحكم الأدمن هي الواجهة الإدارية الخاصة بالموقع أو التطبيق، تتيح للمسؤولين إدارة المحتوى، التحكم بالمستخدمين، متابعة الطلبات، والإشراف على إعدادات النظام بكل سهولة وأمان.
    </p>

    <Link to={'/list'} className="mt-6 px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-xl shadow transition-all">
      دخول الى قائمة المنتجات
       
    </Link>

  </div>
</div>
  )
}

export default Home
