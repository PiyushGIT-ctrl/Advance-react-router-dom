import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 py-4 '>
        <Link className='text-xl font-semibold'  to='/Product/Men'>Men's</Link>
        <Link className='text-xl font-semibold'  to='/Product/Women'>Women's</Link>
    </div>
    <Outlet />
    </div>
  )
}

export default Product