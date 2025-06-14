// import React from "react";
// import card from "../../assets/Card.png";
// import { CiPickerEmpty } from "react-icons/ci";
// import cup from "../../assets/cup.png";
// import hook from "../../assets/hook.png";
// import tv from "../../assets/tv.png";

// export default function Ser_vices() {
//   return (
    
//     <div id="Our Services" className="my-8 p-4 bg-[#603A02] w-[95%] mx-auto rounded-md">
//       <p className="font-poppins font-semibold text-[36px] md:text-[48px] text-white text-center">
//         Our Services
//       </p>
//       <p className="font-poppins my-3 font-normal text-[16px] md:text-[18px] text-white text-center">
//         text
//       </p>

//       {/* Main layout */}
//       <div className="flex flex-col lg:flex-row justify-between gap-8 items-center mt-8">
//         {/* Left Section */}
//         <div className="space-y-8 w-full lg:w-[30%]">
//           {[cup, cup ,cup].map((icon, i) => (
//             <div key={i} className="rounded-md border border-Primary-400 p-4">
//               <div className="w-[34px] h-[34px] rounded-md border flex justify-center items-center border-Primary-400">
//                 {i === 0 ? (
//                   <CiPickerEmpty className="text-Primary-400 size-6" />
//                 ) : (
//                   <img src={icon} className="w-[24px] h-[24px]" alt="" />
//                 )}
//               </div>
//               <p className="text-white my-3 font-inter font-medium text-[18px] leading-[24px]">
//                 Heading Goes Here
//               </p>
//               <p className="font-inter text-[16px] text-white">
//                 Lorem ipsum dolor sit amet consectetur. Cursus hac porttitor dignissim risus nullam ut dictum.
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Image */}
//         <div className="w-full lg:w-[40%] flex justify-center">
//           <img src={card} className="w-full h-[570px]  object-contain" alt="Card" />
//         </div>

//         {/* Right Section */}
//         <div className="space-y-8 w-full lg:w-[30%]">
//           {[hook, tv, tv].map((icon, i) => (
//             <div key={i} className="rounded-md border border-Primary-400 p-4">
//               <div className="w-[34px] h-[34px] rounded-md border flex justify-center items-center border-Primary-400">
//                 <img src={icon} className="w-[24px] h-[24px]" alt="" />
//               </div>
//               <p className="text-white my-3 font-inter font-medium text-[18px] leading-[24px]">
//                 Heading Goes Here
//               </p>
//               <p className="font-inter text-[16px] text-white">
//                 Lorem ipsum dolor sit amet consectetur. Cursus hac porttitor dignissim risus nullam ut dictum.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Button */}
//       <div className="flex justify-center items-center py-8">
//         <button className="bg-Primary-400 text-white rounded-md px-6 py-3 hover:bg-primary-500 transition">
//           View More
//         </button>
//       </div>
//     </div>
//   );
// }


import React from "react";
import card from "../../assets/Card.png";
import { CiPickerEmpty } from "react-icons/ci";
import cup from "../../assets/cup.png";
import hook from "../../assets/hook.png";
import tv from "../../assets/tv.png";

export default function Ser_vices() {
  return (
    <div
      id="Our Services"
      className="relative my-8 p-4 w-[95%] mx-auto rounded-md services  bg-no-repeat bg-cover bg-center"
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-[#603A02]/80 rounded-md"></div>

      {/* Content on top of overlay */}
      <div className="relative z-10">
        <p className="font-poppins font-semibold text-[36px] md:text-[48px] text-white text-center">
          Our Services
        </p>
        <p className="font-poppins my-3 font-normal text-[16px] md:text-[18px] text-white text-center">
          text
        </p>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center mt-8">
          {/* Left Section */}
          <div className="space-y-8 w-full lg:w-[30%]">
            {[cup, cup, cup].map((icon, i) => (
              <div key={i} className="rounded-md border border-Primary-400 p-4 bg-[#603A02]/60">
                <div className="w-[34px] h-[34px] rounded-md border flex justify-center items-center border-Primary-400">
                  {i === 0 ? (
                    <CiPickerEmpty className="text-Primary-400 size-6" />
                  ) : (
                    <img src={icon} className="w-[24px] h-[24px]" alt="" />
                  )}
                </div>
                <p className="text-white my-3 font-inter font-medium text-[18px] leading-[24px]">
                  Heading Goes Here
                </p>
                <p className="font-inter text-[16px] text-white">
                  Lorem ipsum dolor sit amet consectetur. Cursus hac porttitor dignissim risus nullam ut dictum.
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full lg:w-[40%] flex justify-center">
            <img src={card} className="w-full h-[570px] object-contain" alt="Card" />
          </div>

          {/* Right Section */}
          <div className="space-y-8 w-full lg:w-[30%]">
            {[hook, tv, tv].map((icon, i) => (
              <div key={i} className="rounded-md border border-Primary-400 p-4 bg-[#603A02]/60">
                <div className="w-[34px] h-[34px] rounded-md border flex justify-center items-center border-Primary-400">
                  <img src={icon} className="w-[24px] h-[24px]" alt="" />
                </div>
                <p className="text-white my-3 font-inter font-medium text-[18px] leading-[24px]">
                  Heading Goes Here
                </p>
                <p className="font-inter text-[16px] text-white">
                  Lorem ipsum dolor sit amet consectetur. Cursus hac porttitor dignissim risus nullam ut dictum.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center items-center py-8">
          <button className="bg-Primary-400 text-white rounded-md px-6 py-3 hover:bg-primary-500 transition">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
