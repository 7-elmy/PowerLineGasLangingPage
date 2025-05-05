import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div id="Contact Us" className="py-8">
      <h1 className="font-poppins py-4 font-semibold text-[48px] leading-[100%] tracking-[0%] text-center capitalize">
        Contact <span className="text-Primary-400">Us</span>
      </h1>

      <p className="text-center text-Neutral-600 font-[Poppins] font-normal text-[14px] leading-[100%] tracking-[0%]">
        Still you have any questions? Contact our Team via{" "}
        <span className="text-Primary-400"> contact@powerlinegas.com</span>{" "}
      </p>

      <div className="relative mt-12 py-8">
        <div className="h-[1px] bg-Primary-400"></div>

        <div className="flex  justify-center items-center absolute top-[6px] left-[40%] ">
          <div className="">
            <div className="flex justify-between items-center gap-8 ">
              <button className="p-3 rounded-md border border-Primary-400 bg-white">
                <FaFacebookF className="text-Primary-400" />
              </button>
              <button className="p-3 rounded-md border border-Primary-400 bg-white">
                <FaInstagram className="text-Primary-400" />
              </button>
              <button className="p-3 rounded-md border border-Primary-400 bg-white">
                <FaLinkedinIn className="text-Primary-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 px-4 pt-8">
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col gap-4">
            <label
              htmlFor=""
              className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0%]"
            >
              First Name
            </label>

            <input
              className="p-2 rounded  border border-Neutral-600"
              placeholder="Enter First Names"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col gap-4">
            <label
              htmlFor=""
              className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0%]"
            >
              Second Name
            </label>

            <input
              className="p-2 rounded  border border-Neutral-600"
              placeholder="Enter Second Names"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col gap-4">
            <label
              htmlFor=""
              className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0%]"
            >
              Email Address
            </label>

            <input
              className="p-2 rounded  border border-Neutral-600"
              placeholder="Enter First Names"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col gap-4">
            <label
              htmlFor=""
              className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0%]"
            >
              Phone Number
            </label>

            <input
              className="p-2 rounded  border border-Neutral-600"
              placeholder="Enter First Names"
            />
          </div>
        </div>
        <div className="col-span-12">
          <label
            htmlFor=""
            className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0%]"
          >
            Message
          </label>
          <textarea
            name=""
            id=""
            rows={6}
            placeholder="Enter Message"
            className="w-full border border-Neutral-600 rounded p-2 my-3"
          ></textarea>
          <button className="bg-Primary-400 text-white w-full rounded-md p-3">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
