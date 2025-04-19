// import React, { useRef, useState } from 'react'
// import person from "../../../assets/table/profile.svg"
// import phone from "../../../assets/table/ic_outline-phone.png"
// import age from "../../../assets/table/age.png"
// import mail from "../../../assets/table/ic_outline-email.png"
// import password from "../../../assets/table/password.png"
// import gender from "../../../assets/table/icons8_gender.png"
// import nationality from "../../../assets/table/ic_round-travel-explore.png"
// import address from "../../../assets/table/tabler_address-book.png"
// import city from "../../../assets/table/mdi_city.png"
// import cardId from "../../../assets/table/cardID.png"
// import image from "../../../assets/table/gallery.png"
// import iBAN from "../.././../assets/table/supplier.png"

// import { CustomDatePicker } from '../../../components/CustomPicker'
// import FormWithDropdown from '../../../components/Gender'
// import FileUploadInput from '../../../components/FileUpload_Input'

// const genderOptions = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

// export default function AddEmployeeform1({setBorder= false ,formik}) {
//   const handleDateChange = (date, dateString) => {
//     console.log('Selected Date:', dateString);
//     // Handle your date change logic here
//   };

//   return (
//     <section className={`pt-8 grid grid-cols-12 gap-6 ${setBorder== true ? "border border-Neutral-600 rounded-[12px] px-8 mx-3 pb-8" :""} `}>
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Employees Name*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={person}  alt="profile" />
          
//         <input type="text" placeholder='Enter Employee Name' className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Mobile Number*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={phone}  alt="phone" />
          
//         <input type="text" placeholder='Enter Mobile Number Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       {/*row 2 */}
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Age*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={age}  alt="age" />
          
//         <input type="text" placeholder='Enter Employee Age' className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Email Address*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={mail}  alt="email" />
          
//         <input type="text" placeholder='Enter Email Address Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
//         </div>
//       </div>

//       {/* row 3 */}

//       <div className='p-2 col-span-12'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Password*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={password}  alt="password" />
          
//         <input type="Password" placeholder='Enter Password Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       {/* row 4 */}
// <div className=' col-span-6'>
// <CustomDatePicker 
//             onChange={handleDateChange}
//             label="Date of Birth*"
//             placeholder="Select date"
//           />
//       </div>

// <div className=' col-span-6'>
//       <FormWithDropdown icon={gender} options={genderOptions} label={ "Gender*"}/>

// </div>

// {/* row 5 */}

// <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Nationality*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={nationality}  alt="nationality" />
          
//         <input type="text" placeholder='Enter Employee Nationality' className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Address*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={address}  alt="address" />
          
//         <input type="text" placeholder='Enter Address Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
//         </div>
//       </div>

//       {/* row 6 */}
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Nationality*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={nationality}  alt="nationality" />
          
//         <input type="text" placeholder='Enter Employee Nationality' className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Address*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={address}  alt="address" />
          
//         <input type="text" placeholder='Enter Address Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       {/* row 7 */}
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Nationality*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={city}  alt="nationality" />
          
//         <input type="text" placeholder='Enter Employee City' className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       <div className='col-span-6'>
//         <FileUploadInput label={"Image*"} image={image} />
//       </div>
// {/* row 8 */}
//       <div className='p-2 col-span-12'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>National Id*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={cardId}  alt="cardId" />
          
//         <input type="number" placeholder='Enter National Id Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
//         </div>
//       </div>

//         {/* row 9 */}
//         <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>SWIFT Code*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={iBAN}  alt="IBAN" />
          
//         <input type="text" placeholder='Enter Employee Nationality' className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>IBAN*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={iBAN}  alt="IBAN" />
          
//         <input type="text" placeholder='Enter Address Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//     </section>
//   )
// }

import React, { useState } from 'react'
import person from "../../../assets/table/profile.svg"
import phone from "../../../assets/table/ic_outline-phone.png"
import age from "../../../assets/table/age.png"
import mail from "../../../assets/table/ic_outline-email.png"
import password from "../../../assets/table/password.png"
import gender from "../../../assets/table/icons8_gender.png"
import nationality from "../../../assets/table/ic_round-travel-explore.png"
import address from "../../../assets/table/tabler_address-book.png"
import city from "../../../assets/table/mdi_city.png"
import cardId from "../../../assets/table/cardID.png"
import image from "../../../assets/table/gallery.png"
import iBAN from "../.././../assets/table/supplier.png"

import { CustomDatePicker } from '../../../components/CustomPicker'
import FormWithDropdown from '../../../components/Gender'
import FileUploadInput from '../../../components/FileUpload_Input'

const genderOptions = ['male', 'female', "other"];

