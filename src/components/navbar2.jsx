import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar2 = () => {

    const navigate = useNavigate()

  return (
    <div>
        <div className='py-2 px-5 bg-emerald-700'>
            <button 
            onClick={()=>{
            navigate('/')
            }}
            className='font-medium bg-red-900 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
            Return to Home Page
            </button>
            <button 
            onClick={()=>{
            navigate(-1)
            }}
            className='font-medium bg-red-900 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
            Back
            </button>
            <button 
            onClick={()=>{
            navigate(+1)
            }}
            className='font-medium bg-red-900 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
            Next
            </button>

        </div>
    </div>
  )
}

export default NavBar2