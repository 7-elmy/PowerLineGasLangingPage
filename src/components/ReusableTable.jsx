import React, { useState, useMemo, useEffect } from 'react';
import {
  AiOutlineEye,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineSearch,
  AiOutlineFilter
} from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import Pagination from './Pagination';

export default function ReusableTable({ columns = [], data = [], action = true }) {
  // Create initial filters based on columns
  const [filterValues, setFilterValues] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Initialize filters based on columns
  useEffect(() => {
    const initialFilters = {};
    columns.forEach(col => {
      if (col.key !== 'action') {
        initialFilters[col.key] = '';
      }
    });
    setFilterValues(initialFilters);
  }, [columns]);

  // Get unique values for each filter column
  const filterOptions = useMemo(() => {
    const options = {};
    
    columns.forEach(col => {
      if (col.key !== 'action') {
        const uniqueValues = [...new Set(data.map(item => item[col.key]))]
          .filter(Boolean)
          .sort();
        options[col.key] = uniqueValues;
      }
    });
    
    return options;
  }, [data, columns]);

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilterValues(prev => ({
      ...prev,
      [key]: value
    }));
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  // Reset all filters
  const resetFilters = () => {
    const resetValues = {};
    columns.forEach(col => {
      if (col.key !== 'action') {
        resetValues[col.key] = '';
      }
    });
    setFilterValues(resetValues);
    setSearchTerm('');
    setCurrentPage(1);
  };

  // Filtering logic
  const filteredData = useMemo(() => {
    return data.filter(row => {
      // Check if row matches all active filters
      const matchesFilters = Object.entries(filterValues).every(([key, value]) => {
        if (!value) return true; // Skip empty filters
        return String(row[key]).toLowerCase() === String(value).toLowerCase();
      });

      // Check if row matches search term across all searchable columns
      const matchesSearch = !searchTerm || columns.some(col => {
        if (col.key === 'action') return false;
        return row[col.key] && 
               String(row[col.key]).toLowerCase().includes(searchTerm.toLowerCase());
      });

      return matchesFilters && matchesSearch;
    });
  }, [data, filterValues, searchTerm, columns]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  return (
    <div className="flex flex-col">
      {/* Search and Filter Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 w-full border rounded-lg font-[poppins]"
          />
          <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 bg-Primary-400 text-white rounded-lg font-[poppins]"
          >
            <AiOutlineFilter className="mr-2" />
            Filters
            <FiChevronDown className="ml-2" />
          </button>
          
          {Object.values(filterValues).some(value => value !== '') && (
            <button 
              onClick={resetFilters}
              className="px-4 py-2 bg-danger-1600 text-white rounded-lg font-[poppins]"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>
      
      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white p-4 mb-4 border rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {columns.map((col, index) => (
              col.key !== 'action' && (
                <div key={index} className="flex flex-col">
                  <label className="mb-1 font-[poppins] text-sm text-Neutral-600">{col.label}</label>
                  <select
                    value={filterValues[col.key] || ''}
                    onChange={(e) => handleFilterChange(col.key, e.target.value)}
                    className="p-2 border rounded-md font-[poppins]"
                  >
                    <option value="">All</option>
                    {filterOptions[col.key]?.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-auto">
        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            <thead className="h-[60px]">
              <tr>
                {columns.map((col, index) => (
                  <th key={index} className="!py-8 px-4 font-[poppins] font-normal text-[16px] leading-[100%] tracking-[0%] text-left text-Neutral-600 capitalize border-b border-r">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50 transition duration-150">
                    {columns.map((col, colIndex) => (
                      <React.Fragment key={colIndex}>
                        {col.key === "status" ? (
                          <td className="!py-8 px-4 whitespace-nowrap border-b border-r border-Neutral-600 font-[poppins] font-[400] text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500">
                            {row[col.key] === "onTime" || row[col.key] === "Completed" ? (
                              <span className="bg-green-lite text-green-1600 rounded-[4px] p-2 px-6">
                                {row[col.key]}
                              </span>
                            ) : row[col.key] === "To Do" ? (
                              <span className="bg-Primary-lite text-Primary-400 rounded-[4px] p-2 px-6">
                                {row[col.key]}
                              </span>
                            ) : (
                              <span className="bg-danger-lite text-danger-1600 rounded-[4px] p-2 px-6">
                                {row[col.key]}
                              </span>
                            )}
                          </td>
                        ) : (
                          <td className="!py-8 px-4 whitespace-nowrap border-b border-r border-Neutral-600 font-[poppins] font-[400] text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500">
                            {row[col.key]}
                          </td>
                        )}
                      </React.Fragment>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="py-4 px-4 text-center text-gray-500"
                  >
                    No data found matching the current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
        paginatedData={paginatedData}
        filteredData={filteredData}
      />
    </div>
  );
}

// import React, { useState, useMemo } from 'react';
// import {
//   AiOutlineEye,
//   AiOutlineEdit,
//   AiOutlineDelete
// } from 'react-icons/ai';

// import Pagination from './Pagination';

// export default function ReusableTable({ columns = [], data = [] }) {
//   const [filters, setFilters] = useState({
//     timeWork: [],
//     workstation: [],
//     role: [],
//   });

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // Filtering
//   const filteredData = useMemo(() => {
//     return data.filter((row) => {
//       const timeWorkMatch =
//         filters.timeWork.length === 0 || filters.timeWork.includes(row.timeWork);
//       const workstationMatch =
//         filters.workstation.length === 0 || filters.workstation.includes(row.workstation);
//       const roleMatch = filters.role.length === 0 || filters.role.includes(row.role);

//       return timeWorkMatch && workstationMatch && roleMatch;
//     });
//   }, [data, filters]);

//   // Pagination
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   const paginatedData = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     return filteredData.slice(startIndex, startIndex + itemsPerPage);
//   }, [filteredData, currentPage]);

//   return (
//     <div className="flex">
//       <div className="flex-1 flex flex-col">
//         {/* Table */}
//         <div className="flex-1 overflow-auto ">
//           <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
//             <table className="min-w-full table-auto">
//               <thead className=" h-[60px]">
//                 <tr>
//                   {columns.map((col, index) => (
//                                       <th  key={index} className="!py-8 px-4 font-[poppins] font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
//                       {col.label}
//                     </th>
//                   ))}
                
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedData.length > 0 ? (
//                   paginatedData.map((row, rowIndex) => (
//                     <tr key={rowIndex} className="hover:bg-gray-50 transition duration-150 ">
//                       {columns.map((col, colIndex) => ( <>
                      
//                       {col.key=="status" ?   <>
//                         <td key={colIndex} className="!py-8 px-4 whitespace-nowrap border-b border-r  border-Neutral-600 font-[poppins] font-[400] text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500">
//                         {/* {row[col.key] == "onTime" || row[col.key]=="Completed" ? <span className='bg-green-lite text-green-1600 rounded-[4px] p-2 px-6'>

// {row[col.key]}
// </span>:<span className='bg-danger-lite text-danger-1600 rounded-[4px] p-2 px-6'>

// {row[col.key]}
// </span>} */}

// {row[col.key] === "onTime" || row[col.key] === "Completed" ? (
//   <span className="bg-green-lite text-green-1600 rounded-[4px] p-2 px-6">
//     {row[col.key]}
//   </span>
// ) : row[col.key] === "To Do"  ? (
//   <span className="bg-Primary-lite text-Primary-400 rounded-[4px] p-2 px-6">
//     {row[col.key]}
//   </span>
// ) : (
//   <span className="bg-danger-lite text-danger-1600 rounded-[4px] p-2 px-6">
//     {row[col.key]}
//   </span>
// )}

                          
//                         </td>
//                       </>  : <td key={colIndex} className="!py-8 px-4 whitespace-nowrap border-b border-r border-Neutral-600 font-[poppins] font-[400] text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500">
//                           {row[col.key]}
//                         </td>}
                       
//                       </>
//                       ))}
                   
                    
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td
//                       colSpan={columns.length + 1}
//                       className="py-4 px-4 text-center text-gray-500"
//                     >
//                       No data found matching the current filters.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Pagination */}
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={(page) => setCurrentPage(page)}
//           paginatedData={paginatedData}
//           filteredData={filteredData}
//         />
//       </div>
//     </div>
//   );
// }
