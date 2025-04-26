import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function WorkStation() {
  let navigate = useNavigate();
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <p className="font-[Poppins] font-semibold text-[24px] leading-[100%] tracking-[0%] text-Neutral-1500">
          stations
        </p>
        <button
          type="button"
          onClick={() => navigate("/main/add-station")}
          className="bg-Primary-400 flex  justify-center items-center gap-3 text-white p-3 border-Primary-400 border rounded-md font-[Poppins] font-medium text-[16px] leading-[100%] tracking-[0%] capitalize transition-colors"
        >
          <FiPlus className="size-5 text-white" />
          Add New station
        </button>
      </div>

      <PowerLineGas />
    </div>
  );
}

// Mock data for stations
const mockStations = [
  {
    id: 1,
    name: "Station Name",
    employeeCount: 14,
    employees: [
      {
        id: 1,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 2,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 3,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 4,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Station Name",
    employeeCount: 14,
    employees: [
      {
        id: 5,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 6,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 7,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 8,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Station Name",
    employeeCount: 14,
    employees: [
      {
        id: 9,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 10,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 11,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 12,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Station Name",
    employeeCount: 14,
    employees: [
      {
        id: 13,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 14,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 15,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 16,
        name: "Darrell Steward",
        title: "Sr. Sales Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    ],
  },
  // Add more stations if needed for pagination
];

// Employee component
const EmployeeItem = ({ employee }) => {
  return (
    <div className="flex justify-between items-center py-3 px-4 border-b border-gray-200 hover:bg-gray-50">
      <div className="flex items-center">
        <img
          src={employee.avatar}
          alt={employee.name}
          className="w-8 h-8 rounded-full mr-3 object-cover"
        />
        <div>
          <p className="font-medium text-Neutral-1500">{employee.name}</p>
          <p className="text-sm text-Neutral-600">{employee.title}</p>
        </div>
      </div>
      <button className="text-Neutral-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

// Station Card component
const StationCard = ({ station }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <div>
          <h2 className="text-lg font-medium text-gray-800">{station.name}</h2>
          <p className="text-sm text-gray-500">
            {station.employeeCount} Employees
          </p>
        </div>
        <button className="text-Primary-400 text-sm font-medium underline">
          View All
        </button>
      </div>
      <div>
        {station.employees.map((employee) => (
          <EmployeeItem key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

// Pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 flex items-center justify-center rounded ${
            currentPage === page
              ? "bg-Primary-400 text-white"
              : "border border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          {String(page).padStart(2, "0")}
        </button>
      ))}

      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

// Main component
const PowerLineGas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // Based on Figma showing 4 pages

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-6 font-['Poppins']">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {mockStations.map((station) => (
          <StationCard key={station.id} station={station} />
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div></div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <div className="mt-4 text-center text-sm text-gray-500">
          Showing 1 to 4 out of 5 records
        </div>
      </div>
    </div>
  );
};
