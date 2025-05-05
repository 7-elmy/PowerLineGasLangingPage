import React from "react";
import map from "../../assets/map.png";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn, CiMail } from "react-icons/ci";
export default function Network() {
  return (
    <div id="About Us" className="my-8 border-b border-t border-Neutral-600 py-12 w-[90%] mx-auto">
      <h1 className="font-poppins py-4 font-semibold text-[48px] leading-[100%] tracking-[0%] text-center capitalize">
        Power line gas station <span className="text-Primary-400">network</span>
      </h1>
      <p className="font-[Poppins] text-Neutral-600 font-normal text-[14px] leading-[100%] tracking-[0%] text-center capitalize">
        We are proud to have Powerline gas locations, to be closer to you, we
        provide a distinguished educational environment in each of our branches.
      </p>

      <div className="grid grid-cols-12 gap-4 p-1 mt-12 border border-Neutral-600 rounded-md">
        <div className="col-span-12 md:col-span-4 p-2 space-y-3">
          <p className="font-poppins font-bold text-[18px] leading-[100%] tracking-[0%] capitalize">
            Branch name
          </p>
          <p className="text-Neutral-600 text-[14px] py-2">
            Branch description
          </p>

          <div className="space-y-4">
            <div className="flex  items-center gap-2">
              <CiMail />
              <span className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0%] capitalize">
                contact@powerlinegas.com
              </span>
            </div>
            <div className="flex  items-center gap-2">
              <IoCallOutline />
              <span className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0%] capitalize">
                920020132
              </span>
            </div>
            <div className="flex  items-center gap-2">
              <CiLocationOn />
              <span className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0%] capitalize">
                Riyadh - Al-Narjis District - Prince Faisal bin Bandar Street
              </span>
            </div>

            <button className="bg-Primary-400 p-3 text-white rounded">
              Contact us
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
}
