import React from 'react'
import NavBer from '../Component/Header/NavBer'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='bg-base-300'>
        <NavBer></NavBer>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout