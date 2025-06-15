import React, { useState } from "react";
import map from "../../assets/map.png"; // الصورة الافتراضية للخريطة
import { IoCallOutline, IoLocationOutline, IoMailOutline, IoAdd, IoRemove } from "react-icons/io5";
import branchesData from "./branches.json"; // ملف الـ JSON اللي فيه بيانات الفروع

export default function Network() {
  const [currentPage, setCurrentPage] = useState(1);
  const branchesPerPage = 4;

  // حساب الـ pagination
  const totalPages = Math.ceil(branchesData.length / branchesPerPage);
  const startIndex = (currentPage - 1) * branchesPerPage;
  const currentBranches = branchesData.slice(startIndex, startIndex + branchesPerPage);

  // التحكم في تغيير الصفحة
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // فتح الـ location_url في نافذة جديدة
  const handleLocationClick = (url) => {
    if (url && url.startsWith("http")) {
      window.open(url, "_blank");
    } else if (url && url.includes("N") && url.includes("E")) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(url)}`, "_blank");
    }
  };

  return (
    <div id="الفروع" className="my-8 border-b border-t border-Neutral-600 py-12 w-[90%] mx-auto">
      {/* العنوان */}
      <h1 className="font-poppins py-4 font-semibold text-[36px] sm:text-[48px] leading-[100%] tracking-[0%] text-center capitalize">
        <span className="text-Primary-400">مواقعنا</span>
      </h1>

      {/* عرض الفروع */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {currentBranches.map((branch) => (
          <div
            key={branch.id}
            className="flex flex-col p-4 border border-Neutral-600 rounded-md bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            {/* التفاصيل */}
            <div className="space-y-4 flex-grow">
              <p className="font-poppins font-bold text-[18px] leading-[100%] tracking-[0%] capitalize">
                {branch.name}
              </p>
              <p className="text-Neutral-600 text-[14px] py-2">
                {branch.short_name || "لا يوجد وصف متاح"}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <IoMailOutline className="text-Primary-400 size-5" />
                  <span className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0%]">
                    info@powerlinegaz.sa
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IoCallOutline className="text-Primary-400 size-5" />
                  <span className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0%]">
                    920020132
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IoLocationOutline className="text-Primary-400 size-5" />
                  <span className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0%]">
                    {branch.name}
                  </span>
                </div>
              </div>
            </div>

            {/* الصورة */}
            <div className="mt-4">
              <img
                src={map}
                alt={`${branch.name} map`}
                className="w-full h-40 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleLocationClick(branch.location_url)}
              />
            </div>

            {/* الزر */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => handleLocationClick(branch.location_url)}
                className="bg-Primary-400 text-white p-3 rounded w-36 hover:bg-Primary-500 transition-transform transform hover:scale-105"
              >
                الموقع
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* الـ Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex justify-center items-center rounded-full transition-transform transform hover:scale-105 ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-Primary-400 text-white hover:bg-Primary-500"
            }`}
        >
          <IoRemove className="size-6" />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`w-10 h-10 flex justify-center items-center rounded-full transition-transform transform hover:scale-105 ${currentPage === index + 1 ? "bg-Primary-400 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex justify-center items-center rounded-full transition-transform transform hover:scale-105 ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-Primary-400 text-white hover:bg-Primary-500"
            }`}
        >
          <IoAdd className="size-6" />
        </button>
      </div>
    </div>
  );
}