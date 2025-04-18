import React from 'react'
import ReusableTable from '../../../components/ReusableTable'
import { BsEyeSlash } from 'react-icons/bs';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

export default function EmployeeTaskStationDetails() {

    let columns = [
        { label: "Job tasks", key: "jobTasks" },
        { label: "Date", key: "date" },
        { label: "Time", key: "time" },
        { label: "Location", key: "location" },
        { label: "Image", key: "image" },
      ];
      
     let data = [
       
        {
            jobTasks: "task1",
          date: "July 01, 2024",
          time: "09:15 AM",
          location: " Hrs 1",
          image:<div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>  ,
        },
        {
            jobTasks: "task1",
          date: "July 01, 2024",
          time: "09:15 AM",
          location: " Hrs 1",
          image:<div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>  ,
        },
        {
            jobTasks: "task1",
          date: "July 01, 2024",
          time: "09:15 AM",
          location: " Hrs 1",
          image:<div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>  ,
        },
        {
            jobTasks: "task1",
          date: "July 01, 2024",
          time: "09:15 AM",
          location: " Hrs 1",
          image:<div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>  ,
        },
        {
            jobTasks: "task1",
          date: "July 01, 2024",
          time: "09:15 AM",
          location: " Hrs 1",
          image:<div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>  ,
        },
        {
            jobTasks: "task1",
          date: "July 01, 2024",
          time: "09:15 AM",
          location: " Hrs 1",
          image:<div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>  ,
        },
      
    
     
      ]
  return (
    <div>
      <ReusableTable columns={columns} action={false} data={data}/>
    </div>
  )
}
