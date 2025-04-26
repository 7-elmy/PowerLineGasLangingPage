

import React from 'react';
import mailIcon from '../assets/table/🔽 Icon.png';
import { DatePicker } from 'antd';


export const CustomDatePicker = ({ onChange, label, placeholder }) => {
  return (
    <div className=' col-span-6 w-full'>
      <label 
        htmlFor="datepicker" 
        className='font-[poppins]  font-medium text-[16px] leading-[100%] tracking-[0] block mb-2'
      >
        {label || 'Email Address*'}
      </label>
      
      <div className='mt-2 h-[48px] rounded-[8px] border border-solid border-Neutral-600 flex items-center w-full'>
        <div className='flex items-center px-[12px]'>
          <img src={mailIcon} alt="calendar" className="w-5 h-5" />
        </div>
        
        <div className=' border-l-2 border-Neutral-600 h-[80%]  flex items-center flex-grow'>
          <DatePicker
            id="datepicker"
            onChange={onChange}
            format="MM-DD-YYYY"
            placeholder={placeholder || "Select date"}
            // bordered={false}
            suffixIcon={null}
            className=" p-[6px]  !pl-3 outline-none  !w-[98%] focus:outline-none font-poppins font-normal placeholder:text-9xl    text-[16px] leading-[100%] tracking-[0]"
            // popupClassName="custom-datepicker-dropdown"
            style={{ width: '100%', height: '100%' }}
            dropdownStyle={{ zIndex: 1000 }}
            inputReadOnly // This prevents the keyboard on mobile devices
          />
        </div>
      </div>
    </div>
  );
};








