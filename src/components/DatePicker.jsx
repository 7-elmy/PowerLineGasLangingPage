
import React from 'react';

import  { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const CustomDate_Picker = ({label , placeholder}) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const datePickerRef = useRef(null);
  
    const handleClick = () => {
      // Programmatically open the date picker when any part of the input is clicked
      datePickerRef.current.setOpen(true);
    };
  
    return (
      <div className="min-w-full  relative">
        <label
          htmlFor="residence-expiry-date"
          className="font-[poppins] py-3 font-medium text-[16px] leading-[100%] tracking-[0]"
        >
          {label ||"Residence Expiry Date"}
        </label>
  
        <div className="relative w-full">
          <DatePicker
            id="residence-expiry-date"
            ref={datePickerRef}
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText={placeholder || "Select date"}
            className="w-[650px]  mt-[11px] ps-10 p-3 border border-Neutral-600 rounded-[8px] font-[poppins] text-[16px] text-Neutral-600 placeholder:text-[16px] placeholder:text-Neutral-600 outline-none focus:ring-0 focus:outline-none"
            dateFormat="MM/dd/yyyy"
            // autoComplete="off"
          />
          
          {/* Transparent overlay to capture clicks */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={handleClick}
          />
          
          {/* Calendar Icon */}
          <div className="absolute top-[22px] left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
        </div>
      </div>
    );
  };