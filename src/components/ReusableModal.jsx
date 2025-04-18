import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function ReusableModal({isModalOpen= false , applyFilters, filterOptions , handleFilterChange , tempFilters , closeModal , resetFilters}) {
  return (
    <div>
         {/* Filter Modal */}
         {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">Filter Employees</h2>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            
            <div className="p-4 max-h-[70vh] overflow-y-auto">
              {/* Time Work Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2 text-gray-700">Choose Time work</h3>
                <div className="space-y-2">
                  {filterOptions.timeWork.map((time, index) => (
                    <div key={index} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`time-${index}`} 
                        className="mr-2"
                        checked={tempFilters.timeWork.includes(time)}
                        onChange={() => handleFilterChange('timeWork', time)}
                      />
                      <label htmlFor={`time-${index}`}>{time}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Workstation Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2 text-gray-700">Branch Station Name</h3>
                <div className="space-y-2">
                  {filterOptions.workstation.map((station, index) => (
                    <div key={index} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`station-${index}`} 
                        className="mr-2"
                        checked={tempFilters.workstation.includes(station)}
                        onChange={() => handleFilterChange('workstation', station)}
                      />
                      <label htmlFor={`station-${index}`}>{station}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Role Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2 text-gray-700">Role</h3>
                <div className="space-y-2">
                  {filterOptions.role.map((role, index) => (
                    <div key={index} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`role-${index}`} 
                        className="mr-2"
                        checked={tempFilters.role.includes(role)}
                        onChange={() => handleFilterChange('role', role)}
                      />
                      <label htmlFor={`role-${index}`}>{role}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end p-4 border-t space-x-3">
              <button 
                onClick={resetFilters}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-150"
              >
                Reset
              </button>
              <button 
                onClick={closeModal}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-150"
              >
                Cancel
              </button>
              <button 
                onClick={applyFilters}
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-150"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
