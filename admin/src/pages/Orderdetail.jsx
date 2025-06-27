import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { backEndUrl } from '../App'
import { OrderContext } from '../context/orderContext';



const Orderdetail = () => {

    const { orderStatus, orders,status,setStatus} = useContext(OrderContext)
    const params = useParams()



    const [singleOrder, setSingleOrder] = useState([]);
    
    const [statusIndex, setStatusIndex] = useState();



    const getOrder = async () => {
      const {name} = await params
      console.log(params)
        const oneOrder = orders.filter((or) => {
            return  or.id === name
        })
        setSingleOrder(oneOrder)
        if (oneOrder.length > 0) {
            setStatus(oneOrder[0].status);
        }
        
    }

     
    useEffect(() => {
        getOrder()
    }, [orders]);

    const [listStatus, setListStatus] = useState([
        'جديد', 'قيد المراجعة', 'تم التوصيل', 'ملغى'
    ]);


    const updateStatus = async (newStatus, id) => {
        
        try {
            const response = await axios.put(`${backEndUrl}/api/order/update/${id}`, {
                status: newStatus
            });
            
        setStatus(response.data.status)
        
        } catch (err) {
            console.error('حدث خطأ أثناء التحديث', err);

        }
    };
    const OrderDetailItem = ({ label, value }) => (
        <div className="text-end">
          <div className="text-sm text-gray-500">{label}</div>
          <div className="text-lg font-semibold text-gray-800">{value}</div>
        </div>
      );


    return singleOrder.length && (
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">

  {/* العنوان */}
  <div className="text-end">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">: تفاصيل الطلب</h1>
  </div>

  {/* معلومات الطلب */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-md border">
    <OrderDetailItem label="الاسم الكامل" value={singleOrder[0].fullName} />
    <OrderDetailItem label="رقم الهاتف" value={singleOrder[0].phone} />
    <OrderDetailItem label="المنتج" value={`${singleOrder[0].productName}`} />
    <OrderDetailItem label="الولاية" value={singleOrder[0].wilaya} />
    <OrderDetailItem label="البلدية" value={singleOrder[0].commune} />
    <OrderDetailItem
      label="تاريخ الطلب"
      value={new Date(singleOrder[0].date).toLocaleDateString('en-EG', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })}
    />
  </div>

  {/* حالة الطلب */}
  <div className="bg-white p-6 rounded-2xl shadow-md border text-end space-y-4">
    <h2 className="font-bold text-xl"> :الحالة الحالية</h2>
    <span className={`
      inline-block text-white px-4 py-2 rounded-full font-bold text-sm md:text-base
      ${status === 'جديد' ? 'bg-blue-500' :
        status === 'قيد المراجعة' ? 'bg-orange-400' :
          status === 'تم التوصيل' ? 'bg-green-500' : 'bg-red-500'}
    `}>
      {status}
    </span>
  </div>

  {/* تغيير الحالة */}
  <div className="bg-white p-6 rounded-2xl shadow-md border text-end space-y-4">
    <h2 className="font-bold text-xl"> : تغيير الحالة</h2>
    <select
      value={status}
      onChange={(e) => updateStatus(e.target.value, singleOrder[0].id)}
      className="w-full md:w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {listStatus.map((sta, index) => (
        <option key={index}>{sta}</option>
      ))}
    </select>
  </div>
</div>
       
    )
}

export default Orderdetail
