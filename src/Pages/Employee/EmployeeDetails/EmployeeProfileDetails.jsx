import React, { useRef, useState } from 'react'
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
import AddEmployeeform1 from '../forms/AddEmployeeform1'

const genderOptions = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

export default function EmployeeProfileDetails() {
  const handleDateChange = (date, dateString) => {
    console.log('Selected Date:', dateString);
    // Handle your date change logic here
  };

  return (
//     <section className='pt-8 grid grid-cols-12 gap-6  border border-Neutral-1500 rounded-[12px] px-8 mx-3 pb-8'>
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-poppins font-medium text-[16px] leading-[100%] tracking-[0] '>Employees Name*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={person}  alt="profile" />
          
//         <input type="text" placeholder='Enter Employee Name' className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-poppins font-normal text-[16px] leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-poppins font-medium text-[16px] leading-[100%] tracking-[0] '>Mobile Number*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={phone}  alt="phone" />
          
//         <input type="text" placeholder='Enter Mobile Number Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-poppins font-normal text-[16px] leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       {/*row 2 */}
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-poppins font-medium text-[16px] leading-[100%] tracking-[0] '>Age*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={age}  alt="age" />
          
//         <input type="text" placeholder='Enter Employee Age' className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-poppins font-normal text-[16px] leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-poppins font-medium text-[16px] leading-[100%] tracking-[0] '>Email Address*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={mail}  alt="email" />
          
//         <input type="text" placeholder='Enter Email Address Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-poppins font-normal text-[16px] leading-[100%] tracking-[0]' />
//         </div>
//       </div>

//       {/* row 3 */}

//       <div className='p-2 col-span-12'>
//         <label htmlFor="" className='font-poppins font-medium text-[16px] leading-[100%] tracking-[0] '>Password*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={password}  alt="password" />
          
//         <input type="Password" placeholder='Enter Password Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-poppins font-normal text-[16px] leading-[100%] tracking-[0]' />
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
//         <label htmlFor="" className='font-poppins font-medium text-[16px] leading-[100%] tracking-[0] '>Nationality*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={nationality}  alt="nationality" />
          
//         <input type="text" placeholder='Enter Employee Nationality' className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-poppins font-normal text-[16px] leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-poppins font-medium text-[16px] leading-[100%] tracking-[0] '>Address*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={address}  alt="address" />
          
//         <input type="text" placeholder='Enter Address Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-poppins font-normal text-[16px] leading-[100%] tracking-[0]' />
//         </div>
//       </div>

//       {/* row 6 */}
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-poppins font-medium text-[16px] leading-[100%] tracking-[0] '>Nationality*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={nationality}  alt="nationality" />
          
//         <input type="text" placeholder='Enter Employee Nationality' className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-poppins font-normal text-[16px] leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-poppins font-medium text-[16px] leading-[100%] tracking-[0] '>Address*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={address}  alt="address" />
          
//         <input type="text" placeholder='Enter Address Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-poppins font-normal text-[16px] leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       {/* row 7 */}
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-poppins font-medium text-[16px] leading-[100%] tracking-[0] '>Nationality*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={city}  alt="nationality" />
          
//         <input type="text" placeholder='Enter Employee City' className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-poppins font-normal text-[16px] leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       <div className='col-span-6'>
//         <FileUploadInput label={"Image*"} image={image} />
//       </div>
// {/* row 8 */}
//       <div className='p-2 col-span-12'>
//         <label htmlFor="" className='font-poppins font-medium text-[16px] leading-[100%] tracking-[0] '>National Id*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={cardId}  alt="cardId" />
          
//         <input type="number" placeholder='Enter National Id Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-poppins font-normal text-[16px] leading-[100%] tracking-[0]' />
//         </div>
//       </div>

//         {/* row 9 */}
//         <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-poppins font-medium text-[16px] leading-[100%] tracking-[0] '>SWIFT Code*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={iBAN}  alt="IBAN" />
          
//         <input type="text" placeholder='Enter Employee Nationality' className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-poppins font-normal text-[16px] leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//       <div className='p-2 col-span-6'>
//         <label htmlFor="" className='font-poppins font-medium text-[16px] leading-[100%] tracking-[0] '>IBAN*</label>
//         <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
//             <img src={iBAN}  alt="IBAN" />
          
//         <input type="text" placeholder='Enter Address Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-poppins font-normal text-[16px] leading-[100%] tracking-[0]' />
//         </div>
//       </div>
//     </section>
<section>
    <AddEmployeeform1 setBorder={true}/>
</section>
  )
}
