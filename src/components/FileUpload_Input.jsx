// import React, { useRef, useState } from 'react'

// export default function FileUploadInput ({label , image }) {
//     const [fileName, setFileName] = useState('');
//     const fileInputRef = useRef(null);
  
//     const handleFileChange = (e) => {
//       if (e.target.files.length > 0) {
//         setFileName(e.target.files[0].name);
//       }
//     };
  
//     const handleClick = () => {
//       fileInputRef.current.click();
//     };
  
//     return (
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:!text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]'>
//         {label}
//         </label>
//         <div 
//           className='mt-2 h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600 flex items-center cursor-pointer'
//           onClick={handleClick}
//         >
//           <img src={image} alt="address" />
          
//           <div className='w-full border-l-2 ps-3 border-Neutral-600 flex items-center h-full'>
//             <span className={`font-[poppins] font-normal text-[16px] placeholder:!text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] ${fileName ? 'text-Neutral-1500' : 'text-Neutral-600'}`}>
//               {fileName || 'Upload Picture'}
//             </span>
//           </div>
          
//           <input 
//             type="file" 
//             ref={fileInputRef}
//             onChange={handleFileChange}
//             className='hidden' 
//           />
//         </div>
//       </div>
//     );
//   };

import React, { useRef, useState } from 'react';

export default function FileUploadInput({
  label,
  image,
  name,
  onChange,
  value,
  error,
  touched
}) {
  const [fileName, setFileName] = useState(value || '');
  const fileInputRef = useRef(null);
  
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      
      // Call the onChange prop to update the parent component or Formik
      if (onChange) {
        onChange(file);
      }
    }
  };
  
  const handleClick = () => {
    fileInputRef.current.click();
  };
  
  return (
    <div className="w-full">
      <label className="font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]">
        {label}
      </label>
      <div 
        className="mt-2 h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600 flex items-center cursor-pointer"
        onClick={handleClick}
      >
        {image && <img src={image} alt="upload" />}
        <div className="border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]">
          {fileName || 'Upload Picture'}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          name={name}
          accept="image/*"
        />
      </div>
      {error && touched && (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  );
}