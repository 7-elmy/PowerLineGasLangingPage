import React, { useState, useMemo, useEffect } from 'react';
import { 
  AiOutlineSearch, 
  AiOutlineEye, 
  AiOutlineEdit, 
  AiOutlineDelete, 
  AiOutlinePlus, 
  AiOutlineClose
} from 'react-icons/ai';
import userprofile from "../../assets/sidbar/company logo.png";
import filter from "../../assets/table/filter.png"
import ReusableModal from '../../components/ReusableModal';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../Redux/Apis/apiRequest';

export default function AllEmployee() {

  let dispatch = useDispatch()
  let {employees}= useSelector(state=>state.api)
  // State for filters and pagination
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    timeWork: [],
    workstation: [],
    role: []
  });
  let navigate = useNavigate()
  const [tempFilters, setTempFilters] = useState({
    timeWork: [],
    workstation: [],
    role: []
  });
  console.log({employees});
  
  useEffect(()=>{
   dispatch(apiRequest({
       entity: "employees",
       url: "hr/getAllEmployees"
     }));
  }, [])

 
  const itemsPerPage = 5;

  // Available filter options
  const filterOptions = {
    timeWork: ["8 Am / 4 Pm", "12 Am / 8 Am", "12 Am / 12 Pm"],
    workstation: ["Station Name", "Branch A", "Branch B"],
    role: ["HR", "Ordinary employee", "Station official"]
  };

  // Handle filter checkbox changes
  const handleFilterChange = (category, value) => {
    setTempFilters(prev => {
      const updatedCategory = prev[category].includes(value) 
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value];
      
      return {
        ...prev,
        [category]: updatedCategory
      };
    });
  };

  // Apply filters
  const applyFilters = () => {
    setFilters(tempFilters);
    closeModal();
  };

  // Reset filters
  const resetFilters = () => {
    setTempFilters({
      timeWork: [],
      workstation: [],
      role: []
    });
  };

  // Open modal
  const openModal = () => {
    setTempFilters({...filters}); // Start with current filters
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Filter employees based on selected filters
  const filteredEmployees = useMemo(() => {
    return employees?.data?.result?.filter(employee => {
      // If no filters are selected for a category, don't filter by that category
      const timeWorkMatch = filters?.timeWork?.length === 0 || filters?.timeWork?.includes(employee?.timeWork);
      const workstationMatch = filters?.workstation?.length === 0 || filters?.workstation?.includes(employee?.workstation);
      const roleMatch = filters?.role?.length === 0 || filters?.role?.includes(employee?.role);
      
      return timeWorkMatch && workstationMatch && roleMatch;
    });
  }, [employees?.data?.result, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredEmployees?.length / itemsPerPage);
  const paginatedEmployees = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredEmployees?.slice(startIndex, endIndex);
  }, [filteredEmployees, currentPage]);

  // Generate pagination buttons
  const paginationButtons = () => {
    const buttons = [];
    
    // Previous button
    buttons.push(
      <button 
        key="prev" 
        className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    );
    
    // Page numbers
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            className={`w-8 h-8 flex items-center justify-center ${currentPage === i ? 'bg-orange-500 text-white' : 'border border-gray-300 hover:bg-gray-50'} rounded`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // First page
      buttons.push(
        <button
          key={1}
          className={`w-8 h-8 flex items-center justify-center ${currentPage === 1 ? 'bg-orange-500 text-white' : 'border border-gray-300 hover:bg-gray-50'} rounded`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>
      );
      
      // Middle pages
      if (currentPage > 3) {
        buttons.push(
          <button key="ellipsis1" className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded">
            ...
          </button>
        );
      }
      
      // Current page and surrounding pages
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1 && i !== totalPages) {
          buttons.push(
            <button
              key={i}
              className={`w-8 h-8 flex items-center justify-center ${currentPage === i ? 'bg-orange-500 text-white' : 'border border-gray-300 hover:bg-gray-50'} rounded`}
              onClick={() => setCurrentPage(i)}
            >
              {i}
            </button>
          );
        }
      }
      
      if (currentPage < totalPages - 2) {
        buttons.push(
          <button key="ellipsis2" className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded">
            ...
          </button>
        );
      }
      
      // Last page
      if (totalPages > 1) {
        buttons.push(
          <button
            key={totalPages}
            className={`w-8 h-8 flex items-center justify-center ${currentPage === totalPages ? 'bg-orange-500 text-white' : 'border border-gray-300 hover:bg-gray-50'} rounded`}
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    }
    
    // Next button
    buttons.push(
      <button 
        key="next" 
        className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 5L12.5 10L7.5 15" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    );
    
    return buttons;
  };

  // Check if any filters are active
  const hasActiveFilters = Object.values(filters).some(category => category.length > 0);

  return (
    <div className="flex  ">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
      
        <div className="bg-white p-5 flex justify-between items-center ">
          <div>
            <p className="font-poppins font-semibold text-2xl text-Neutral-1500">
              All Employees
            </p>
            {hasActiveFilters && (
              <p className="text-sm text-Neutral-600 mt-1">
                Filtered results
              </p>
            )}
          </div>
          <div className="flex items-center space-x-3">
           
            <button 
              onClick={openModal}
              className={`flex items-center px-4 py-2 border ${hasActiveFilters ? 'border-Primary-400 text-Primary-400' : 'border-Neutral-600 text-Neutral-1500'} rounded-md hover:bg-gray-50`}
            >
              <img src={filter} loading='lazy' alt="filter" />
              <span className="ml-2 font-poppins font-medium text-[16px] leading-[100%] tracking-[0%] text-Neutral-600">Filter</span>
            </button>
            
            <button onClick={()=> navigate("/main/add-employee")} className="bg-Primary-400 cursor-pointer text-white px-4 py-2 rounded-md flex items-center hover:bg-Primary-400 transition duration-150">
              <AiOutlinePlus className="mr-2" />
              <span>Add Employee</span>
            </button>
          </div>
        </div>

        
        <div className="flex-1 overflow-auto p-4">
          <div className="bg-white border border-Neutral-600 rounded-lg  overflow-hidden">
            <table className="min-w-full ">
              <thead className="   !h-[80px] ">
                <tr>
                  <th className="py-3 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
                    Employee Name
                  </th>
                  <th className="py-3 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
                    Employee ID
                  </th>
                  <th className="py-3 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
                    Station 
                  </th>
                  <th className="py-3 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
                    Role
                  </th>
                  <th className="py-3 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
                    Time work
                  </th>
                  <th className="py-3 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white ">
                {paginatedEmployees?.map((employee, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition duration-150 ">
                    <td className="py-4 px-4 whitespace-nowrap border-b border-r border-Neutral-600">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-100 overflow-hidden">
                          <img src={userprofile} alt={employee.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="ml-3">
                          <div className="font-poppins font-medium text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500">{employee.name}</div>
                          <div className="font-poppins font-normal text-[14px] leading-[100%] tracking-[0%] text-Neutral-600 py-2">{employee.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500 border-b border-r border-Neutral-600">
                      {employee.employeeCode}
                    </td>
                    <td className="py-4 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500 border-b border-r border-Neutral-600">
                      {employee.workstation || "Station A"}
                    </td>
                    <td className="py-4 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500 border-b border-r border-Neutral-600">
                      {employee.role || "HR"} 
                    </td>
                    <td className="py-4 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500  border-b border-r border-Neutral-600">
                      {employee.timeWork }
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm font-medium  border-b border-r border-Neutral-600">
                      <div className="flex space-x-2">
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="View">
                          <AiOutlineEye size={18} />
                        </button>
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Edit">
                          <AiOutlineEdit size={18} />
                        </button>
                        <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Delete">
                          <AiOutlineDelete size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {paginatedEmployees?.length  ===  0  && (
                  <tr>
                    <td colSpan="6" className="py-4 px-4 text-center text-Neutral-600">
                      No employees found matching the current filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        
        <div className="px-4 py-3 bg-white border-t border-gray-200 flex items-center justify-between">
        <div></div>
          <div className="flex space-x-1">
            {paginationButtons()}
          </div>
          
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{paginatedEmployees?.length}</span> of{" "}
            <span className="font-medium">{filteredEmployees?.length}</span> records
          </div>
        </div>
      </div>


      <ReusableModal applyFilters={applyFilters} resetFilters={resetFilters} closeModal={closeModal} isModalOpen={isModalOpen} filterOptions={filterOptions} handleFilterChange={handleFilterChange} tempFilters={tempFilters} />
    
    
    
    </div>
  );
}


// import React, { useState, useMemo, useEffect } from 'react';
// import { 
//   AiOutlineSearch, 
//   AiOutlineEye, 
//   AiOutlineEdit, 
//   AiOutlineDelete, 
//   AiOutlinePlus, 
//   AiOutlineClose
// } from 'react-icons/ai';
// import userprofile from "../../assets/sidbar/company logo.svg";
// import filter from "../../assets/table/filter.png"
// import ReusableModal from '../../components/ReusableModal';
// import { useNavigate } from 'react-router-dom';

// export default function AllEmployee() {
//   // Employee data - consider moving to a separate data file in a real app
//   const [employees] = useState([
//     { id: "12345678", name: "Sandesh Koshti", email: "sandeshkoshti23@gmail.com", workstation: "Station Name", role: "HR", timeWork: "8 Am / 4 Pm" },
//     { id: "14587592", name: "Sandesh Koshti", email: "sandeshkoshti23@gmail.com", workstation: "Station Name", role: "HR", timeWork: "8 Am / 4 Pm" },
//     { id: "54789645", name: "Sandesh Koshti", email: "sandeshkoshti23@gmail.com", workstation: "Station Name", role: "Ordinary employee", timeWork: "8 Am / 4 Pm" },
//     { id: "45876362", name: "Sandesh Koshti", email: "sandeshkoshti23@gmail.com", workstation: "Station Name", role: "Station official", timeWork: "8 Am / 4 Pm" },
//     { id: "48579658", name: "Sandesh Koshti", email: "sandeshkoshti23@gmail.com", workstation: "Station Name", role: "Station official", timeWork: "8 Am / 4 Pm" },
//     { id: "45896247", name: "Sandesh Koshti", email: "sandeshkoshti23@gmail.com", workstation: "Station Name", role: "Station official", timeWork: "8 Am / 4 Pm" },
//     { id: "45896247", name: "Sandesh Koshti", email: "sandeshkoshti23@gmail.com", workstation: "Station Name", role: "Ordinary employee", timeWork: "8 Am / 4 Pm" },
//   ]);

  

//   // State for filters and pagination
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     timeWork: [],
//     workstation: [],
//     role: []
//   });
//   let navigate = useNavigate()
//   const [tempFilters, setTempFilters] = useState({
//     timeWork: [],
//     workstation: [],
//     role: []
//   });
  


 
//   const itemsPerPage = 5;

//   // Available filter options
//   const filterOptions = {
//     timeWork: ["8 Am / 4 Pm", "12 Am / 8 Am", "12 Am / 12 Pm"],
//     workstation: ["Station Name", "Branch A", "Branch B"],
//     role: ["HR", "Ordinary employee", "Station official"]
//   };

//   // Handle filter checkbox changes
//   const handleFilterChange = (category, value) => {
//     setTempFilters(prev => {
//       const updatedCategory = prev[category].includes(value) 
//         ? prev[category].filter(item => item !== value)
//         : [...prev[category], value];
      
//       return {
//         ...prev,
//         [category]: updatedCategory
//       };
//     });
//   };

//   // Apply filters
//   const applyFilters = () => {
//     setFilters(tempFilters);
//     closeModal();
//   };

//   // Reset filters
//   const resetFilters = () => {
//     setTempFilters({
//       timeWork: [],
//       workstation: [],
//       role: []
//     });
//   };

//   // Open modal
//   const openModal = () => {
//     setTempFilters({...filters}); // Start with current filters
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Filter employees based on selected filters
//   const filteredEmployees = useMemo(() => {
//     return employees.filter(employee => {
//       // If no filters are selected for a category, don't filter by that category
//       const timeWorkMatch = filters.timeWork.length === 0 || filters.timeWork.includes(employee.timeWork);
//       const workstationMatch = filters.workstation.length === 0 || filters.workstation.includes(employee.workstation);
//       const roleMatch = filters.role.length === 0 || filters.role.includes(employee.role);
      
//       return timeWorkMatch && workstationMatch && roleMatch;
//     });
//   }, [employees, filters]);

//   // Pagination
//   const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
//   const paginatedEmployees = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return filteredEmployees.slice(startIndex, endIndex);
//   }, [filteredEmployees, currentPage]);

//   // Generate pagination buttons
//   const paginationButtons = () => {
//     const buttons = [];
    
//     // Previous button
//     buttons.push(
//       <button 
//         key="prev" 
//         className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
//         onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//         disabled={currentPage === 1}
//       >
//         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12.5 15L7.5 10L12.5 5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </button>
//     );
    
//     // Page numbers
//     if (totalPages <= 5) {
//       for (let i = 1; i <= totalPages; i++) {
//         buttons.push(
//           <button
//             key={i}
//             className={`w-8 h-8 flex items-center justify-center ${currentPage === i ? 'bg-orange-500 text-white' : 'border border-gray-300 hover:bg-gray-50'} rounded`}
//             onClick={() => setCurrentPage(i)}
//           >
//             {i}
//           </button>
//         );
//       }
//     } else {
//       // First page
//       buttons.push(
//         <button
//           key={1}
//           className={`w-8 h-8 flex items-center justify-center ${currentPage === 1 ? 'bg-orange-500 text-white' : 'border border-gray-300 hover:bg-gray-50'} rounded`}
//           onClick={() => setCurrentPage(1)}
//         >
//           1
//         </button>
//       );
      
//       // Middle pages
//       if (currentPage > 3) {
//         buttons.push(
//           <button key="ellipsis1" className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded">
//             ...
//           </button>
//         );
//       }
      
//       // Current page and surrounding pages
//       const startPage = Math.max(2, currentPage - 1);
//       const endPage = Math.min(totalPages - 1, currentPage + 1);
      
//       for (let i = startPage; i <= endPage; i++) {
//         if (i !== 1 && i !== totalPages) {
//           buttons.push(
//             <button
//               key={i}
//               className={`w-8 h-8 flex items-center justify-center ${currentPage === i ? 'bg-orange-500 text-white' : 'border border-gray-300 hover:bg-gray-50'} rounded`}
//               onClick={() => setCurrentPage(i)}
//             >
//               {i}
//             </button>
//           );
//         }
//       }
      
//       if (currentPage < totalPages - 2) {
//         buttons.push(
//           <button key="ellipsis2" className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded">
//             ...
//           </button>
//         );
//       }
      
//       // Last page
//       if (totalPages > 1) {
//         buttons.push(
//           <button
//             key={totalPages}
//             className={`w-8 h-8 flex items-center justify-center ${currentPage === totalPages ? 'bg-orange-500 text-white' : 'border border-gray-300 hover:bg-gray-50'} rounded`}
//             onClick={() => setCurrentPage(totalPages)}
//           >
//             {totalPages}
//           </button>
//         );
//       }
//     }
    
//     // Next button
//     buttons.push(
//       <button 
//         key="next" 
//         className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
//         onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//         disabled={currentPage === totalPages}
//       >
//         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M7.5 5L12.5 10L7.5 15" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </button>
//     );
    
//     return buttons;
//   };

//   // Check if any filters are active
//   const hasActiveFilters = Object.values(filters).some(category => category.length > 0);

//   return (
//     <div className="flex  ">
//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <div className="bg-white p-5 flex justify-between items-center ">
//           <div>
//             <p className="font-poppins font-semibold text-2xl text-Neutral-1500">
//               All Employees
//             </p>
//             {hasActiveFilters && (
//               <p className="text-sm text-Neutral-600 mt-1">
//                 Filtered results
//               </p>
//             )}
//           </div>
//           <div className="flex items-center space-x-3">
           
//             <button 
//               onClick={openModal}
//               className={`flex items-center px-4 py-2 border ${hasActiveFilters ? 'border-Primary-400 text-Primary-400' : 'border-Neutral-600 text-Neutral-1500'} rounded-md hover:bg-gray-50`}
//             >
//               <img src={filter} loading='lazy' alt="filter" />
//               <span className="ml-2 font-poppins font-medium text-[16px] leading-[100%] tracking-[0%] text-Neutral-600">Filter</span>
//             </button>
            
//             <button onClick={()=> navigate("/main/add-employee")} className="bg-Primary-400 cursor-pointer text-white px-4 py-2 rounded-md flex items-center hover:bg-Primary-400 transition duration-150">
//               <AiOutlinePlus className="mr-2" />
//               <span>Add Employee</span>
//             </button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="flex-1 overflow-auto p-4">
//           <div className="bg-white border border-Neutral-600 rounded-lg  overflow-hidden">
//             <table className="min-w-full ">
//               <thead className="   !h-[80px] ">
//                 <tr>
//                   <th className="py-3 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
//                     Employee Name
//                   </th>
//                   <th className="py-3 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
//                     Employee ID
//                   </th>
//                   <th className="py-3 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
//                     Workstation name
//                   </th>
//                   <th className="py-3 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
//                     Role
//                   </th>
//                   <th className="py-3 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
//                     Time work
//                   </th>
//                   <th className="py-3 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white ">
//                 {paginatedEmployees.map((employee, index) => (
//                   <tr key={index} className="hover:bg-gray-50 transition duration-150 ">
//                     <td className="py-4 px-4 whitespace-nowrap border-b border-r border-Neutral-600">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-100 overflow-hidden">
//                           <img src={userprofile} alt={employee.name} className="w-full h-full object-cover" />
//                         </div>
//                         <div className="ml-3">
//                           <div className="font-poppins font-medium text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500">{employee.name}</div>
//                           <div className="font-poppins font-normal text-[14px] leading-[100%] tracking-[0%] text-Neutral-600 py-2">{employee.email}</div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="py-4 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500 border-b border-r border-Neutral-600">
//                       {employee.id}
//                     </td>
//                     <td className="py-4 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500 border-b border-r border-Neutral-600">
//                       {employee.workstation}
//                     </td>
//                     <td className="py-4 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500 border-b border-r border-Neutral-600">
//                       {employee.role}
//                     </td>
//                     <td className="py-4 px-4 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500  border-b border-r border-Neutral-600">
//                       {employee.timeWork}
//                     </td>
//                     <td className="py-4 px-4 whitespace-nowrap text-sm font-medium  border-b border-r border-Neutral-600">
//                       <div className="flex space-x-2">
//                         <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="View">
//                           <AiOutlineEye size={18} />
//                         </button>
//                         <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Edit">
//                           <AiOutlineEdit size={18} />
//                         </button>
//                         <button className="text-Neutral-1500 hover:text-Neutral-600 transition duration-150" title="Delete">
//                           <AiOutlineDelete size={18} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//                 {paginatedEmployees.length === 0 && (
//                   <tr>
//                     <td colSpan="6" className="py-4 px-4 text-center text-Neutral-600">
//                       No employees found matching the current filters.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Pagination */}
//         <div className="px-4 py-3 bg-white border-t border-gray-200 flex items-center justify-between">
//         <div></div>
//           <div className="flex space-x-1">
//             {paginationButtons()}
//           </div>
          
//           <div className="text-sm text-gray-500">
//             Showing <span className="font-medium">{paginatedEmployees.length}</span> of{" "}
//             <span className="font-medium">{filteredEmployees.length}</span> records
//           </div>
//         </div>
//       </div>


//       <ReusableModal applyFilters={applyFilters} resetFilters={resetFilters} closeModal={closeModal} isModalOpen={isModalOpen} filterOptions={filterOptions} handleFilterChange={handleFilterChange} tempFilters={tempFilters} />
//     </div>
//   );
// }
