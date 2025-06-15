import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "ما هي أنواع الوقود المتاحة في محطات البنزين؟",
    answer: "غالبًا ما توفر محطات البنزين بنزين 91, 95, وديزل.",
  },
  {
    question: "هل يمكنني تعبئة الوقود في علب أو أوعية أخرى؟",
    answer: "لا، يمنع تعبئة الوقود في علب أو أوعية غير محطات البنزين المخصصة.",
  },
  {
    question: "هل يوجد خدمة الوقود المتنقل؟",
    answer: "قد تكون خدمة الوقود المتنقل متاحة في بعض المناطق، ولكنها ليست متوفرة في جميع محطات البنزين.",
  },
  {
    question: "هل توجد خدمات إضافية في محطات البنزين؟",
    answer: "قد توجد محلات تجارية في محطات البنزين، بالإضافة إلى غرف استراحة للعائلات في بعض المحطات.",
  },
  {
    question: "هل يمكنني تقديم شكوى ضد محطة بنزين؟",
    answer: "نعم، يمكنك تقديم شكوى ضد محطة بنزين إذا واجهت أي مشكلة.",
  },
];

export default function FAQCards() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] mx-auto py-8">
      <h2 className="font-poppins text-Primary-400 text-3xl font-bold text-center  mb-8">
        الأسئلة الشائعة       </h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full flex justify-between items-center p-6 text-right focus:outline-none"
            >
              <h3 className="font-poppins text-lg font-medium text-gray-800">
                {faq.question}
              </h3>
              <span className="text-yellow-400">
                {expandedIndex === index ? (
                  <FaChevronUp size={16} />
                ) : (
                  <FaChevronDown size={16} />
                )}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${expandedIndex === index
                ? "max-h-40 opacity-100 p-6"
                : "max-h-0 opacity-0"
                }`}
            >
              <p className="font-poppins text-sm text-gray-600">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}