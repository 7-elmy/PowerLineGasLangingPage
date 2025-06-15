import React from "react";
import scape from "../../assets/cuida_scope-outline.png";
import send from "../../assets/fa_send.png";
import star from "../../assets/icon-park-solid_five-star-badge.png";
export default function FutureVision() {
  return (
    <div id="من نكون" className="p-8">
      <h2 className="font-[Poppins] my-6 font-semibold text-[48px] leading-[100%] tracking-[0%] text-center capitalize">
          <span className="text-Primary-400">اهدافنا</span>
      </h2>

      <p className="font-[Poppins] font-normal text-Neutral-600 text-[14px] leading-relaxed tracking-[0%] text-center capitalize">
        زيادة عدد المحطات التي تديرها الشركة ، بما يلبّي احتياجات المسافرين في مختلف المناطق.
        توسيع نطاق التغطية الجغرافية في كافة أنحاء المملكة، لضمان وصول الخدمات إلى أكبر شريحة ممكنة من العملاء.
        بناء شراكات استراتيجية وتحقيق التكامل مع الشركاء الرئيسيين، بهدف تعزيز جودة الخدمات وتطويرها باستمرار.
        إعداد خطط التعاقب ومتابعة التطوير المستمر، لضمان استدامة الأداء والتميز في تقديم الخدمات.
      </p>

      <div className="grid grid-cols-12 md:gap-8 px-8 py-4 ">
        <div className="col-span-12 md:col-span-4 border border-e-Neutral-600 rounded-md relative mt-12">
          <div className="rounded-full w-[34px] absolute top-[-20px] left-[47%] h-[34px] flex justify-center items-center bg-Primary-400">
            <img src={scape} alt="" />
          </div>
          <p className="text-center py-6 font-poppins font-medium text-[24px] leading-[100%] tracking-[0%]  capitalize">
            رؤيتنا
          </p>

          <p class="font-[Poppins] text-Neutral-600  text-center p-3 font-normal text-[14px] leading-relaxed tracking-[0%]  capitalize">
            ترمي شركة سام  إلى تحقيق الريادة في تشغيل محطات الوقود ومراكز الخدمة، وتعزيز حضورها في السوق المحلية، بالتوازي مع الإسهام في رؤية المملكة 2030. كما تسعى لتقديم خدمات مجتمعية تساهم في الارتقاء بجودة الحياة للمجتمع
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 border border-e-Neutral-600 rounded-md relative mt-12">
          <div className="rounded-full p-2 w-[34px] absolute top-[-20px] left-[47%] h-[34px] flex justify-center items-center bg-Primary-400">
            <img src={send} alt="" />
          </div>
          <p className="text-center py-6 font-poppins font-medium text-[24px] leading-[100%] tracking-[0%]  capitalize">
            قيمنا
          </p>

          <p class="font-[Poppins] text-Neutral-600  text-center p-3 font-normal text-[14px] leading-relaxed tracking-[0%]  capitalize">
            الجودة ورفع معايير السلامة عن طريق إعداد المخططات الإنشائية المدروسة والتي تعتمد على السلامة والرقابة الدورية على جميع مايخص السلامة

          </p>
        </div>
        <div className="col-span-12 md:col-span-4 border border-e-Neutral-600 rounded-md relative mt-12">
          <div className="rounded-full w-[34px] p-1 absolute top-[-20px] left-[47%] h-[34px] flex justify-center items-center bg-Primary-400">
            <img src={star} alt="" />
          </div>
          <p className="text-center py-6 font-poppins font-medium text-[24px] leading-[100%] tracking-[0%]  capitalize">
            الرسالة
          </p>

          <p class="font-[Poppins] text-Neutral-600  text-center p-3 font-normal text-[14px] leading-relaxed tracking-[0%]  capitalize">
            سعى إلى توفير مجموعة متكاملة من الخدمات لقائدي المركبات والمسافرين، سواء داخل المدن أو خارجها، بما يضمن رضا العملاء ويعزّز القيمة المضافة.

          </p>
        </div>
      </div>
    </div>
  );
}
