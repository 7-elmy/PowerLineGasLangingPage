// import React from "react";
// import card from "../../assets/Card.png";
// import {
//   FaToilet,
//   FaCoffee,
//   FaUtensils,
//   FaGasPump,
//   FaWrench,
//   FaCar,
//   FaMoneyBill,
//   FaShoppingCart,
//   FaMosque,
//   FaWater,
//   FaOilCan,
//   FaCarAlt,
// } from "react-icons/fa";

// const services = [
//   { name: "دورات مياه", icon: <FaToilet className="text-Primary-400 size-6" /> },
//   { name: "كافيهات", icon: <FaCoffee className="text-Primary-400 size-6" /> },
//   { name: "مطاعم", icon: <FaUtensils className="text-Primary-400 size-6" /> },
//   { name: "وقود", icon: <FaGasPump className="text-Primary-400 size-6" /> },
//   { name: "صيانة", icon: <FaWrench className="text-Primary-400 size-6" /> },
//   { name: "غسيل سيارات", icon: <FaCar className="text-Primary-400 size-6" /> },
//   { name: "صراف", icon: <FaMoneyBill className="text-Primary-400 size-6" /> },
//   { name: "سوبر ماركت", icon: <FaShoppingCart className="text-Primary-400 size-6" /> },
//   { name: "مسجد", icon: <FaMosque className="text-Primary-400 size-6" /> },
//   { name: "هواء وماء", icon: <FaWater className="text-Primary-400 size-6" /> },
//   { name: "إطارات", icon: <FaOilCan className="text-Primary-400 size-6" /> },
//   { name: "تغير زيت", icon: <FaOilCan className="text-Primary-400 size-6" /> },
//   { name: "زينة سيارات", icon: <FaCarAlt className="text-Primary-400 size-6" /> },
// ];

// export default function Services() {
//   return (
//     <div
//       id="الخدمات"
//       className="relative my-8 p-4 w-[95%] mx-auto rounded-md services bg-no-repeat bg-cover bg-center"
//     >
//       {/* خلفية داكنة شفافة */}
//       <div className="absolute inset-0 bg-[#603A02]/80 rounded-md"></div>

//       {/* المحتوى فوق الخلفية */}
//       <div className="relative z-10">
//         <p className="font-poppins font-semibold text-[36px] md:text-[48px] text-white text-center">
//           خدماتنا
//         </p>
//         <p className="font-poppins my-3 font-normal text-[16px] md:text-[18px] text-white text-center">
//           تقدّم الشركة باقة واسعة من الخدمات، تشمل تزويد المركبات بالوقود بأنواعه المختلفة، وخدمات الصيانة الدوريّة والفنيّة. كما تولي سام للوقود اهتمامًا خاصًا براحة عملائها، عبر إنشاء استراحات متكاملة تضمن بيئة مناسبة للراحة والاستجمام، وتقديم خيارات واسعة من المأكولات والمشروبات في المطاعم المُلحقة. تهدف الشركة، من خلال هذا النهج الشامل، إلى الارتقاء بمستوى الخدمة وتوفير تجربة سفر ممتعة وآمنة لجميع عملائها.
//         </p>

//         {/* تقسيم الخدمات */}
//         <div className="flex flex-col lg:flex-row justify-between gap-8 items-center mt-8">
//           {/* القسم الأيسر */}
//           <div className="space-y-8 w-full lg:w-[30%]">
//             {services.slice(0, 5).map((service, i) => (
//               <div
//                 key={i}
//                 className="rounded-md border border-Primary-400 p-4 bg-[#603A02]/60 hover:bg-[#603A02]/80 transition-transform transform hover:scale-105"
//               >
//                 <div className="w-[34px] h-[34px] rounded-md border flex justify-center items-center border-Primary-400">
//                   {service.icon}
//                 </div>
//                 <p className="text-white my-3 font-inter font-medium text-[18px] leading-[24px]">
//                   {service.name}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* صورة توضيحية */}
//           <div className="w-full lg:w-[40%] flex justify-center">
//             <img src={card} className="w-full h-[570px] object-contain" alt="Card" />
//           </div>

