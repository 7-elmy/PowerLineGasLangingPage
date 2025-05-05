import React from "react";
import container1 from "../../assets/Container.png";
import container2 from "../../assets/Container1.png";
import logo from "../../assets/Vector (1).png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-6">
        <div className="p-3">
          <img src={logo} alt="" />
          <p className="font-poppins mt-4 font-bold text-[28px] leading-[100%] tracking-[0%] capitalize">
            Power Line Gas
          </p>
        </div>

        <div className="flex justify-between items-center gap-3 mt-8 px-4">
          <div className="space-y-4">
            <Link
              to={""}
              className="font-poppins font-medium text-[16px] leading-[100%] tracking-[0%] capitalize"
            >
              Home
            </Link>

            <div className="flex flex-col gap-4 mt-4">
              <Link className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[100%] tracking-[0%] capitalize">
                Customer service
              </Link>
              <Link className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[100%] tracking-[0%] capitalize">
                Future vision
              </Link>
              <Link className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[100%] tracking-[0%] capitalize">
                Our Branches
              </Link>
              <Link className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[100%] tracking-[0%] capitalize">
                FAQ
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <Link
              to={""}
              className="font-poppins font-medium text-[16px] leading-[100%] tracking-[0%] capitalize"
            >
              About Us
            </Link>

            <div className="flex flex-col gap-4 mt-4">
              <Link className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[100%] tracking-[0%] capitalize">
                About Us
              </Link>
              <Link className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[100%] tracking-[0%] capitalize">
                Our vision
              </Link>
              <Link className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[100%] tracking-[0%] capitalize">
                message
              </Link>
              <Link className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[100%] tracking-[0%] capitalize">
                our Goals
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <Link
              to={""}
              className="font-poppins font-medium text-[16px] leading-[100%] tracking-[0%] capitalize"
            >
              our Servies
            </Link>

            <div className="flex flex-col gap-4 mt-4">
              <Link className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[100%] tracking-[0%] capitalize">
                Cafes & restaurants
              </Link>
              <Link className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[100%] tracking-[0%] capitalize">
                Mosques & bathrooms
              </Link>
              <Link className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[100%] tracking-[0%] capitalize">
                fuel
              </Link>
              <Link className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[100%] tracking-[0%] capitalize">
                Changing oils & tires
              </Link>
             
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6  flex-col md:flex-row justify-center md:justify-baseline flex items-center gap-2 mt-12 md:mt-0">
        <img src={container1} alt="" />
        <img src={container2} alt="" />
      </div>
    </div>
  );
}
