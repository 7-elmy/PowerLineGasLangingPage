import React from "react";
import scape from "../../assets/cuida_scope-outline.png";
import send from "../../assets/fa_send.png";
import star from "../../assets/icon-park-solid_five-star-badge.png";
export default function FutureVision() {
  return (
    <div id="Our Branches">
      <h2 className="font-[Poppins] my-6 font-semibold text-[48px] leading-[100%] tracking-[0%] text-center capitalize">
        Future <span className="text-Primary-400">vision</span>
      </h2>

      <p className="font-[Poppins] font-normal text-Neutral-600 text-[14px] leading-relaxed tracking-[0%] text-center capitalize">
        About SAM Fuel Company , SAM Fuel Company is a leading Saudi company
        founded in 1446 AH (corresponding to 2024 AD). It seeks to provide
        comprehensive and distinguished solutions in the field of automotive and
        passenger services. The company is driven by a clear vision based on
        owning and operating integrated centers located in strategic locations,
        ensuring easy access and a seamless experience for road travelers.
      </p>

      <div className="grid grid-cols-12 md:gap-8 px-8 py-4 ">
        <div className="col-span-12 md:col-span-4 border border-e-Neutral-600 rounded-md relative mt-12">
          <div className="rounded-full w-[34px] absolute top-[-20px] left-[47%] h-[34px] flex justify-center items-center bg-Primary-400">
            <img src={scape} alt="" />
          </div>
          <p className="text-center py-6 font-poppins font-medium text-[24px] leading-[100%] tracking-[0%]  capitalize">
            Our Vision
          </p>

          <p class="font-[Poppins] text-Neutral-600  text-center p-3 font-normal text-[14px] leading-relaxed tracking-[0%]  capitalize">
            SAM aims to achieve leadership in operating fuel stations and
            service centers, strengthening its presence in the local market,
            while contributing to the Kingdom's Vision 2030. It also seeks to
            provide community services that contribute to improving the quality
            of life for the community.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 border border-e-Neutral-600 rounded-md relative mt-12">
          <div className="rounded-full p-2 w-[34px] absolute top-[-20px] left-[47%] h-[34px] flex justify-center items-center bg-Primary-400">
            <img src={send} alt="" />
          </div>
          <p className="text-center py-6 font-poppins font-medium text-[24px] leading-[100%] tracking-[0%]  capitalize">
            Our Values
          </p>

          <p class="font-[Poppins] text-Neutral-600  text-center p-3 font-normal text-[14px] leading-relaxed tracking-[0%]  capitalize">
            SAM aims to achieve leadership in operating fuel stations and
            service centers, strengthening its presence in the local market,
            while contributing to the Kingdom's Vision 2030. It also seeks to
            provide community services that contribute to improving the quality
            of life for the community.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 border border-e-Neutral-600 rounded-md relative mt-12">
          <div className="rounded-full w-[34px] p-1 absolute top-[-20px] left-[47%] h-[34px] flex justify-center items-center bg-Primary-400">
            <img src={star} alt="" />
          </div>
          <p className="text-center py-6 font-poppins font-medium text-[24px] leading-[100%] tracking-[0%]  capitalize">
            Mission
          </p>

          <p class="font-[Poppins] text-Neutral-600  text-center p-3 font-normal text-[14px] leading-relaxed tracking-[0%]  capitalize">
            SAM aims to achieve leadership in operating fuel stations and
            service centers, strengthening its presence in the local market,
            while contributing to the Kingdom's Vision 2030. It also seeks to
            provide community services that contribute to improving the quality
            of life for the community.
          </p>
        </div>
      </div>
    </div>
  );
}
