import React, { useState } from "react";
import container1 from "../../assets/Container.png";
import container2 from "../../assets/Container1.png";
import logo from "../../assets/Vector (1).png";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
  // دالة للتنقل السلس إلى العنصر باستخدام ID
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // حالة للتحكم في إظهار/إخفاء سياسة الخصوصية
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  // دالة لتبديل إظهار/إخفاء سياسة الخصوصية مع السكرول
  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy((prev) => {
      const newState = !prev;
      if (newState) {
        // نستخدم setTimeout عشان نضمن إن المحتوى يظهر الأول قبل السكرول
        setTimeout(() => {
          scrollToSection("privacy-policy");
        }, 300);
      }
      return newState;
    });
  };

  return (
    <div className="w-full py-6 bg-white m-2">
      {/* القسم العلوي */}
      <div className="grid grid-cols-12 gap-4 w-[90%] mx-auto">
        {/* الصور في الأعلى على الشاشات الصغيرة */}
        <div className="col-span-12 flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 md:hidden">
          <img
            src={container1}
            alt="صورة محطة وقود 1"
            className="w-full max-w-[150px] h-auto object-contain"
          />
          <img
            src={container2}
            alt="صورة محطة وقود 2"
            className="w-full max-w-[150px] h-auto object-contain"
          />
        </div>

        {/* الروابط والشعار */}
        <div className="col-span-12 md:col-span-6">
          <div className="p-3 text-center md:text-left">
            <img
              src={logo}
              alt="شعار باور لاين غاز"
              className="mx-auto md:mx-0 w-12 h-auto"
            />
            <p className="font-poppins mt-4 font-bold text-[28px] leading-[120%] capitalize text-Primary-400">
              باور لاين غاز
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 px-4">
            <div className="space-y-4 text-center md:text-left">
              <button
                onClick={() => scrollToSection("الرئيسية")}
                className="font-poppins font-medium text-[16px] leading-[120%] capitalize text-black hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
              >
                الرئيسية
              </button>
              <div className="flex flex-col gap-3 mt-4">
                <button
                  onClick={() => scrollToSection("خدمة_العملاء")}
                  className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[120%] capitalize hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
                >
                  خدمة العملاء
                </button>
                <button
                  onClick={() => scrollToSection("من نكون")}
                  className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[120%] capitalize hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
                >
                  الرؤية المستقبلية
                </button>
                <button
                  onClick={() => scrollToSection("الفروع")}
                  className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[120%] capitalize hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
                >
                  فروعنا
                </button>
                <button
                  onClick={() => scrollToSection("الأسئلة_الشائعة")}
                  className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[120%] capitalize hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
                >
                  الأسئلة الشائعة
                </button>
              </div>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <button
                onClick={() => scrollToSection("من نكون")}
                className="font-poppins font-medium text-[16px] leading-[120%] capitalize text-black hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
              >
                من نحن
              </button>
              <div className="flex flex-col gap-3 mt-4">
                <button
                  onClick={() => scrollToSection("الرئيسية")}
                  className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[120%] capitalize hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
                >
                  عن الشركة
                </button>
                <button
                  onClick={() => scrollToSection("من نكون")}
                  className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[120%] capitalize hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
                >
                  رؤيتنا
                </button>
                <button
                  onClick={() => scrollToSection("من نكون")}
                  className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[120%] capitalize hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
                >
                  رسالتنا
                </button>
                <button
                  onClick={() => scrollToSection("من نكون")}
                  className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[120%] capitalize hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
                >
                  أهدافنا
                </button>
              </div>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <button
                onClick={() => scrollToSection("الخدمات")}
                className="font-poppins font-medium text-[16px] leading-[120%] capitalize text-black hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
              >
                خدماتنا
              </button>
              <div className="flex flex-col gap-3 mt-4">
                <button
                  onClick={() => scrollToSection("الخدمات")}
                  className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[120%] capitalize hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
                >
                  كافيهات ومطاعم
                </button>
                <button
                  onClick={() => scrollToSection("الخدمات")}
                  className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[120%] capitalize hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
                >
                  مساجد ودورات مياه
                </button>
                <button
                  onClick={() => scrollToSection("الخدمات")}
                  className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[120%] capitalize hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
                >
                  وقود
                </button>
                <button
                  onClick={() => scrollToSection("الخدمات")}
                  className="font-poppins text-Neutral-600 font-medium text-[14px] leading-[120%] capitalize hover:text-Primary-400 transition-colors duration-200 cursor-pointer w-full block"
                >
                  تغيير زيوت وإطارات
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* الصور على الشاشات الكبيرة */}
        <div className="col-span-12 md:col-span-6 flex flex-col md:flex-row justify-center items-center gap-2 mt-12 md:mt-0 hidden md:flex">
          <img
            src={container1}
            alt="صورة محطة وقود 1"
            className="w-full max-w-[300px] h-auto object-contain"
          />
          <img
            src={container2}
            alt="صورة محطة وقود 2"
            className="w-full max-w-[300px] h-auto object-contain"
          />
        </div>

        {/* أيقونات التواصل الاجتماعي وقسم سياسة الخصوصية */}
        <div className="col-span-12 mt-8">
          <div className="flex justify-center gap-4">
            <a
              href="https://www.tiktok.com/@powerline.fuel?_t=ZS-8xAzDNxXo7E&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-Primary-400 flex justify-center items-center rounded-full w-[30px] h-[30px] hover:bg-Primary-500 transition-transform duration-200 transform hover:scale-110"
            >
              <FaTiktok className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/powerline.fuel?igsh=MWF3eW1vNW93aThzcg=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-Primary-400 flex justify-center items-center rounded-full w-[30px] h-[30px] hover:bg-Primary-500 transition-transform duration-200 transform hover:scale-110"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://x.com/powerlinefuel?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-Primary-400 flex justify-center items-center rounded-full w-[30px] h-[30px] hover:bg-Primary-500 transition-transform duration-200 transform hover:scale-110"
            >
              <RiTwitterXLine className="text-white" />
            </a>
          </div>

          {/* رابط سياسة الخصوصية */}
          <div className="text-center mt-6">
            <button
              onClick={togglePrivacyPolicy}
              className="font-poppins font-medium text-[16px] leading-[120%] capitalize text-Primary-400 hover:text-Primary-500 transition-colors duration-200 cursor-pointer"
            >
              سياسة الخصوصية
            </button>
          </div>

          {/* قسم سياسة الخصوصية */}
          {showPrivacyPolicy && (
            <div id="privacy-policy" className="mt-6 p-6 bg-Neutral-100 rounded-lg text-right">
              <h2 className="font-poppins font-bold text-[24px] text-Primary-400 mb-4">سياسة الخصوصية</h2>
              <p className="font-poppins text-Neutral-600 text-[14px] mb-2"><strong>تاريخ السريان:</strong> 13 يونيو 2025</p>
              <p className="font-poppins text-Neutral-600 text-[14px] mb-4">
                في شركة باورلاين، حماية بياناتك الشخصية هي أولويتنا القصوى. توضح سياسة الخصوصية هذه كيفية جمعنا للمعلومات واستخدامها والكشف عنها وتأمينها عند استخدامك لتطبيق إدارة محطات الوقود الخاص بنا، باورلاين.
              </p>
              <h3 className="font-poppins font-semibold text-[18px] text-black mb-2">1. البيانات التي نجمعها</h3>
              <p className="font-poppins text-Neutral-600 text-[14px] mb-2"><strong>بيانات المستخدم:</strong></p>
              <ul className="list-disc pr-6 mb-4">
                <li className="font-poppins text-Neutral-600 text-[14px]">الاسم الكامل، المسمى الوظيفي، محطة الوقود المخصصة</li>
                <li className="font-poppins text-Neutral-600 text-[14px]">تفاصيل الاتصال: رقم الهاتف والبريد الإلكتروني</li>
                <li className="font-poppins text-Neutral-600 text-[14px]">رقم الهوية الوطنية أو الإقامة (للتحقق من الهوية والتوظيف)</li>
              </ul>
              <p className="font-poppins text-Neutral-600 text-[14px] mb-2"><strong>البيانات التشغيلية:</strong></p>
              <ul className="list-disc pr-6 mb-4">
                <li className="font-poppins text-Neutral-600 text-[14px]">تقارير الحوادث (مثل سرقة الوقود، انتهاكات السلامة)</li>
                <li className="font-poppins text-Neutral-600 text-[14px]">سجلات التفتيش وصيانة المعدات</li>
                <li className="font-poppins text-Neutral-600 text-[14px]">جداول تسليم الوقود وتحديثات المخزون</li>
              </ul>
              <p className="font-poppins text-Neutral-600 text-[14px] mb-2"><strong>البيانات التقنية:</strong></p>
              <ul className="list-disc pr-6 mb-4">
                <li className="font-poppins text-Neutral-600 text-[14px]">أوقات تسجيل الدخول، معلومات الجهاز، وعنوان IP</li>
                <li className="font-poppins text-Neutral-600 text-[14px]">موقع GPS عند تقديم تقارير ميدانية</li>
                <li className="font-poppins text-Neutral-600 text-[14px]">سجلات الاستخدام التي تظهر النماذج المقدمة والوحدات التي تم الوصول إليها</li>
              </ul>
              <h3 className="font-poppins font-semibold text-[18px] text-black mb-2">2. لماذا نجمعها</h3>
              <p className="font-poppins text-Neutral-600 text-[14px] mb-4">
                نجمع البيانات لـ:
                <ul className="list-disc pr-6">
                  <li className="font-poppins text-Neutral-600 text-[14px]">إدارة العمليات اليومية عبر المحطات</li>
                  <li className="font-poppins text-Neutral-600 text-[14px]">ضمان الامتثال لإرشادات وزارة الطاقة والدفاع المدني</li>
                  <li className="font-poppins text-Neutral-600 text-[14px]">تحسين تجربة المستخدم والمسؤولية</li>
                  <li className="font-poppins text-Neutral-600 text-[14px]">تأمين المنصة واكتشاف الأنشطة الاحتيالية</li>
                </ul>
              </p>
              <h3 className="font-poppins font-semibold text-[18px] text-black mb-2">3. مشاركة المعلومات</h3>
              <p className="font-poppins text-Neutral-600 text-[14px] mb-4">
                لا نبيع أو نؤجر بيانات المستخدم. يمكن مشاركة البيانات فقط مع:
                <ul className="list-disc pr-6">
                  <li className="font-poppins text-Neutral-600 text-[14px]">الجهات التنظيمية السعودية حسب متطلبات القانون</li>
                  <li className="font-poppins text-Neutral-600 text-[14px]">أقسام الشركة الداخلية (مثل الموارد البشرية، الصيانة، السلامة)</li>
                  <li className="font-poppins text-Neutral-600 text-[14px]">مزودي الخدمات الموثوقين مثل موردي الاستضافة السحابية بموجب اتفاقيات سرية صارمة</li>
                </ul>
              </p>
              <h3 className="font-poppins font-semibold text-[18px] text-black mb-2">4. أمان وتخزين البيانات</h3>
              <p className="font-poppins text-Neutral-600 text-[14px] mb-4">
                بياناتك:
                <ul className="list-disc pr-6">
                  <li className="font-poppins text-Neutral-600 text-[14px]">مشفرة باستخدام بروتوكولات SSL/TLS الحديثة</li>
                  <li className="font-poppins text-Neutral-600 text-[14px]">مخزنة بشكل آمن على خوادم مدارة مع وصول مقيد</li>
                  <li className="font-poppins text-Neutral-600 text-[14px]">محمية من خلال النسخ الاحتياطية المنتظمة وتدقيق النظام</li>
                </ul>
              </p>
              <h3 className="font-poppins font-semibold text-[18px] text-black mb-2">5. حقوقك</h3>
              <p className="font-poppins text-Neutral-600 text-[14px] mb-4">
                وفقًا لقانون حماية البيانات الشخصية السعودي (PDPL)، يحق للمستخدمين:
                <ul className="list-disc pr-6">
                  <li className="font-poppins text-Neutral-600 text-[14px]">الوصول إلى بياناتهم ومراجعتها</li>
                  <li className="font-poppins text-Neutral-600 text-[14px]">طلب تصحيح البيانات</li>
                  <li className="font-poppins text-Neutral-600 text-[14px]">سحب الموافقة على استخدامات معينة لمعلوماتهم</li>
                  <li className="font-poppins text-Neutral-600 text-[14px]">تقديم شكوى إلى الجهات التنظيمية إذا لزم الأمر</li>
                </ul>
                لممارسة هذه الحقوق، اتصل بنا على:
                <br />
                📧 info.powelinegaz.sa
                <br />
                📍 شركة باورلاين، الطائف، المملكة العربية السعودية
              </p>
              <h3 className="font-poppins font-semibold text-[18px] text-black mb-2">6. ملفات تعريف الارتباط والتتبع</h3>
              <p className="font-poppins text-Neutral-600 text-[14px] mb-4">
                قد يستخدم التطبيق ملفات تعريف الارتباط أو الرموز الجلسية لـ:
                <ul className="list-disc pr-6">
                  <li className="font-poppins text-Neutral-600 text-[14px]">الحفاظ على جلسات تسجيل دخول آمنة</li>
                  <li className="font-poppins text-Neutral-600 text-[14px]">تتبع التنقل لتحسين النظام</li>
                  <li className="font-poppins text-Neutral-600 text-[14px]">تحليل أنماط التشغيل</li>
                </ul>
                يمكن للمستخدمين إدارة ملفات تعريف الارتباط عبر إعدادات أجهزتهم.
              </p>
              <h3 className="font-poppins font-semibold text-[18px] text-black mb-2">7. تحديثات السياسة</h3>
              <p className="font-poppins text-Neutral-600 text-[14px] mb-4">
                قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم إخطار جميع المستخدمين من خلال إشعارات داخل التطبيق أو عبر البريد الإلكتروني للتغييرات المهمة. استمرار استخدام التطبيق يعني قبول السياسة المحدثة.
              </p>
              <h3 className="font-poppins font-semibold text-[18px] text-black mb-2">8. معلومات الاتصال</h3>
              <p className="font-poppins text-Neutral-600 text-[14px]">
                مسؤول حماية البيانات (DPO):
                <br />
                📧 info.powelinegaz.sa
                <br />
                📞 (920020132)
                <br />
                📍 مقر شركة باورلاين، الطائف، المملكة العربية السعودية
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}