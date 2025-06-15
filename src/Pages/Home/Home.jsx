import React from "react";
import home from "../../assets/ImageHome.svg";

export default function Home() {
  return (
    <div id="Home" className="grid grid-cols-12 gap-4 p-8 mt-8">
      <div className="col-span-12 md:col-span-6 my-3 flex flex-col justify-around ">
        <p className="font-[Poppins] font-medium text-center md:text-right text-[40px] md:text-[45px] leading-[120%] tracking-[0px]">
          مرحبًا بك في <span className="text-Primary-400 animate-pulse">باور لاين جاز للوقود</span>{" "}
          الخبرة التي تعتمد عليها في إدارة وتشغيل محطات الوقود ومراكز الخدمة
        </p>
        <p className="font-inter font-normal text-[18px] leading-[150%] tracking-[0px] text-Neutral-600 my-6">
          تُعَدّ باور لاين جاز للوقود شركة سعودية رائدة تأسست في عام 1446هـ (الموافق 2024م)، وتسعى إلى توفير حلول شاملة ومتميزة في مجال خدمات السيارات والمسافرين. تنطلق الشركة من رؤية واضحة ترتكز على تملُّك وتشغيل مراكز متكاملة تقع في مواقع استراتيجية، ما يضمن سهولة الوصول إليها ويوفّر تجربة سلسة للمسافرين على الطرق.
        </p>
        <p className="font-inter font-normal text-[18px] leading-[150%] tracking-[0px] text-Neutral-600 my-6">
        تقدّم الشركة باقة واسعة من الخدمات، تشمل تزويد المركبات بالوقود بأنواعه المختلفة، وخدمات الصيانة الدوريّة والفنيّة.
          </p>
        <p className="font-inter font-normal text-[18px] leading-[150%] tracking-[0px] text-Neutral-600 my-6">
          كما تولي سام للوقود اهتمامًا خاصًا براحة عملائها، عبر إنشاء استراحات متكاملة تضمن بيئة مناسبة للراحة والاستجمام، وتقديم خيارات واسعة من المأكولات والمشروبات في المطاعم المُلحقة. تهدف الشركة، من خلال هذا النهج الشامل، إلى الارتقاء بمستوى الخدمة وتوفير تجربة سفر ممتعة وآمنة لجميع عملائها
        </p>
        <button className="text-white w-[180px] bg-Primary-400 rounded-md p-3 px-8">
          <a href="#تواصل معنا">تواصل معنا</a>
        </button>
      </div>
      <div className="col-span-12 md:col-span-6 flex justify-center items-center my-3">
        <img src={home} alt="home" />
      </div>

      {/* <div className="col-span-12 md:col-span-3 space-y-3 border border-Neutral-600 rounded p-3">
        <img src={icon} alt="1" />
        <p className="font-inter font-medium text-[26px] leading-[150%] tracking-[0px]">
          من خدمتنا
        </p>
        <p className="font-inter text-Neutral-600 font-normal text-[14px] leading-[150%] tracking-[0px]">
          زينة سيارات
        </p>
      </div>
      <div className="col-span-12 md:col-span-3 space-y-3 border border-Neutral-600 rounded p-3">
        <img src={icon} alt="2" />
        <p className="font-inter font-medium text-[26px] leading-[150%] tracking-[0px]">
          من خدمتنا
        </p>
        <p className="font-inter text-Neutral-600 font-normal text-[14px] leading-[150%] tracking-[0px]">
          تغيير زيت
        </p>
      </div>
      <div className="col-span-12 md:col-span-3 space-y-3 border border-Neutral-600 rounded p-3">
        <img src={icon} alt="3" />
        <p className="font-inter font-medium text-[26px] leading-[150%] tracking-[0px]">
          من خدمتنا
        </p>
        <p className="font-inter text-Neutral-600 font-normal text-[14px] leading-[150%] tracking-[0px]">
          إطارات
        </p>
      </div>
      <div className="col-span-12 md:col-span-3 space-y-3 border border-Neutral-600 rounded p-3">
        <img src={icon} alt="4" />
        <p className="font-inter font-medium text-[26px] leading-[150%] tracking-[0px]">
          من خدمتنا
        </p>
        <p className="font-inter text-Neutral-600 font-normal text-[14px] leading-[150%] tracking-[0px]">
          مطاعم
        </p>
      </div> */}
    </div>
  );
}
