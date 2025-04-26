


// import React from 'react';
// import storeIcon from "../../../assets/station/storenameicon.svg"
// import ReuseableInput from '../../../components/reusableInput';
// import FileUploadInput, { FileUpload_Input } from '../../../components/FileUpload_Input';
// import image from "../../../assets/table/gallery.png";
// import tabs from "../../../assets/station/tabs.svg"
// import { CustomDate_Picker } from '../../../components/DatePicker';



// export default function AddStationform2({ 
//   setBorder = false, 
// formik

// }) {

//   const handleFileUpload = (file) => {
//     console.log({ file });

//     formik?.setFieldValue("profilePic", file);
//   };
//   return (

//         <section
//       className={`pt-8 grid grid-cols-12 gap-6 ${
//         setBorder == true
//           ? "border border-Neutral-600 rounded-[12px] px-8 mx-3 pb-8"
//           : ""
//       } `}
//     >

//       <ReuseableInput col={6} icon={storeIcon} id={"store"} name={"storeName"} label={" Store name *"} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder={"Enter Store name"}  value={formik.values.value} />

//       {/* <ReuseableInput col={6} icon={storeIcon} id={"store"} name={"storeName"} label={" Store name *"} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder={"Enter Store name"}  value={formik.values.value} /> */}
//  <div className="col-span-6">
//         <FileUpload_Input
//           label={"Shop photo *"}
//           image={image}
//           onChange={handleFileUpload}
//         />
//         {/* {getErrorMessage("profilePic")} */}
//       </div>

//       <ReuseableInput col={12} icon={tabs} id={"discription"} name={"discription"} label={" Shop description *"} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder={"Enter Shop description"}  value={formik.values.value} />

//       <div className="col-span-6">
//         <FileUpload_Input
//           label={"Lease"}
//           image={image}
//           onChange={handleFileUpload}
//           placholder={"Upload Image"}
          
//         />
//         {/* {getErrorMessage("profilePic")} */}
//       </div>


// <div className='col-span-6 w-full'>
// <CustomDate_Picker/>
// </div>


//     </section>
  
//   );
// }








import React, { useState } from 'react';
import storeIcon from "../../../assets/station/storenameicon.svg";
import ReuseableInput from '../../../components/reusableInput';
import FileUploadInput, { FileUpload_Input } from '../../../components/FileUpload_Input';
import image from "../../../assets/table/gallery.png";
import tabs from "../../../assets/station/tabs.svg";
import { CustomDate_Picker } from '../../../components/DatePicker';
import { FiPlus } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

