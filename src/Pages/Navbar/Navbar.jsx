import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("الرئيسيه");

  const links = ["الرئيسيه", "الخدمات", "الفروع", "من نكون", "تواصل معنا"];

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="w-full  bg-white">
      {/* Top Bar */}
      <div className="h-[60px] flex justify-between items-center px-4 md:px-8 bg-white">
        <img src={logo} alt="logo" className="h-8 w-auto" />

        {/* Search Input - hidden on small screens */}
        {/* <div className="hidden md:block rounded-[8px] p-2 border border-Primary-400 relative w-[300px]">
          <input
            type="text"
            className="outline-none w-full font-[Poppins] placeholder:font-[Poppins] text-base leading-[100%] tracking-[0%] capitalize"
            placeholder="search"
          />
          <div className="absolute top-3 right-2">
            <CiSearch className="text-Primary-400 size-5" />
          </div>
        </div> */}

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-Primary-400 size-6" /> : <FaBars className="text-Primary-400 size-6" />}
          </button>
        </div>
      </div>

      {/* Second Navbar */}

        <div className="bg-[#E9AB3C1A]">
      {/* Desktop Links */}
      <div className="hidden md:flex h-[60px] justify-center items-center gap-5">
        {links.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => handleClick(item)}
            className={`px-4 py-2 rounded text-center font-[Poppins] text-base capitalize ${
              activeLink === item
                ? "bg-Primary-400 text-white"
                : "text-Primary-400 bg-transparent hover:bg-Primary-100"
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 py-4 px-4">
          {/* <div className="w-full">
            <input
              type="text"
              className="w-full border border-Primary-400 rounded-[8px] px-3 py-2 mb-2 font-[Poppins]"
              placeholder="search"
            />
          </div> */}

          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => handleClick(item)}
              className={`px-4 py-2 w-full text-center rounded font-[Poppins] text-base capitalize ${
                activeLink === item
                  ? "bg-Primary-400 text-white"
                  : "text-Primary-400 bg-transparent hover:bg-Primary-100"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}
