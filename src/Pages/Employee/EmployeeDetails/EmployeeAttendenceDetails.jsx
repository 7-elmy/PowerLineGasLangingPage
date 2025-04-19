import React from 'react'
import ReusableTable from '../../../components/ReusableTable'
import { data } from 'react-router-dom';

export default function EmployeeAttendenceDetails() {
 let columns = [
    { label: "Date", key: "date" },
    { label: "Check In", key: "checkin" },
    { label: "Check Out", key: "checkout" },
    { label: "Working Hours", key: "workinghours" },
    { label: "Status", key: "status" },
  ];
  
 let data = [
    {
      date: "July 01, 2024",
      checkin: "09:15 AM",
      checkout: "09:30 PM",
      workinghours: "12:02 Hrs",
      status: "onTime",
    },
    {
      date: "July 01, 2024",
      checkin: "09:15 AM",
      checkout: "09:30 PM",
      workinghours: "12:02 Hrs",
      status: "Late",
    },
    {
      date: "July 01, 2024",
      checkin: "09:15 AM",
      checkout: "09:30 PM",
      workinghours: "12:02 Hrs",
      status: "onTime",
    },
    {
      date: "July 01, 2024",
      checkin: "09:15 AM",
      checkout: "09:30 PM",
      workinghours: "12:02 Hrs",
      status: "onTime",
    },

 
  ]
  
  return (
    <div>
       <ReusableTable columns={columns} data={data} action={false}/>
    </div>
  )
}

