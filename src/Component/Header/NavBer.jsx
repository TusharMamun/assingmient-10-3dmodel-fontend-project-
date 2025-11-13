import React, { use,  } from 'react';
import { Link, NavLink } from 'react-router';

import { toast } from 'react-toastify';
// import spinner
import img from '/logo-2.5.png';
import LoddingSpenner from '../LoddingSpenner';
import { AuthContext } from '../../Auth/Authcontext';
import ThimChange from './ThimChange';



const NavBer = () => {
const{ user, logOut, loading} =use(AuthContext)
  if (loading) {
    return <LoddingSpenner/>;
  }
console.log(user)

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Logout failed!");
      });
  };

  // Show spinner while auth is loading
  if (loading) {
    return <LoddingSpenner/>;
  }

  const navItem = (
    <>
      <NavLink to='/' className="text-xs font-normal md:text-xl md:font-semibold ">Home</NavLink>
      <NavLink to='/allmodel' className="text-xs md:text-xl md:font-semibold ">All Model</NavLink>
      <NavLink to='/addmodel' className="text-xs font-normal md:text-xl md:font-semibold ">Add Model </NavLink>

    </>
  );

  return (
    <div className="sticky top-0 w-full z-50 mb-8 ">
      <div className="navbar w-11/12 mx-auto mt-5 rounded-2xl px-8 py-4 flex justify-between items-center 
                      bg-black/60 backdrop-blur-md border border-white/10 shadow-lg relative">
        {/* Navbar Start (Logo + Dropdown) */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Mobile Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {navItem}
            </ul>
          </div>

          {/* Logo */}
       <div className='flex '> 
           <img src={img} alt="Logo" className="w-28 h-auto object-contain rounded-full" />
  
       </div>
        </div>

        {/* Navbar Center (Links) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 text-white font-semibold activeMenu">
            {navItem}
          </ul>
        </div>

        {/* Navbar End (Profile/Login Buttons) */}
        <div className="navbar-end">

          <div className="flex md:flex-row gap-4 items-center">
              <div className='mb-10'>
             
              </div>
            {/* Login / Sign In Buttons */}
      <div>
                 
              <div className="flex gap-3">
  
              {user ? (
                <button
                  onClick={handleLogout}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/loging"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    to="/regestation"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
      </div>

            {/* Profile Dropdown */}
            {user && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                  data-tip={user?.displayName || "User"}
                >
                  <div className="w-10 h-10 rounded-full border-2 border-yellow-400">
                    <img
                      alt="User avatar"
                      src={user?.photoURL || "https://i.ibb.co.com/0m2kzwk/default-user.png"}
                    />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-xl shadow-2xl z-[1] mt-3 w-60 p-4 space-y-2 text-gray-700"
                >
                  <li className="border-b pb-2 mb-2">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={user?.photoURL || "https://i.ibb.co.com/0m2kzwk/default-user.png"}
                        alt="User"
                        className="w-12 h-12 rounded-full mb-2 border"
                      />
                      <p className="font-semibold text-lg">{user?.displayName || "User Name"}</p>
                      <p className="text-sm text-gray-500 truncate">{user?.email || "user@example.com"}</p>
                    </div>
                  </li>

                  <li>
                    <Link
                      to="/mypurchage"
                      className="flex items-center justify-start gap-2 font-medium hover:text-blue-600"
                    >
                      <i className="fa-solid fa-cart-shopping"></i> My Purchases
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myAddingmodel"
                      className="flex items-center justify-start gap-2 font-medium hover:text-blue-600"
                    >
                      <i className="fa-solid fa-cube"></i> My Models
                    </Link>
                  </li>

                  <li className="pt-2 border-t">
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition-all duration-200"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
            <div>
         
            </div>
          </div>
        </div>

      </div>
                          <div className='absolute  top-2 right-30'><ThimChange></ThimChange></div>       
    </div>
  );
};

export default NavBer