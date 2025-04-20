
import React, { useState } from 'react';
import title from "../../../assets/table/pajamas_title.png";
import image from "../../../assets/table/gallery.png";
import FileUploadInput, { FileUploadInputMultiple } from '../../../components/FileUpload_Input';
import { CustomDatePicker } from '../../../components/CustomPicker';
import { FiPlus } from 'react-icons/fi';
import { LiaDownloadSolid } from 'react-icons/lia';

export default function AddEmployeeform3({ 
  setBorder = false, 
  setButton = true, 
  formik ,
  documents,
  setDocuments
  , imageList=false
}) {
  // State to track document sections
  const [documentSections, setDocumentSections] = useState([
    { id: 1, title: '', document: null, expiryDate1: '', expiryDate2: '' }
  ]);
  console.log({documentSections});
  
  // Update formik values when document sections change
  const updateFormik = (newSections) => {
    setDocumentSections(newSections);
    setDocuments(newSections);
    // setDocs(newSections)
    
    if (formik && formik?.setFieldValue) {
      formik?.setFieldValue('documents', newSections);
    }
  };

  const handleDateChange = (id, fieldName, date, dateString) => {
    const updatedSections = documentSections.map(section => 
      section.id === id ? { ...section, [fieldName]: dateString } : section
    );
    updateFormik(updatedSections);
  };

  const handleTitleChange = (id, value) => {
    const updatedSections = documentSections.map(section => 
      section.id === id ? { ...section, title: value } : section
    );
    updateFormik(updatedSections);
  };

  const handleDocumentUpload = (id, file) => {
    const updatedSections = documentSections.map(section => 
      section.id === id ? { ...section, document: file } : section
    );
    updateFormik(updatedSections);
  };

  const addNewDocumentSection = () => {
    const newId = documentSections.length > 0 
      ? Math.max(...documentSections.map(section => section.id)) + 1 
      : 1;
    
    const newSections = [
      ...documentSections,
      { id: newId, title: '', document: null, expiryDate1: '', expiryDate2: '' }
    ];
    
    updateFormik(newSections);
  };

  const removeDocumentSection = (idToRemove) => {
    // Only allow removal if there's more than one section
    if (documentSections.length > 1) {
      const filteredSections = documentSections.filter(section => section.id !== idToRemove);
      updateFormik(filteredSections);
    }
  };

  return (
    <div className={setBorder ? "border border-Neutral-600 rounded-[12px] px-8 mx-3 pb-8" : ""}>
      {documentSections.map((section, index) => (
        <div key={section.id} className='pt-8 grid grid-cols-12 gap-6 border-b border-gray-200 pb-8'>
          {index > 0 && (
            <div className='col-span-12 flex justify-between items-center mb-2'>
              <h3 className='font-[poppins] font-medium text-lg text-gray-700'>
                Document Set {index + 1}
              </h3>
              <button 
                type="button"
                onClick={() => removeDocumentSection(section.id)}
                className='text-red-500 p-2 rounded-md hover:bg-red-50'
              >
                Remove
              </button>
            </div>
          )}
          {imageList== true? <div className="col-span-12">
<label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Files*</label>
<div className='border border-Neutral-600 rounded-[8px] flex items-center gap-3 my-4 py-3'>
  <div className='border-r-2 my-2  flex justify-center items-center border-Neutral-600 w-[50px] h-[40px]'>

  <img src={image} alt="image" />
  </div>
  <div className='w-[200px] h-[200px] bg-Neutral-600 rounded-lg'></div>
  <div className='w-[200px] h-[200px] bg-Neutral-600 rounded-lg'></div>
  <div className='w-[200px] h-[200px] bg-Neutral-600 rounded-lg'></div>
  <div className='w-[200px] h-[200px] bg-Neutral-600 rounded-lg'></div>
  <div className='w-[200px] h-[200px] bg-Neutral-600 rounded-lg'></div>

  <div className='border-l-2 border-Neutral-600 h-[180px] flex justify-center items-center p-3'>
  <LiaDownloadSolid className='size-5 text-Neutral-1500' />

  </div>
</div>
</div> :""}
          <div className={`${imageList == true ? "col-span-12":"col-span-6" } `}>
            <label htmlFor={`title-${section.id}`} className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]'>Title*</label>
            <div className='mt-2 h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600 flex items-center'>
              <img src={title} alt="profile" />
              <input 
                type="text" 
                id={`title-${section.id}`}
                placeholder='Enter Type Documents' 
                value={section.title}
                onChange={(e) => handleTitleChange(section.id, e.target.value)}
                className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' 
              />
            </div>
          </div>
      
         {imageList ? "" : <div className='col-span-6'>
           
           {/* <FileUploadInput 
 label={"Documents*"} 
 image={image}
 onChange={(files) => handleDocumentUpload(section.id, files)}
 multiple={true}
/> */}

<FileUploadInputMultiple

label={"Documents*"} 
name="documents"
image={image}
multiple={true}
// onChange={(files) => console.log("Selected files:", files)}
onChange={(files) => handleDocumentUpload(section.id, files)}
/>
         </div>}
          
          <div className='col-span-6'>
            <CustomDatePicker 
              label={"Start Date*"} 
              placeholder={"Select Start Date"} 
              value={section.expiryDate1}
              onChange={(date, dateString) => handleDateChange(section.id, 'expiryDate1', date, dateString)}
            />
          </div>
          
          <div className='col-span-6'>
            <CustomDatePicker 
              label={"End Date*"} 
              placeholder={"Select End Date"} 
              value={section.expiryDate2}
              onChange={(date, dateString) => handleDateChange(section.id, 'expiryDate2', date, dateString)}
            />
          </div>
        </div>
      ))}
      
      {setButton && (
        <div className='col-span-12 flex justify-center items-center mt-6'>
          <button 
            type="button"
            onClick={addNewDocumentSection}
            className='bg-Primary-400 flex justify-center items-center gap-3 text-white p-3 border-Primary-400 border rounded-md font-[Poppins] font-normal text-[16px] leading-[100%] tracking-[0%]
 transition-colors'
          >
            <FiPlus className='size-5 text-white' />
           
            Add New Document
          </button>
        </div>
      )}
    </div>
  );
}
