import React, { useState, useMemo } from 'react';
import {
  AiOutlineEye,
  AiOutlineEdit,
  AiOutlineDelete
} from 'react-icons/ai';

import Pagination from './Pagination';

export default function ReusableTable({ columns = [], data = [] }) {
  const [filters, setFilters] = useState({
    timeWork: [],
    workstation: [],
    role: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filtering
  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const timeWorkMatch =
        filters.timeWork.length === 0 || filters.timeWork.includes(row.timeWork);
      const workstationMatch =
        filters.workstation.length === 0 || filters.workstation.includes(row.workstation);
      const roleMatch = filters.role.length === 0 || filters.role.includes(row.role);

      return timeWorkMatch && workstationMatch && roleMatch;
    });
  }, [data, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  return (
    <div className="flex">
      <div className="flex-1 flex flex-col">
        {/* Table */}
        <div className="flex-1 overflow-auto ">
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
            <table className="min-w-full table-auto">
              <thead className=" h-[60px]">
                <tr>
                  {columns.map((col, index) => (
                                      <th  key={index} className="!py-8 px-4 font-[poppins] font-normal text-[16px] leading-[100%] tracking-[0%] text-left  text-Neutral-600 capitalize border-b border-r">
                      {col.label}
                    </th>
                  ))}
                
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50 transition duration-150 ">
                      {columns.map((col, colIndex) => ( <>
                      
                      {col.key=="status" ?   <>
                        <td key={colIndex} className="!py-8 px-4 whitespace-nowrap border-b border-r  border-Neutral-600 font-[poppins] font-[400] text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500">
                        {/* {row[col.key] == "onTime" || row[col.key]=="Completed" ? <span className='bg-green-lite text-green-1600 rounded-[4px] p-2 px-6'>

{row[col.key]}
</span>:<span className='bg-danger-lite text-danger-1600 rounded-[4px] p-2 px-6'>

{row[col.key]}
</span>} */}

{row[col.key] === "onTime" || row[col.key] === "Completed" ? (
  <span className="bg-green-lite text-green-1600 rounded-[4px] p-2 px-6">
    {row[col.key]}
  </span>
) : row[col.key] === "To Do"  ? (
  <span className="bg-Primary-lite text-Primary-400 rounded-[4px] p-2 px-6">
    {row[col.key]}
  </span>
) : (
  <span className="bg-danger-lite text-danger-1600 rounded-[4px] p-2 px-6">
    {row[col.key]}
  </span>
)}

                          
                        </td>
                      </>  : <td key={colIndex} className="!py-8 px-4 whitespace-nowrap border-b border-r border-Neutral-600 font-[poppins] font-[400] text-[16px] leading-[100%] tracking-[0%] text-Neutral-1500">
                          {row[col.key]}
                        </td>}
                       
                      </>
                      ))}
                   
                    
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={columns.length + 1}
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
    </div>
  );
}
