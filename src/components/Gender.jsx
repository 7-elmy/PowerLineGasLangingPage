// import React, { useState } from 'react';

// const FormWithDropdown = ({icon ,options , placeholder , label ,selectGender,  setSelectGender , value}) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   // const [selectedGender, setSelectedGender] = useState('');
  
 
  
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };
  
//   const selectedGender = (gender) => {
//     setSelectGender(gender);
//     setIsDropdownOpen(false);
//   };
  
//   return (
//     <div className="flex flex-col gap-4">
//       {/* Gender Dropdown */}
//       <div className=" col-span-6">
//         <label htmlFor="gender" className="font-poppins font-medium text-[16px] leading-[100%] tracking-[0]">
//          {label}
//         </label>
//         <div className="relative mt-2">
//           <div 
//             className="h-[48px] gap-[10px] rounded-[8px] border border-solid px-[12px] border-Neutral-600 flex items-center justify-between cursor-pointer"
//             onClick={toggleDropdown}
//           >
//             <div className="flex items-center gap-2 w-full ">
//             <img src={icon} alt="email" />
//               <span className="border-l-2 py-2 border-Neutral-600 ps-3 font-poppins font-normal text-[16px] leading-[100%] tracking-[0] text-gray-500">
//                 {value || selectGender || placeholder || 'Select Gender'}
//               </span>
//             </div>
//             <div className=' p-[4.5px] border-l-2 border-Neutral-600'>
//             <svg className='ps-[2px] ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <polyline points="6 9 12 15 18 9"></polyline>
//             </svg>

//             </div>
//           </div>
          
//           {isDropdownOpen && (
//             <div className="absolute z-10 w-full mt-1 bg-white border border-Neutral-600 rounded-[8px] shadow-lg max-h-60 overflow-auto">
//               {options.map((gender, index) => (
//                 <div 
//                   key={index} 
//                   className="p-3 hover:bg-gray-100 cursor-pointer font-poppins font-normal text-[16px]"
//                   onClick={() =>{ selectedGender(gender) }}
                 
//                 >
//                   {gender}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
      
    
//     </div>
//   );
// };

// export default FormWithDropdown;


import React, { useState } from 'react';

const FormWithDropdown = ({ icon, options, placeholder, label, value, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (gender) => {
    onChange(gender);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="col-span-6">
        <label className="font-poppins font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600">
          {label}
        </label>
        <div className="relative ">
          <div
            className="h-[48px] gap-[10px] rounded-[8px] border px-[12px] border-Neutral-600 flex items-center justify-between cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="flex items-center gap-2 w-full">
              <img src={icon} alt="icon" />
              <span className="border-l-2 py-2 border-Neutral-600 ps-3  text-Neutral-600  placeholder:!text-[14px] placeholder:text-Neutral-600">
                {value || placeholder || 'Select Gender'}
              </span>
            </div>
            <div className="p-[4.5px] border-l-2 border-Neutral-600">
              <svg className="ps-[2px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {isDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-Neutral-600 rounded-[8px] shadow-lg max-h-60 overflow-auto">
              {options.map((gender, index) => (
                <div
                  key={index}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(gender)}
                >
                  {gender}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormWithDropdown;