export default function AddStationform2({ 
  setBorder = false, 
  formik
}) {
  // State to keep track of additional fields
  const [additionalFields, setAdditionalFields] = useState([]);

  const handleFileUpload = (file) => {
    console.log({ file });
    formik?.setFieldValue("profilePic", file);
  };

  // Function to handle adding another field set
  const handleAddAnother = () => {
    const newId = additionalFields.length;
    setAdditionalFields([...additionalFields, { id: newId }]);
    
    // Initialize formik values for new fields if needed
    formik?.setFieldValue(`additionalStore_${newId}`, "");
    formik?.setFieldValue(`additionalDescription_${newId}`, "");
    formik?.setFieldValue(`additionalLease_${newId}`, null);
  };

  // Function to handle removing a field set
  const removeStore = (idToRemove) => {
    // Only remove if there's at least one field
    if (additionalFields.length > 0) {
      const updatedFields = additionalFields.filter(field => field.id !== idToRemove);
      setAdditionalFields(updatedFields);
      
      // You may want to clean up formik values here as well
      // formik?.setFieldValue(`additionalStore_${idToRemove}`, undefined);
      // formik?.setFieldValue(`additionalDescription_${idToRemove}`, undefined);
      // formik?.setFieldValue(`additionalLease_${idToRemove}`, undefined);
    }
  };

  return (
    <section
      className={`pt-8 grid grid-cols-12 gap-6 ${
        setBorder === true
          ? "border border-Neutral-600 rounded-[12px] px-8 mx-3 pb-8"
          : ""
      }`}
    >
      {/* Original Fields */}
      <ReuseableInput 
        col={6} 
        icon={storeIcon} 
        id={"store"} 
        name={"storeName"} 
        label={" Store name *"} 
        onBlur={formik.handleBlur} 
        onChange={formik.handleChange} 
        placeholder={"Enter Store name"}  
        value={formik.values.storeName} 
      />

      <div className="col-span-6">
        <FileUpload_Input
          label={"Shop photo *"}
          image={image}
          onChange={handleFileUpload}
        />
      </div>

      <ReuseableInput 
        col={12} 
        icon={tabs} 
        id={"discription"} 
        name={"discription"} 
        label={" Shop description *"} 
        onBlur={formik.handleBlur} 
        onChange={formik.handleChange} 
        placeholder={"Enter Shop description"}  
        value={formik.values.discription} 
      />

      <div className="col-span-6">
        <FileUpload_Input
          label={"Lease"}
          image={image}
          onChange={handleFileUpload}
          placholder={"Upload Image"}
        />
      </div>

      <div className='col-span-6 w-full'>
        <CustomDate_Picker />
      </div>

      {/* Additional Field Sets */}
      {additionalFields.map((field, index) => (
        <React.Fragment key={field.id}>
          <div className='col-span-12 flex justify-between items-center mb-2 border-t border-gray-200 pt-8'>
            <h3 className='font-[poppins] font-medium text-lg text-gray-700'>
              Store Set {index + 1}
            </h3>
            <button 
              type="button"
              onClick={() => removeStore(field.id)}
              className='flex justify-center items-center gap-3 text-Primary-400 p-3 border-Primary-400 border rounded-md font-[Poppins] font-normal text-[16px] leading-[100%] tracking-[0%] transition-colors'
            >
              <RiDeleteBinLine className='size-5 text-Primary-400' />
              Delete Store
            </button>
          </div>

          <ReuseableInput 
            col={6} 
            icon={storeIcon} 
            id={`additionalStore_${field.id}`} 
            name={`additionalStore_${field.id}`} 
            label={`Store name *`} 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            placeholder={"Enter Store name"}  
            value={formik.values[`additionalStore_${field.id}`]} 
          />

          <div className="col-span-6">
            <FileUpload_Input
              label={`Shop photo *`}
              image={image}
              onChange={(file) => formik?.setFieldValue(`additionalPhoto_${field.id}`, file)}
            />
          </div>

          <ReuseableInput 
            col={12} 
            icon={tabs} 
            id={`additionalDescription_${field.id}`} 
            name={`additionalDescription_${field.id}`} 
            label={`Shop description *`} 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            placeholder={"Enter Shop description"}  
            value={formik.values[`additionalDescription_${field.id}`]} 
          />

          <div className="col-span-6">
            <FileUpload_Input
              label={`Lease`}
              image={image}
              onChange={(file) => formik?.setFieldValue(`additionalLease_${field.id}`, file)}
              placholder={"Upload Image"}
            />
          </div>

          <div className='col-span-6 w-full'>
            <CustomDate_Picker 
              id={`additionalDate_${field.id}`}
              onChange={(date) => formik?.setFieldValue(`additionalDate_${field.id}`, date)} 
            />
          </div>
        </React.Fragment>
      ))}

      {/* Add Another Button */}
      <div className="col-span-12 flex justify-center mt-6">
        <button
          type="button"
          onClick={handleAddAnother}
          className="text-Primary-400 flex justify-center items-center gap-3  py-3 px-8 border-Primary-400 border rounded-md font-[Poppins] font-normal text-[16px] leading-[100%] tracking-[0%] transition-colors"
        >
         
          Add New Store
        </button>
      </div>
    </section>
  );
}