//           {/* القسم الأيمن */}
//           <div className="space-y-8 w-full lg:w-[30%]">
//             {services.slice(5, 10).map((service, i) => (
//               <div
//                 key={i}
//                 className="rounded-md border border-Primary-400 p-4 bg-[#603A02]/60 hover:bg-[#603A02]/80 transition-transform transform hover:scale-105"
//               >
//                 <div className="w-[34px] h-[34px] rounded-md border flex justify-center items-center border-Primary-400">
//                   {service.icon}
//                 </div>
//                 <p className="text-white my-3 font-inter font-medium text-[18px] leading-[24px]">
//                   {service.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* القسم السفلي للخدمات المتبقية */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4">
//           {services.slice(10).map((service, i) => (
//             <div
//               key={i}
//               className="rounded-md border border-Primary-400 p-4 bg-[#603A02]/60 hover:bg-[#603A02]/80 transition-transform transform hover:scale-105"
//             >
//               <div className="w-[34px] h-[34px] rounded-md border flex justify-center items-center border-Primary-400">
//                 {service.icon}
//               </div>
//               <p className="text-white my-3 font-inter font-medium text-[18px] leading-[24px]">
//                 {service.name}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* زر CTA */}
//         <div className="flex justify-center items-center py-8">
//           <button className="bg-Primary-400 text-white rounded-md px-6 py-3 hover:bg-Primary-500 transition transform hover:scale-105">
//             عرض المزيد
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import {
//   FaToilet,
//   FaCoffee,
//   FaUtensils,
//   FaGasPump,
//   FaWrench,
//   FaCar,
//   FaMoneyBill,
//   FaShoppingCart,
//   FaMosque,
//   FaWater,
//   FaCarBattery,
//   FaOilCan,
//   FaCarAlt,
// } from "react-icons/fa";

// const services = [
//   { name: "دورات مياه", icon: <FaToilet className="text-Primary-400 size-8" /> },
//   { name: "كافيهات", icon: <FaCoffee className="text-Primary-400 size-8" /> },
//   { name: "مطاعم", icon: <FaUtensils className="text-Primary-400 size-8" /> },
//   { name: "وقود", icon: <FaGasPump className="text-Primary-400 size-8" /> },
//   { name: "صيانة", icon: <FaWrench className="text-Primary-400 size-8" /> },
//   { name: "غسيل سيارات", icon: <FaCar className="text-Primary-400 size-8" /> },
//   { name: "صراف", icon: <FaMoneyBill className="text-Primary-400 size-8" /> },
//   { name: "سوبر ماركت", icon: <FaShoppingCart className="text-Primary-400 size-8" /> },
//   { name: "مسجد", icon: <FaMosque className="text-Primary-400 size-8" /> },
//   { name: "هواء وماء", icon: <FaWater className="text-Primary-400 size-8" /> },
//   { name: "إطارات", icon: <FaCarBattery className="text-Primary-400 size-8" /> },
//   { name: "تغير زيت", icon: <FaOilCan className="text-Primary-400 size-8" /> },
//   { name: "زينة سيارات", icon: <FaCarAlt className="text-Primary-400 size-8" /> },
// ];

// export default function Services() {
//   return (
//     <div
//       id="الخدمات"
//       className="relative my-8 p-4 w-[95%] mx-auto rounded-md bg-gradient-to-b from-[#603A02]/90 to-[#4a2e01]/90"
//     >
//       {/* المحتوى */}
//       <div className="relative z-10">
//         <h1 className="font-poppins font-semibold text-[36px] sm:text-[48px] text-white text-center">
//           خدماتنا
//         </h1>
//         <p className="font-poppins my-6 font-normal text-[16px] sm:text-[18px] text-white/90 text-center max-w-3xl mx-auto">
//           تقدّم الشركة باقة واسعة من الخدمات، تشمل تزويد المركبات بالوقود بأنواعه المختلفة، وخدمات الصيانة الدوريّة والفنيّة. كما تولي سام للوقود اهتمامًا خاصًا براحة عملائها، عبر إنشاء استراحات متكاملة تضمن بيئة مناسبة للراحة والاستجمام، وتقديم خيارات واسعة من المأكولات والمشروبات في المطاعم المُلحقة. تهدف الشركة، من خلال هذا النهج الشامل، إلى الارتقاء بمستوى الخدمة وتوفير تجربة سفر ممتعة وآمنة لجميع عملائها.
//         </p>

//         {/* شبكة الخدمات */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
//           {services.map((service, i) => (
//             <div
//               key={i}
//               className="flex flex-col items-center p-6 bg-[#603A02]/60 rounded-lg border border-Primary-400/50 shadow-md hover:shadow-xl hover:bg-[#603A02]/80 transition-all duration-300 transform hover:scale-105"
//             >
//               <div className="w-12 h-12 rounded-full bg-Primary-400/10 flex justify-center items-center border border-Primary-400/50">
//                 {service.icon}
//               </div>
//               <p className="text-white mt-4 font-inter font-medium text-[18px] text-center">
//                 {service.name}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* زر CTA */}
//         <div className="flex justify-center items-center py-10">
//           <button className="bg-Primary-400 text-white rounded-lg px-8 py-3 font-poppins font-medium text-[16px] hover:bg-Primary-500 transition-all duration-300 transform hover:scale-105 shadow-md">
//             عرض المزيد
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import card from "../../assets/Card.png";
import {
  FaToilet,
  FaCoffee,
  FaUtensils,
  FaGasPump,
  FaWrench,
  FaCar,
  FaMoneyBill,
  FaShoppingCart,
  FaMosque,
  FaWater,
  FaCarBattery,
  FaOilCan,
  FaCarAlt,
} from "react-icons/fa";
import { BsBadgeWcFill } from "react-icons/bs";
import { GiFlatTire } from "react-icons/gi";


const services = [
  { name: "دورات مياه", icon: <BsBadgeWcFill className="text-Primary-400 size-8" /> },
  { name: "كافيهات", icon: <FaCoffee className="text-Primary-400 size-8" /> },
  { name: "مطاعم", icon: <FaUtensils className="text-Primary-400 size-8" /> },
  { name: "وقود", icon: <FaGasPump className="text-Primary-400 size-8" /> },
  { name: "صيانة", icon: <FaWrench className="text-Primary-400 size-8" /> },
  { name: "غسيل سيارات", icon: <FaCar className="text-Primary-400 size-8" /> },
  { name: "صراف", icon: <FaMoneyBill className="text-Primary-400 size-8" /> },
  { name: "سوبر ماركت", icon: <FaShoppingCart className="text-Primary-400 size-8" /> },
  { name: "مسجد", icon: <FaMosque className="text-Primary-400 size-8" /> },
  { name: "إطارات", icon: < GiFlatTire className="text-Primary-400 size-8" /> },
  { name: "تغير زيت", icon: <FaOilCan className="text-Primary-400 size-8" /> },
  { name: "زينة سيارات", icon: <FaCarAlt className="text-Primary-400 size-8" /> },
];

export default function Services() {
  return (
    <div
      id="الخدمات"
      className="relative my-8 p-4 w-[95%] mx-auto rounded-md bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${card})` }}
    >
      {/* طبقة شفافة فوق الخلفية */}
      <div className="absolute inset-0 bg-[#603A02]/80 rounded-md"></div>

      {/* المحتوى */}
      <div className="relative z-10">
        <h1 className="font-poppins font-semibold text-[36px] sm:text-[48px] text-white text-center">
          خدماتنا
        </h1>
        <p className="font-poppins my-6 font-normal text-[16px] sm:text-[18px] text-white/90 text-center max-w-3xl mx-auto">
          تقدّم الشركة باقة واسعة من الخدمات، تشمل تزويد المركبات بالوقود بأنواعه المختلفة، وخدمات الصيانة الدوريّة والفنيّة. كما تولي سام للوقود اهتمامًا خاصًا براحة عملائها، عبر إنشاء استراحات متكاملة تضمن بيئة مناسبة للراحة والاستجمام، وتقديم خيارات واسعة من المأكولات والمشروبات في المطاعم المُلحقة. تهدف الشركة، من خلال هذا النهج الشامل، إلى الارتقاء بمستوى الخدمة وتوفير تجربة سفر ممتعة وآمنة لجميع عملائها.
        </p>

        {/* شبكة الخدمات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 bg-[#603A02]/60 rounded-lg border border-Primary-400/50 shadow-md hover:shadow-xl hover:bg-[#603A02]/80 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-Primary-400/10 flex justify-center items-center border border-Primary-400/50">
                {service.icon}
              </div>
              <p className="text-white mt-4 font-inter font-medium text-[18px] text-center">
                {service.name}
              </p>
            </div>
          ))}
        </div>

        {/* زر CTA */}

      </div>
    </div>
  );
}