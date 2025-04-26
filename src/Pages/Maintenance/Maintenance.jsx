import React from 'react';
import ReusableTable from '../../components/ReusableTable';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

export default function Maintenance() {
  let columns = [
    { label: "Supplier Name", key: "jobTasks" },
    { label: "Work stations Name", key: "workName" },
    { label: "Status", key: "status" },

    { label: "Action", key: "action" },
  ];
  
  let data = [
    {
      jobTasks: "Plumbing Repair",
      workName: "July 01, 2024",
      status: "09:15 AM",

      action: <div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>,
    },
  
    {
      jobTasks: "Plumbing Repair",
      workName: "July 01, 2024",
      status: "09:15 AM",

      action: <div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>,
    },
  
    {
      jobTasks: "Plumbing Repair",
      workName: "July 01, 2024",
      status: "09:15 AM",

      action: <div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>,
    },
  
    {
      jobTasks: "Plumbing Repair",
      workName: "July 01, 2024",
      status: "09:15 AM",

      action: <div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>,
    },
  
    {
      jobTasks: "Plumbing Repair",
      workName: "July 01, 2024",
      status: "09:15 AM",

      action: <div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>,
    },
  
  ];

  return (
    <div className='w-[90%] mx-auto'>
      <div className='flex justify-between items-center my-8'>
        <p className="font-[poppins] font-semibold text-[24px] leading-[100%] tracking-[0] capitalize">
          Maintenance Tasks
        </p>
        <button className="bg-Primary-400 text-white px-4 py-2 rounded-lg flex items-center font-[poppins]">
          <FaPlus className="mr-2" />
          Add New Task
        </button>
      </div>
      <ReusableTable columns={columns} data={data} />
    </div>
  );
}

// import React from 'react'
// import ReusableTable from '../../components/ReusableTable';
// import { MdOutlineRemoveRedEye } from 'react-icons/md';

// export default function Maintenance() {
//      let columns = [
//          { label: "Job tasks", key: "jobTasks" },
//          { label: "Date", key: "date" },
//          { label: "Time", key: "time" },
//          { label: "Location", key: "location" },
//          { label: "Action", key: "action" },
//        ];
       
//       let data = [
        
//          {
//              jobTasks: "task1",
//            date: "July 01, 2024",
//            time: "09:15 AM",
//            location: " location",
//            action:<div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>  ,
//          },
//          {
//              jobTasks: "task1",
//            date: "July 01, 2024",
//            time: "09:15 AM",
//            location: " location",
//            action:<div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>  ,
//          },
//          {
//              jobTasks: "task1",
//            date: "July 01, 2024",
//            time: "09:15 AM",
//            location: " location",
//            action:<div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>  ,
//          },
//          {
//              jobTasks: "task1",
//            date: "July 01, 2024",
//            time: "09:15 AM",
//            location: " location",
//            action:<div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>  ,
//          },
//          {
//              jobTasks: "task1",
//            date: "July 01, 2024",
//            time: "09:15 AM",
//            location: " location",
//            action:<div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>  ,
//          },
//          {
//              jobTasks: "task1",
//            date: "July 01, 2024",
//            time: "09:15 AM",
//            location: " location",
//            action:<div className='w-full flex justify-center items-center'><MdOutlineRemoveRedEye /></div>  ,
//          },
       
     
      
//        ]
//    return (
//      <div className='w-[90%] mx-auto'>
//         <div className=' flex justify-between items-center my-8'>
//             <p  className="font-[poppins] font-semibold text-[24px] leading-[100%] tracking-[0] capitalize"
//             >Maintenance</p>
//             <p  className="font-[poppins] font-semibold text-[24px] leading-[100%] tracking-[0] capitalize"
//             >Maintenance</p>
            
//         </div>
//        <ReusableTable columns={columns} action={false} data={data}/>
//      </div>
//    )
// }
