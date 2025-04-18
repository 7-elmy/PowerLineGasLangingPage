import React from 'react'
import Sidebar from '../Pages/Sidebar/Sidebar'
import Navbar from '../Pages/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import separator from "../assets/sidbar/Separate.svg"
export default function Main() {
  return (
    <div className="flex min-h-screen min-w-full ">
        <div className='fixed top-16 left-60 bg-white border border-gray-300 w-[28px] h-[28px] rounded z-50 flex justify-center items-center'>
<img src={separator} alt="separator" className=' ' />

        </div>
        <Sidebar/>
      <div className='w-full'>
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  )
}
