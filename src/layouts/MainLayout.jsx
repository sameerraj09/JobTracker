import React from 'react'
import Navbar from '../component/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import {Outlet} from 'react-router-dom';
const MainLayout = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <ToastContainer/>
   </>
  )
}

export default MainLayout
