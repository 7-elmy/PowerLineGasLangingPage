import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function BreadCrumb({item1 , item2}) {
  return (
    <div>
        <div className="flex justify-around items-center border border-Neutral-600 rounded-md mb-6 px-2 p-2  w-[300px]">
          <div className="flex items-center  font-medium text-[14px] leading-[100%] tracking-[0%] font-[Inter]   rounded-l-md text-Neutral-600">
            <span>{item1}</span>
          </div>
            <div className="ml-2 text-md"><MdKeyboardArrowRight  className='size-4'/></div>
          <button className="bg-[#FBB03F]   text-white p-2 px-4 rounded-md">
           {item2}
          </button>
        </div>
    </div>
  )
}
