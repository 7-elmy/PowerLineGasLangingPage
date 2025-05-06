import React from "react";
import home from "../../assets/ImageHome.svg";
import icon from "../../assets/four.png";

export default function Home() {
  return (
    <div id="Home" className="grid grid-cols-12 gap-4 p-8 mt-8">
      <div className="col-span-12 md:col-span-6 my-3 flex flex-col justify-around ">
        <p className="font-[Poppins] font-medium text-center md:text-left text-[40px] md:text-[45px] leading-[120%] tracking-[0px]">
          Welcome to <span className="text-Primary-400 animate-pulse">Power Line Gas</span>{" "}
          Petroleum services that suit you
        </p>
        <p className="font-inter font-normal text-[18px] leading-[150%] tracking-[0px] text-Neutral-600 my-6">
          Lorem ipsum dolor sit amet consectetur. Senectus est lectus phasellus
          sagittis. Non enim at consectetur a potenti adipiscing at. Maecenas
          porta vitae eget neque aliquet gravida sed sit. Enim vitae ut posuere
          sed commodo diam velit odio.
        </p>
        <button className="text-white w-[180px] bg-Primary-400 rounded-md p-3 px-8">
          Contact Us
        </button>
      </div>
      <div className="col-span-12 md:col-span-6 flex justify-center items-center my-3">
        <img src={home} alt="home" />
      </div>

      <div className="col-span-12 md:col-span-3 space-y-3 border border-Neutral-600 rounded p-3">
        <img src={icon} alt="1" />
        <p className="font-inter font-medium text-[26px] leading-[150%] tracking-[0px]">
          Services
        </p>
        <p className="font-inter text-Neutral-600 font-normal text-[14px] leading-[150%] tracking-[0px]">
          Lorem ipsum dolor sit amet consectetur. Gravida cursus facilisi
          accumsan dictum.
        </p>
      </div>
      <div className="col-span-12 md:col-span-3 space-y-3 border border-Neutral-600 rounded p-3">
        <img src={icon} alt="2" />
        <p className="font-inter font-medium text-[26px] leading-[150%] tracking-[0px]">
          Services
        </p>
        <p className="font-inter text-Neutral-600 font-normal text-[14px] leading-[150%] tracking-[0px]">
          Lorem ipsum dolor sit amet consectetur. Gravida cursus facilisi
          accumsan dictum.
        </p>
      </div>
      <div className="col-span-12 md:col-span-3 space-y-3 border border-Neutral-600 rounded p-3">
        <img src={icon} alt="3" />
        <p className="font-inter font-medium text-[26px] leading-[150%] tracking-[0px]">
          Services
        </p>
        <p className="font-inter text-Neutral-600 font-normal text-[14px] leading-[150%] tracking-[0px]">
          Lorem ipsum dolor sit amet consectetur. Gravida cursus facilisi
          accumsan dictum.
        </p>
      </div>
      <div className="col-span-12 md:col-span-3 space-y-3 border border-Neutral-600 rounded p-3">
        <img src={icon} alt="4" />
        <p className="font-inter font-medium text-[26px] leading-[150%] tracking-[0px]">
          Services
        </p>
        <p className="font-inter text-Neutral-600 font-normal text-[14px] leading-[150%] tracking-[0px]">
          Lorem ipsum dolor sit amet consectetur. Gravida cursus facilisi
          accumsan dictum.
        </p>
      </div>
    </div>
  );
}
