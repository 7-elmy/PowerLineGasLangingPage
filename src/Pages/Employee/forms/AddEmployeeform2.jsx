
import React from 'react'
import { FaAddressCard } from 'react-icons/fa'
import position  from "../../../assets/table/position.png"
import image  from "../../../assets/table/gallery.png"
import money  from "../../../assets/table/tdesign_money.png"
import gasStation  from "../../../assets/table/Gas Station-26.png"
import calender from "../../../assets/table/🔽 Icon.png"
import FormWithDropdown from '../../../components/Gender'
import { MdAccessTimeFilled } from 'react-icons/md'
import { CustomDatePicker } from '../../../components/CustomPicker'
import CustomDateOrTimePicker from '../../../components/selectTime'
import CustomTimePicker from '../../../components/selectTime'
import { LiaDownloadSolid } from 'react-icons/lia'

const roles = ["67bd53a8c292360b3a0d94b3", "Customer", "Editor", "Viewer"];

export default function AddEmployeeform2({setBorder =false , formik , showEmployeeId=false }) {
    const handleDateChange = (date, dateString) => {
        console.log('Selected Date:', dateString);
        // Handle your date change logic here


        const hasError = (fieldName) => {
          return formik?.touched[fieldName] && formik?.errors[fieldName];
        };
      
        // Helper function to get error message
        const getErrorMessage = (fieldName) => {
          return hasError(fieldName) ? formik?.errors[fieldName] : "";
        };
      
        // Handler for custom date picker to update formik values
        const handleDateChange = (fieldName) => (date, dateString) => {
          console.log({fieldName});
          
          formik?.setFieldValue(fieldName, dateString);
          formik?.setFieldTouched(fieldName, true);
        };
      };
      const handleJoiningDateChange = (date, dateString) => {
        formik?.setFieldValue("joiningDate", dateString);
        
      };
      const handleresidenceExpiryDateChange =  (date, dateString) => {
        formik?.setFieldValue("residenceExpiryDate", dateString);
      
      };
    
  return (
    <div className={`pt-8 grid grid-cols-12 gap-6  ${setBorder == true ? "border border-Neutral-600 rounded-[12px] px-8 mx-3 pb-8": ""}` }>
      {showEmployeeId ==true ? <div className=' col-span-6'>
              <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Employees Id*</label>
              <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
              <FaAddressCard  className='size-6 text-Neutral-600'/>
                
              <input type="text" placeholder='Enter Employee Id'
               value={formik?.values?.nationalId}
               onChange={formik?.handleChange}
               onBlur={formik?.handleBlur}
               name='emplo'
               className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
            
              </div>
            </div>   :   ""}
        
            <div className={`${showEmployeeId == true? "col-span-6" : "col-span-12"} `}>
              
              {/* <FormWithDropdown icon={position} options={roles} placeholder={"Enter Postion Employee"} label={"Role*"}/> */}
              <FormWithDropdown 
              icon={position} options={roles} placeholder={"Enter Postion Employee"} label={"Role*"}

  value={formik?.values?.permissions}
  onChange={(value) => formik?.setFieldValue("permissions", value)}
/>
          
             
            </div>


              <div className=' col-span-6'>
                    <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Work stations Name*</label>
                    <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
                        <img src={gasStation}  alt="station" />
                      
                    <input name='station' type="text" placeholder='Enter Station Name' 
                     value={formik?.values?.station}
                     onChange={formik?.handleChange}
                     onBlur={formik?.handleBlur}
                    className='border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
                    </div>
                  </div>
                  <div className=' col-span-6'>
                    <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Salary*</label>
                    <div className='mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
                        <img src={money}  alt="money" />
                      
                    <input
                     value={formik?.values?.salary}
                     onChange={formik?.handleChange}
                     onBlur={formik?.handleBlur}  
                    name='salary'
                    type="text" placeholder='Enter Salary Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
                    </div>
                  </div>
                  {/*  */}
                  <div className='col-span-6'>
                    
                    <CustomTimePicker label={"Time work*"}  placeholder={"Select Time work"}   onChange={(value) => formik?.setFieldValue("timeWork", value)} />
              
                  </div>
                  <div className='col-span-6'>

                        <CustomDatePicker label={"Joining Date*"}  placeholder={"Select Joining Date"} onChange={handleJoiningDateChange}/>                      
                    
                  </div>
                  {/*  */}

                  <div className=' col-span-6 '>
                    <label htmlFor="" className='font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] '>Contract Duration*</label>
                    <div className=' relative  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center'>
                    <img src={calender} alt='total month'/>
                      
                    <input name='contractDuration' type="number"  value={formik?.values?.contractDuration}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur} placeholder='Enter Contract Duration Employee' className=' w-full border-l-2 ps-3 border-Neutral-600 p-[6px] outline-none focus:outline-none  font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]' />
                    <p className='bg-white absolute right-1 text-Neutral-1500 top-[10px]'>months</p>
                    </div>
                  </div>
                  <div className='col-span-6 '>

<CustomDatePicker label={"Residence expiry Date*"}  placeholder={"Select Residence expiry Date"} onChange={handleresidenceExpiryDateChange}/>                      

</div>


    </div>
  )
}

