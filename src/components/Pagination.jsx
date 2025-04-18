import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  paginatedData = [],
  filteredData = [],
}) {
  const renderButtons = () => {
    const buttons = [];

    // Previous button
    buttons.push(
      <button
        key="prev"
        className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="#374151"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );

    // Page buttons
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            className={`w-8 h-8 flex items-center justify-center ${
              currentPage === i
                ? "bg-orange-500 text-white"
                : "border border-gray-300 hover:bg-gray-50"
            } rounded`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      buttons.push(
        <button
          key={1}
          className={`w-8 h-8 flex items-center justify-center ${
            currentPage === 1
              ? "bg-orange-500 text-white"
              : "border border-gray-300 hover:bg-gray-50"
          } rounded`}
          onClick={() => onPageChange(1)}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        buttons.push(
          <span key="ellipsis1" className="w-8 h-8 flex items-center justify-center">
            ...
          </span>
        );
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        buttons.push(
          <button
            key={i}
            className={`w-8 h-8 flex items-center justify-center ${
              currentPage === i
                ? "bg-orange-500 text-white"
                : "border border-gray-300 hover:bg-gray-50"
            } rounded`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        buttons.push(
          <span key="ellipsis2" className="w-8 h-8 flex items-center justify-center">
            ...
          </span>
        );
      }

      buttons.push(
        <button
          key={totalPages}
          className={`w-8 h-8 flex items-center justify-center ${
            currentPage === totalPages
              ? "bg-orange-500 text-white"
              : "border border-gray-300 hover:bg-gray-50"
          } rounded`}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    buttons.push(
      <button
        key="next"
        className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M7.5 5L12.5 10L7.5 15"
            stroke="#374151"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );

    return buttons;
  };

  return (
    <div className="px-4 py-3 bg-white border-t border-gray-200 flex items-center justify-between">
      <div></div>

      <div className="flex space-x-1">{renderButtons()}</div>

      <div className="text-sm text-gray-500">
        Showing <span className="font-medium">{paginatedData.length}</span> of{" "}
        <span className="font-medium">{filteredData.length}</span> records
      </div>
    </div>
  );
}

// import React from "react";

// export default function Pagination({ currentPage, totalPages, onPageChange }) {
//   const renderButtons = () => {
//     const buttons = [];

//     // Previous button
//     buttons.push(
//       <button
//         key="prev"
//         className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
//         onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
//         disabled={currentPage === 1}
//       >
//         <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//           <path d="M12.5 15L7.5 10L12.5 5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </button>
//     );

//     // Page buttons logic
//     if (totalPages <= 5) {
//       for (let i = 1; i <= totalPages; i++) {
//         buttons.push(
//           <button
//             key={i}
//             className={`w-8 h-8 flex items-center justify-center ${
//               currentPage === i ? "bg-orange-500 text-white" : "border border-gray-300 hover:bg-gray-50"
//             } rounded`}
//             onClick={() => onPageChange(i)}
//           >
//             {i}
//           </button>
//         );
//       }
//     } else {
//       buttons.push(
//         <button
//           key={1}
//           className={`w-8 h-8 flex items-center justify-center ${
//             currentPage === 1 ? "bg-orange-500 text-white" : "border border-gray-300 hover:bg-gray-50"
//           } rounded`}
//           onClick={() => onPageChange(1)}
//         >
//           1
//         </button>
//       );

//       if (currentPage > 3) {
//         buttons.push(
//           <span key="ellipsis1" className="w-8 h-8 flex items-center justify-center">...</span>
//         );
//       }

//       const start = Math.max(2, currentPage - 1);
//       const end = Math.min(totalPages - 1, currentPage + 1);

//       for (let i = start; i <= end; i++) {
//         buttons.push(
//           <button
//             key={i}
//             className={`w-8 h-8 flex items-center justify-center ${
//               currentPage === i ? "bg-orange-500 text-white" : "border border-gray-300 hover:bg-gray-50"
//             } rounded`}
//             onClick={() => onPageChange(i)}
//           >
//             {i}
//           </button>
//         );
//       }

//       if (currentPage < totalPages - 2) {
//         buttons.push(
//           <span key="ellipsis2" className="w-8 h-8 flex items-center justify-center">...</span>
//         );
//       }

//       buttons.push(
//         <button
//           key={totalPages}
//           className={`w-8 h-8 flex items-center justify-center ${
//             currentPage === totalPages ? "bg-orange-500 text-white" : "border border-gray-300 hover:bg-gray-50"
//           } rounded`}
//           onClick={() => onPageChange(totalPages)}
//         >
//           {totalPages}
//         </button>
//       );
//     }

//     // Next button
//     buttons.push(
//       <button
//         key="next"
//         className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
//         onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
//         disabled={currentPage === totalPages}
//       >
//         <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//           <path d="M7.5 5L12.5 10L7.5 15" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </button>
//     );

//     return buttons;
//   };

//   return <div className="flex gap-1 mt-4 justify-center">{renderButtons()}</div>;
// }
