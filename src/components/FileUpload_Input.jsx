

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
      const file =e.target.files[0];
      console.log({file});
      
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
        <p className="border-l-2 ps-3 w-full  text-Neutral-600 border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]">
          {fileName || 'Upload Picture'}
        </p>
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


export  function FileUpload_Input({
  label,
  image,
  name,
  onChange,
  value,
  error,
  touched,
  placholder
}) {
  const [fileName, setFileName] = useState(value || '');
  const fileInputRef = useRef(null);
  
  const handleFileChange = (e) => {
  
    
    if (e.target.files.length > 0) {
      const file =e.target.files[0];
      console.log({file});
      
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
        className="mt-3 h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600 flex items-center cursor-pointer"
        onClick={handleClick}
      >
        {image && <img src={image} alt="upload" />}
        <p className="border-l-2 ps-3 w-full  text-Neutral-600 border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]">
          {fileName || placholder ||'Upload Picture'}
        </p>
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






export  function FileUploadInputMultiple({
  label,
  image,
  name,
  onChange,
  value,
  error,
  touched,
  multiple = true // allow multiple files by default
}) {
  const [fileNames, setFileNames] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);

    if (filesArray.length > 0) {
      const names = filesArray.map(file => file.name);
      setFileNames(names);

      // Send the array of File objects
      if (onChange) {
        onChange(filesArray);
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
        className="mt-2 min-h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600 flex items-center cursor-pointer"
        onClick={handleClick}
      >
        {image && <img src={image} alt="upload" />}
        <div className="border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[14px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] truncate">
          {fileNames.length > 0
            ? fileNames.join(', ')
            : 'Upload file(s): image, PDF, docx...'}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          name={name}
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.gif" // allowed types
          multiple={multiple}
        />
      </div>
      {error && touched && (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  );
}