export default function AddEmployeeform1({setBorder= false, formik}) {
  let [selectGender , setSelectGender] = useState("")
  const handleDateChange = (date, dateString) => {
    formik?.setFieldValue('dateOfBirth', dateString);
  };



  const handleFileUpload = (file) => {
    console.log({file});
    
    formik?.setFieldValue('profilePic', file);
  };

  // Helper function to show error messages
  const getErrorMessage = (fieldName) => {
    return formik?.touched[fieldName] && formik?.errors[fieldName] ? (
      <div className="text-red-500 text-xs mt-1">{formik?.errors[fieldName]}</div>
    ) : null;
  };

  return (
    <section className={`pt-8 grid grid-cols-12 gap-6 ${setBorder== true ? "border border-Neutral-600 rounded-[12px] px-8 mx-3 pb-8" :""} `}>
      <div className=' col-span-6'>
        <label htmlFor="name" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Employees Name*</label>
        <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
            <img src={person} alt="profile" />
          
        <input 
          type="text" 
          id="name"
          name="name"
          placeholder='Enter Employee Name'
          value={formik?.values?.name}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal  text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' 
        />
        </div>
        {getErrorMessage('name')}
      </div>
      <div className=' col-span-6'>
        <label htmlFor="phone" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Mobile Number*</label>
        <div className='mt-2  relative h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
            <img src={phone} alt="phone" />
          
        <input 
          type="number" 
          id="phone"
          name="phone"
          placeholder='Enter Mobile Number Employee'
          value={formik?.values?.phone}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' 
        />
        <div className='bg-white w-7 h-7  absolute top-3 right-2'></div>
        </div>
        {getErrorMessage('phone')}
      </div>
      {/*row 2 */}
      <div className='col-span-6'>
        <label htmlFor="age" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Age*</label>
        <div className='mt-2  relative h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
            <img src={age}  alt="age" />
          
        <input 
          type="number" 
          id="age"
          name="age"
          placeholder='Enter Employee Age'
          value={formik?.values?.age}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' 
        />
        <div className='bg-white w-7 h-7  absolute top-3 right-2'></div>
        </div>
        {getErrorMessage('age')}
      </div>
      <div className='col-span-6'>
        <label htmlFor="email" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Email Address*</label>
        <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
            <img src={mail}  alt="email" />
          
        <input 
          type="email"
          id="email"
          name="email"
          placeholder='Enter Email Address Employee'
          value={formik?.values?.email}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' 
        />
        </div>
        {getErrorMessage('email')}
      </div>

      {/* row 3 */}
      <div className=' col-span-12'>
        <label htmlFor="password" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Password*</label>
        <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
            <img src={password}  alt="password" />
          
        <input 
          type="password"
          id="password"
          name="password"
          placeholder='Enter Password Employee'
          value={formik?.values?.password}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' 
        />
        </div>
        {getErrorMessage('password')}
      </div>
      {/* row 4 */}
      <div className='col-span-6'>
        <CustomDatePicker 
          onChange={handleDateChange}
          label="Date of Birth*"
          placeholder="Select date"
          value={formik?.values?.dateOfBirth}
          
        />
        {getErrorMessage('dateOfBirth')}
      </div>

      <div className='col-span-6'>
     
      <FormWithDropdown 
  icon={gender} 
  options={genderOptions} 
  label="Gender*"
  value={formik?.values?.gender}
  onChange={(value) => formik?.setFieldValue("gender", value)}
/>
        {getErrorMessage('gender')}
      </div>


      {/* row 5 */}
      <div className=' col-span-6'>
        <label htmlFor="nationality" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Nationality*</label>
        <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
            <img src={nationality}  alt="nationality" />
          
        <input 
          type="text"
          id="nationality"
          name="nationality"
          placeholder='Enter Employee Nationality'
          value={formik?.values?.nationality}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' 
        />
        </div>
        {getErrorMessage('nationality')}
      </div>
      <div className=' col-span-6'>
        <label htmlFor="address" className='font-[poppins] font-medium   placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Address*</label>
        <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
            <img src={address}  alt="address" />
          
        <input 
          type="text"
          id="address"
          name="address"
          placeholder='Enter Address Employee'
          value={formik?.values?.address}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' 
        />
        </div>
        {getErrorMessage('address')}
      </div>

      {/* row 6 - City field (Changed duplicated fields from the original) */}
      <div className=' col-span-6'>
        <label htmlFor="city" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>City*</label>
        <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
            <img src={city}  alt="city" />
          
        <input 
          type="text"
          id="city"
          name="city"
          placeholder='Enter Employee City'
          value={formik?.values?.city}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' 
        />
        </div>
        {getErrorMessage('city')}
      </div>
      <div className='col-span-6'>
        <FileUploadInput 
          label={"Image*"} 
          image={image}
          onChange={handleFileUpload} 
        />
        {getErrorMessage('profilePic')}
      </div>

      {/* row 8 */}
      <div className=' col-span-12'>
        <label htmlFor="nationalId" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>National Id*</label>
        <div className='mt-2 relative  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
            <img src={cardId}  alt="cardId" />
          
        <input 
          type="number"
          id="nationalId"
          name="nationalId"
          placeholder='Enter National Id Employee'
          value={formik?.values?.nationalId}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' 
        />
        <div className='bg-white w-7 h-7  absolute top-3 right-2'></div>
        </div>
        {getErrorMessage('nationalId')}
      </div>

      {/* row 9 */}
      <div className=' col-span-6'>
        <label htmlFor="swiftCode" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>SWIFT Code*</label>
        <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
            <img src={iBAN}  alt="IBAN" />
          
        <input 
          type="text"
          id="swiftCode"
          name="swiftCode"
          placeholder='Enter Swift Code'
          value={formik?.values?.swiftCode}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' 
        />
        </div>
        {getErrorMessage('swiftCode')}
      </div>
      <div className=' col-span-6'>
        <label htmlFor="IBAN" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>IBAN*</label>
        <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
            <img src={iBAN}  alt="IBAN" />
          
        <input 
          type="text"
          id="IBAN"
          name="IBAN"
          placeholder='Enter IBAN'
          value={formik?.values?.IBAN}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' 
        />
        </div>
        {getErrorMessage('IBAN')}
      </div>
    </section>
  )
}