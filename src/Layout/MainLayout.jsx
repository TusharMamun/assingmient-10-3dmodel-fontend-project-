import React from 'react'
import NavBer from '../Component/Header/NavBer'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer'

const MainLayout = () => {
  return (
    <div className='bg-base-300 rounded-md'>
        <NavBer></NavBer>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout