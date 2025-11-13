import React from 'react'

import { NavLink } from 'react-router'
import EroorImg from '/error-404.png'
import NavBer from './Header/NavBer'



const PathError = () => {
  return (
  <>
<NavBer></NavBer>
    <div className=" mx-auto grid place-items-center text-center px-8 bg-[#f5f5f] my-10 ">
      <div className='mt-20'>
       <img src={EroorImg} alt="" />
        <h1 className="mt-10 text-3xl leading-snug text-blue-gray-800 md:text-4xl">
        Oops, page not found!
        </h1>
        <p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
         The page you are looking for is not available.
        </p>
    <NavLink to='/'>
     <button
      
          className="btn py-6 px-4 md:px-8 outline rounded-md bg-gradient-to-r from-[#6a11cb] to-[#b36eff] text-white"
        >
         Go Back Home
        </button></NavLink>
        
      </div>
    </div>
    {/* <Footer></Footer> */}
    </>
  )
}

export default PathError