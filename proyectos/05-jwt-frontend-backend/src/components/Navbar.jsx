import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { isAutenticated, login, checkAuth } =useAuth()
  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <NavLink to="/" className='text-gray-800 hover:text-sky-800 px-4 py-2 text-sm font-medium'>
            My app
          </NavLink>
          <NavLink to="/login" className='text-gray-800 hover:text-sky-800 px-4 py-2 text-sm font-medium'>
            Login
          </NavLink>
          <NavLink to="/register" className='text-gray-800 hover:text-sky-800 px-4 py-2 text-sm font-medium'>
            Register
          </NavLink>
          <NavLink to="/dashboard" className='text-gray-800 hover:text-sky-800 px-4 py-2 text-sm font-medium'>
            Dashboard
          </NavLink>
        </div>
      </div> 
    </nav>
 )
}

export default Navbar