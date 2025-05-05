import React from "react";
import logo from "../../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
export default function FirstNavbar() {
  return (
    <div className="h-[60px]   flex justify-between items-center  px-4">
      <img src={logo} alt="logo" />

      <div className="rounded-[8px] p-2 border border-Primary-400 relative w-[300px]">
        <input
          type="text"
          className="outline-none focus:outline-none  w-full font-[Poppins] placeholder:font-[Poppins] text-base leading-[100%] tracking-[0%] capitalize"
          placeholder="search"
        />
        <div className="absolute top-3 right-2">
          <CiSearch className="text-Primary-400 size-5" />
        </div>
      </div>

      <button className="flex justify-center items-center text-Primary-400 gap-2 font-[Cairo] border border-Primary-400 rounded-[4px] p-3 font-normal text-sm leading-[100%] tracking-[0%] text-right">
        <TbWorld className="text-Primary-400 size-5" />
        اللغة العربية
      </button>
    </div>
  );
}
