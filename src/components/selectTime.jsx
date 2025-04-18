import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import mailIcon from '../assets/table/🔽 Icon.png'; // adjust path if needed
import { MdAccessTimeFilled } from 'react-icons/md';

dayjs.extend(customParseFormat);

const CustomTimePicker = ({ label = 'Select Time', placeholder = 'Select time', onChange }) => {
  return (
    <div className='p-2 col-span-6 w-full'>
      <label 
        htmlFor="timepicker" 
        className='font-[poppins]  border-Neutral-1500 font-medium placeholder:text-[20px] leading-[100%] tracking-[0] block mb-2'
      >
        {label}
      </label>

      <div className='mt-2 h-[48px] rounded-[8px] border border-solid border-Neutral-600 flex items-center w-full'>
        {/* Icon */}
        <div className='flex items-center px-[12px]'>
        <MdAccessTimeFilled className='size-6 text-Neutral-600' />
        </div>

        {/* TimePicker Input */}
        <div className='border-l-2 border-Neutral-600 h-[80%] flex items-center flex-grow'>
          <TimePicker
            id="timepicker"
            onChange={onChange}
            placeholder={placeholder}
            format="HH:mm"
            inputReadOnly
            defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
            className="p-[6px] !pl-3 outline-none !w-[98%] focus:outline-none font-poppins font-normal text-[16px] leading-[100%] tracking-[0]"
            style={{ width: '100%', height: '100%', border: 'none' }}
            suffixIcon={null}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomTimePicker;
