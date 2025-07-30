import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'
import { backEndUrl } from '../App'


  const apiKey = import.meta.env.VITE_SERVER_API_KEY
// إنشاء السياق
export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [orderStatus, setStatusOrder] = useState(0);
  const [orders, setorders] = useState([]);
  const [copiedOrders, setCopiedOrders] = useState([]);
  const [notofications, setnotofications] = useState();
  const [status, setStatus] = useState("جديد");
  const [isAdmin, setIsAdmin] = useState();
  const [list, setList] = useState([]);
  const [categories, setCategories] = useState([]);



  const fetchOrders = async () => {

    try {
      const response = await axios.get(`${backEndUrl}/api/order/list`, {
        headers: {
          'x-api-key': `${apiKey}`
        }
      })

      if (response.data.success) {
        setorders(response.data.orders)
        setCopiedOrders(response.data.orders)
      }

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchOrders()
  }, [status]);


  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${backEndUrl}/api/category/list`)
      console.log(response)
      if (response.data.success) {
        setCategories(response.data.categories)

      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, []);





  const valueOrders = {
    orders,
    setorders,
    copiedOrders,
    setCopiedOrders,
    orderStatus,
    setStatusOrder,
    fetchOrders,
    backEndUrl,
    status,
    setStatus,
    isAdmin,
    setIsAdmin,
    list,
    setList,
    categories,
    setCategories,
    fetchCategories
  }



  return (
    <OrderContext.Provider value={valueOrders}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;