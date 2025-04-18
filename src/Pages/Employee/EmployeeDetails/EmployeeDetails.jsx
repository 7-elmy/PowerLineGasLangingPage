import React from 'react'
import { FaCalendarCheck, FaClipboardList } from 'react-icons/fa'
import { FiFileText, FiMail } from 'react-icons/fi'
import { IoMdPerson } from 'react-icons/io'
import { IoFolderOpen } from 'react-icons/io5'
import { MdOutlineBusinessCenter, MdTask } from 'react-icons/md'
import { Link, Outlet } from 'react-router-dom'
import BreadCrumb from '../../../components/Breadcrumb'
import image from "../../../assets/sidbar/Profile Image.png"
import bag from "../../../assets/table/briefcase 04.png"
import email from "../../../assets/table/gmail.png"
import { CiMail } from 'react-icons/ci'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
export default function EmployeeDetails() {
    const items = [
        {icon:<IoMdPerson /> , title:"Profile" , link:"/main/all-employee/details/id"},
        {icon:<IoFolderOpen /> , title:"Job information" , link:"/main/all-employee/details/id/jobInformation"},
        {icon:<FiFileText /> , title:"Document" , link:"/main/all-employee/details/id/document"},
        {icon:<FaCalendarCheck /> , title:"Attendance" , link:"/main/all-employee/details/id/attendence"},
        {icon:<MdTask />, title:"Tasks stations" , link:"/main/all-employee/details/id/tasks"},
        {icon:<FaClipboardList /> , title:"To do list" , link:"/main/all-employee/details/id/toDoList"},
    ]
  return (
    <section >
        <div className='p-8'>

        <BreadCrumb item1={"All Employee"} item2={"Ahmed Hossam"}/>
        <div className=' flex justify-between items-center '>
            <div className='flex  justify-center items-center gap-3'>
                <img src={image} alt="" />
                <div className='flex  gap-1 flex-col'>
                    <h1 className='font-[Poppins] font-semibold text-[24px] leading-[100%] tracking-[0%]'> Ahmed Hossam Mohamed</h1>
                    <p className='text-Neutral-1500 flex items-center gap-2 font-normal text-[16px] leading-[100%] tracking-[0%] font-[Poppins]'><img src={bag} alt="bag" /> Manager Station</p>
                    <p className='text-Neutral-1500 flex items-center gap-2 font-normal text-[16px] leading-[100%] tracking-[0%] font-[Poppins]'><img src={email} alt="bag" /> ahmdhsammhmd2@gmail.com</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <button className='flex items-center gap-2 font-[Poppins] font-normal text-[16px] leading-[16px] tracking-[0] text-white bg-Primary-400 rounded-[10px] p-3'> <AiOutlineEdit size={18} /> Edit Profile</button>
                <button className='flex items-center gap-2 font-[Poppins] font-normal text-[16px] leading-[16px] tracking-[0] border-Primary-400 border text-Primary-400 rounded-[10px] p-3'> <AiOutlineDelete size={18} /> Delete</button>
            </div>
        </div>
        <hr className='bg-Neutral-1500 text-Neutral-1500 my-3' />
        </div>
        <div className='flex gap-3 mt-3'>
            <div className='w-64  flex justify-center items-start  h-[calc(100vh-150px)] '>

                <div className=' rounded-[12px] border border-Primary-400 gap-[24px] p-4 '>
                    {items.map((item , index)=>(
                        <Link key={index} to={`${item.link}`} className='my-3 flex p-3 justify-start text-Primary-400 items-center gap-3 border border-Primary-400 rounded-[4px]'>
                            {item.icon}
                            <span>
                            {item.title}
                                </span>
                            
                            </Link>
                    ))}
                </div>

            </div>
            <div className='w-full !pb-8 '>
                <Outlet/>
            </div>

        </div>
      
    </section>
  )
}
