import React, { useState, useEffect, useContext } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Add from './pages/Add'
import Orders from './pages/Orders'
import List from './pages/List'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import Orderdetail from './pages/Orderdetail'
import axios from 'axios'
import { OrderContext } from './context/orderContext'
import Home from './pages/Home'
import Lottie from 'lottie-react';
import loadingAnimation from './assets/loading.json';
import Edit from './pages/edit'
import Categories from './pages/categories'




export const backEndUrl = import.meta.env.VITE_BACK_END_URL


const App = () => {
  const { isAdmin, setIsAdmin } = useContext(OrderContext)
  const [loading, setloading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');


  const verifyToken = async () => {


    if (!token) {
      setIsAdmin(false)
      setloading(false)
      return
    } else {

      try {
        const response = await axios.post(`${backEndUrl}/api/user/verify-token`, {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (response.data.role === "admin") {
          setIsAdmin(true)
          // setloading(false)
        } else {
          setIsAdmin(false)
          setloading(false)

          setToken('')
          localStorage.removeItem('token')
        }
      } catch (error) {
        console.log(error)
      }
    }
    setloading(false)
  }


  useEffect(() => {
    localStorage.setItem('token', token)
    verifyToken()

  }, [token]);

  return (
    loading ? (
      <div className='flex justify-center items-center w-full h-screen'>
        <Lottie animationData={loadingAnimation} loop={true} style={{ width: 400, height: 400 }} />

      </div>
    ) :
      <div className='bg-gray-50  w-full relative '>

        <ToastContainer />
        {isAdmin ?
          <>
            <NavBar setToken={setToken} />
            <hr className='opacity-20 text-gray-600' />

            <div className='flex w-full justify-end relative '>
              <div className='xl:w-[85%] lg:w-[85%] md:w-[85%] xm:w-full sm:w-full'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/add' element={<Add token={token} />} />
                  <Route path='/edit/:id' element={<Edit />} />
                  <Route path='/orders' element={<Orders />} />
                  <Route path='/list' element={<List token={token} />} />
                  <Route path='/orderdetail/:name' element={<Orderdetail token={token} />} />
                  <Route path='/categories' element={<Categories token={token} />} />
                </Routes>
              </div>
              <div className='xl:w-56  lg:block lg:w-52 md:w-44 sm:w-20 xm:w-12  '>
                <SideBar />
              </div>
            </div>
            <div>
              <h1>
                {loading && "you don't have permission to acces this page"}
              </h1>
            </div>
          </>

          : (
            <Login setToken={setToken} />
          )
        }

      </div>
  )
}

export default App
