import React from 'react'
import ReusableTable from '../../../components/ReusableTable'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';

export default function EmployeToDoListDetails() {
       let columns = [
            { label: "Task Name", key: "taskName" },
            { label: "Date received", key: "dateReceived" },
            { label: "Deadline ", key: "deadline" },
            { label: "Status", key: "status" },
            { label: "Action", key: "action" },
          ];
          
         let data = [
           
            {
                taskName: "task1",
              dateReceived: "July 01, 2024",
              deadline: "09:15 AM",
              status: "Completed",
              action:<div className='w-full flex justify-center items-center'>  <div className="flex space-x-2">
                                      <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="View">
                                        <AiOutlineEye size={18} />
                                      </button>
                                      <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Edit">
                                        <AiOutlineEdit size={18} />
                                      </button>
                                      <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Delete">
                                        <AiOutlineDelete size={18} />
                                      </button>
                                    </div></div>  ,
            },
            {
                taskName: "task1",
              dateReceived: "July 01, 2024",
              deadline: "09:15 AM",
              status: "Not Started",
              action:<div className='w-full flex justify-center items-center'>  <div className="flex space-x-2">
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="View">
                          <AiOutlineEye size={18} />
                        </button>
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Edit">
                          <AiOutlineEdit size={18} />
                        </button>
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Delete">
                          <AiOutlineDelete size={18} />
                        </button>
                      </div></div>  ,
            },
            {
                taskName: "task1",
              dateReceived: "July 01, 2024",
              deadline: "09:15 AM",
              status: "To Do",
              action:<div className='w-full flex justify-center items-center'>  <div className="flex space-x-2">
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="View">
                          <AiOutlineEye size={18} />
                        </button>
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Edit">
                          <AiOutlineEdit size={18} />
                        </button>
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Delete">
                          <AiOutlineDelete size={18} />
                        </button>
                      </div></div>  ,
            },
            {
                taskName: "task1",
              dateReceived: "July 01, 2024",
              deadline: "09:15 AM",
              status: "To Do",
              action:<div className='w-full flex justify-center items-center'>  <div className="flex space-x-2">
                                      <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="View">
                                        <AiOutlineEye size={18} />
                                      </button>
                                      <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Edit">
                                        <AiOutlineEdit size={18} />
                                      </button>
                                      <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Delete">
                                        <AiOutlineDelete size={18} />
                                      </button>
                                    </div></div>  ,
            },
            {
                taskName: "task1",
              dateReceived: "July 01, 2024",
              deadline: "09:15 AM",
              status: "To Do",
              action:<div className='w-full flex justify-center items-center'>  <div className="flex space-x-2">
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="View">
                          <AiOutlineEye size={18} />
                        </button>
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Edit">
                          <AiOutlineEdit size={18} />
                        </button>
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Delete">
                          <AiOutlineDelete size={18} />
                        </button>
                      </div></div>  ,
            },
            {
                taskName: "task1",
              dateReceived: "July 01, 2024",
              deadline: "09:15 AM",
              status: "To Do",
              action:<div className='w-full flex justify-center items-center'>  <div className="flex space-x-2">
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="View">
                          <AiOutlineEye size={18} />
                        </button>
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Edit">
                          <AiOutlineEdit size={18} />
                        </button>
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Delete">
                          <AiOutlineDelete size={18} />
                        </button>
                      </div></div>  ,
            },
          
        
         
          ]
  return (
    <div>
       <ReusableTable  action={false} columns={columns} data={data}/>
    </div>
  )
}
