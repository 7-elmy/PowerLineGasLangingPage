import React from "react";
import { Link } from "react-router-dom";

export default function SecondNavbar() {
  return (
    <div className="bg-Primary-lite h-[60px] flex justify-center items-center gap-3">
      <div className="w-[60%] flex justify-center items-center gap-5">
        <Link
          to={"/"}
          className="bg-Primary-400 text-white p-3 rounded text-center font-[Poppins] font-medium text-base leading-[100%] tracking-[0%] capitalize"
        >
          Home
        </Link>
        <Link
          to={"/"}
          className="bg-Primary-400 text-white p-3 rounded text-center font-[Poppins] font-medium text-base leading-[100%] tracking-[0%] capitalize"
        >
          Our Servies
        </Link>
        <Link
          to={"/"}
          className="bg-Primary-400 text-white p-3 rounded text-center font-[Poppins] font-medium text-base leading-[100%] tracking-[0%] capitalize"
        >
          Our Branches
        </Link>
        <Link
          to={"/"}
          className="bg-Primary-400 text-white p-3 rounded text-center font-[Poppins] font-medium text-base leading-[100%] tracking-[0%] capitalize"
        >
          About Us
        </Link>
        <Link
          to={"/"}
          className="bg-Primary-400 text-white p-3 rounded text-center font-[Poppins] font-medium text-base leading-[100%] tracking-[0%] capitalize"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
