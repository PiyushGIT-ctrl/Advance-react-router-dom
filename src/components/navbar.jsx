import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center p-4 px-8 bg-emerald-800 justify-between'>
        <h2 className='text-3xl font-bold'>Katestillsuge</h2>
        <div className='flex gap-10'>
          <Link className='text-lg font-medium' to='/'>Home</Link>
          <Link className='text-lg font-medium' to='/About'>About</Link>
          <Link className='text-lg font-medium' to='/Contact'>Contact</Link>
          <Link className='text-lg font-medium' to='/Courses'>Courses</Link>
          <Link className='text-lg font-medium' to='/Product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar