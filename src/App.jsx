import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import Main from './Layout/Main.Layout'
import AllEmployee from './Pages/Employee/AllEmployee'
import AddEmployee from './Pages/Employee/AddEmployee'
import EmployeeDetails from './Pages/Employee/EmployeeDetails/EmployeeDetails'
import EmployeeProfileDetails from './Pages/Employee/EmployeeDetails/EmployeeProfileDetails'
import EmployeeJobInformationDetails from './Pages/Employee/EmployeeDetails/EmployeeJobInformationDetails'
import EmployeeDocumentDetails from './Pages/Employee/EmployeeDetails/EmployeeDocumentDetails'
import EmployeeAttendenceDetails from './Pages/Employee/EmployeeDetails/EmployeeAttendenceDetails'
import EmployeeTaskStationDetails from './Pages/Employee/EmployeeDetails/EmployeeTaskStationDetails'
import EmployeToDoListDetails from './Pages/Employee/EmployeeDetails/EmployeeToDoListDetails'
function App() {
  const router = createBrowserRouter([
    {index:true , element:<Login/>},
    {path:"/main/" , element:<Main/> , children:[
      {index:true , element:<Dashboard/>},
      {path:"all-employee" , element:<AllEmployee/>},
      {path:"add-employee" , element:<AddEmployee/>},
      {path:"all-employee/details/" , element:<EmployeeDetails/> , children:[
        {path:"id" , element:<EmployeeProfileDetails/>},
        {path:"id/jobInformation" , element:<EmployeeJobInformationDetails/>},
        {path:"id/Document" , element:<EmployeeDocumentDetails/>},
        {path:"id/attendence" , element:<EmployeeAttendenceDetails/>},
        {path:"id/tasks" , element:<EmployeeTaskStationDetails/>},
        {path:"id/toDoList" , element:<EmployeToDoListDetails/>}

      ]}

    ]}
  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
