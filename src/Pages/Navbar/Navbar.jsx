import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import userprofile from "../../assets/sidbar/company logo.png"
import { IoMdSunny } from 'react-icons/io'
import { FaMoon } from 'react-icons/fa'
export default function Navbar() {
  return (
    <section className=' bg-white border-b-1 border-gray-300 sticky top-0 right-0 left-0 z-40'>
      <div className="  p-5 flex justify-between items-center ">
              <div className="   ">
                <div className="w-[400px]  relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="font-poppins h-[40px] font-medium text-[12px] leading-[100%] tracking-[0%] align-middle w-full pl-10 pr-4 py-2 border border-gray-300 rounded-[8px] focus:outline-none   "
                  />
                  <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                </div>
              </div>
                <div className="flex items-center space-x-3">
                 <div className="flex items-center px-4  border-gray-200">
                                 <div className="w-10 h-10 rounded-[10px] bg-gray-300 overflow-hidden flex-shrink-0">
                                   <img src={userprofile} alt="User" className="w-full h-full object-cover" />
                                 </div>
                                 <div className="ml-3 space-y-2">
                                   {/* <div className=" text-Neutral-600 flex gap-1 items-center font-poppins font-medium text-[12px] leading-[100%] tracking-[0px] text-right capitalize"><span>Good Morning</span> <span className='pt-0.5'><IoMdSunny  className="text-Primary-400"/></span></div> */}
                                   <div className="text-Neutral-600 flex gap-1 items-center font-poppins font-medium text-[12px] leading-[100%] tracking-[0px] text-right capitalize">
  <span>
    {new Date().getHours() >= 5 && new Date().getHours() < 18 
      ? "Good Morning" 
      : "Good Evening"}
  </span> 
  <span className='pt-0.5'>
    {new Date().getHours() >= 5 && new Date().getHours() < 18 
      ? <IoMdSunny className="text-Primary-400"/> 
      : <FaMoon className="text-blue-950"/>}
  </span>
</div>
                                   <div className=" font-poppins font-semibold text-[16px] text-Neutral-1500 leading-[100%] tracking-[0%] text-right capitalize">Ahmed Hossam</div>
                                 
                                 </div>
                               </div>
                </div>
              </div>
    </section>
  )
}
