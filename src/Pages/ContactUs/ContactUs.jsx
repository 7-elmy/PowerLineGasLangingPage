// import React from "react";
// import { FaTiktok, FaInstagram } from "react-icons/fa";
// import { RiTwitterXLine } from "react-icons/ri";

// export default function ContactUs() {
//   return (
//     <div id="تواصل-معنا" className="p-4 sm:p-8 md:p-12 bg-white">
//       <h1 className="font-poppins py-4 font-semibold text-3xl sm:text-4xl md:text-5xl leading-[100%] tracking-[0%] text-center capitalize">
//         تواصلوا <span className="text-Primary-400">معنا</span>
//       </h1>

//       <p className="text-center text-Neutral-600 font-poppins font-normal text-sm sm:text-base leading-[150%] tracking-[0%] max-w-2xl mx-auto">
//         هل لديكم أي استفسارات؟ تواصلوا مع فريقنا عبر{" "}
//         <a href="mailto:info@powerlinegaz.sa" className="text-Primary-400 hover:underline">
//           info@powerlinegaz.sa
//         </a>
//       </p>

//       <div className="relative mt-8 sm:mt-12 py-6">
//         <div className="h-[1px] bg-Primary-400"></div>

//         <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
//           <div className="flex justify-between items-center gap-4 sm:gap-6">
//             <a
//               href="https://x.com/powerlinefuel?s=21"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 sm:p-3 rounded-md border border-Primary-400 bg-white hover:bg-Primary-400 hover:text-white transition-colors duration-300"
//             >
//               <RiTwitterXLine className="text-Primary-400 text-lg sm:text-xl" />
//             </a>
//             <a
//               href="https://www.tiktok.com/@powerline.fuel?_t=ZS-8xAzDNxXo7E&_r=1"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 sm:p-3 rounded-md border border-Primary-400 bg-white hover:bg-Primary-400 hover:text-white transition-colors duration-300"
//             >
//               <FaTiktok className="text-Primary-400 text-lg sm:text-xl" />
//             </a>
//             <a
//               href="https://www.instagram.com/powerline.fuel?igsh=MWF3eW1vNW93aThzcg=="
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 sm:p-3 rounded-md border border-Primary-400 bg-white hover:bg-Primary-400 hover:text-white transition-colors duration-300"
//             >
//               <FaInstagram className="text-Primary-400 text-lg sm:text-xl" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-12 gap-4 sm:gap-6 px-2 sm:px-4 pt-6 sm:pt-8 max-w-4xl mx-auto">
//         <div className="col-span-12 sm:col-span-6">
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="firstName"
//               className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
//             >
//               الاسم الأول
//             </label>
//             <input
//               id="firstName"
//               className="p-2 sm:p-3 rounded-md border border-Neutral-600 text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400"
//               placeholder="أدخل الاسم الأول"
//               type="text"
//             />
//           </div>
//         </div>
//         <div className="col-span-12 sm:col-span-6">
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="secondName"
//               className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
//             >
//               الاسم الثاني
//             </label>
//             <input
//               id="secondName"
//               className="p-2 sm:p-3 rounded-md border border-Neutral-600 text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400"
//               placeholder="أدخل الاسم الثاني"
//               type="text"
//             />
//           </div>
//         </div>
//         <div className="col-span-12 sm:col-span-6">
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="email"
//               className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
//             >
//               البريد الإلكتروني
//             </label>
//             <input
//               id="email"
//               className="p-2 sm:p-3 rounded-md border border-Neutral-600 text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400"
//               placeholder="أدخل البريد الإلكتروني"
//               type="email"
//             />
//           </div>
//         </div>
//         <div className="col-span-12 sm:col-span-6">
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="phone"
//               className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
//             >
//               رقم الجوال
//             </label>
//             <input
//               id="phone"
//               className="p-2 sm:p-3 rounded-md border border-Neutral-600 text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400"
//               placeholder="أدخل رقم الجوال"
//               type="tel"
//             />
//           </div>
//         </div>
//         <div className="col-span-12">
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="message"
//               className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
//             >
//               الرسالة
//             </label>
//             <textarea
//               id="message"
//               rows={5}
//               placeholder="أدخل رسالتك"
//               className="w-full p-2 sm:p-3 rounded-md border border-Neutral-600 text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400 resize-none"
//             ></textarea>
//           </div>
//           <button className="bg-Primary-400 text-white w-full rounded-md p-3 sm:p-4 mt-4 font-poppins font-medium text-sm sm:text-base hover:bg-Primary-500 transition-colors duration-300">
//             إرسال
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { FaTiktok, FaInstagram } from "react-icons/fa";
// import { RiTwitterXLine } from "react-icons/ri";

// // Validation schema using Yup
// const validationSchema = Yup.object({
//   firstName: Yup.string()
//     .required("الاسم الأول مطلوب")
//     .min(2, "الاسم الأول يجب أن يكون حرفين على الأقل"),
//   lastName: Yup.string()
//     .required("الاسم الثاني مطلوب")
//     .min(2, "الاسم الثاني يجب أن يكون حرفين على الأقل"),
//   email: Yup.string()
//     .email("البريد الإلكتروني غير صحيح")
//     .required("البريد الإلكتروني مطلوب"),
//   phone: Yup.string()
//     .matches(/^(?:\+966|966)[5-9]\d{8}$/, "رقم الجوال السعودي غير صحيح")
//     .required("رقم الجوال مطلوب"),
//   message: Yup.string()
//     .required("الرسالة مطلوبة")
//     .min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل"),
// });

// export default function ContactUs() {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       message: "",
//     },
//     validationSchema,
//     onSubmit: async (values, { setSubmitting, resetForm }) => {
//       try {
//         await axios.post("https://power-production-0325.up.railway.app/contactUs", values);
//         alert("تم إرسال الرسالة بنجاح!");
//         resetForm();
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         alert("حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.");
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   return (
//     <div id="تواصل-معنا" className="p-4 sm:p-8 md:p-12 bg-white">
//       <h1 className="font-poppins py-4 font-semibold text-3xl sm:text-4xl md:text-5xl leading-[100%] tracking-[0%] text-center capitalize">
//         تواصلوا <span className="text-Primary-400">معنا</span>
//       </h1>

//       <p className="text-center text-Neutral-600 font-poppins font-normal text-sm sm:text-base leading-[150%] tracking-[0%] max-w-2xl mx-auto">
//         هل لديكم أي استفسارات؟ تواصلوا مع فريقنا عبر{" "}
//         <a href="mailto:info@powerlinegaz.sa" className="text-Primary-400 hover:underline">
//           info@powerlinegaz.sa
//         </a>
//       </p>

//       <div className="relative mt-8 sm:mt-12 py-6">
//         <div className="h-[1px] bg-Primary-400"></div>

//         <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
//           <div className="flex justify-between items-center gap-4 sm:gap-6">
//             <a
//               href="https://x.com/powerlinefuel?s=21"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 sm:p-3 rounded-md border border-Primary-400 bg-white hover:bg-Primary-400 hover:text-white transition-colors duration-300"
//             >
//               <RiTwitterXLine className="text-Primary-400 text-lg sm:text-xl" />
//             </a>
//             <a
//               href="https://www.tiktok.com/@powerline.fuel?_t=ZS-8xAzDNxXo7E&_r=1"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 sm:p-3 rounded-md border border-Primary-400 bg-white hover:bg-Primary-400 hover:text-white transition-colors duration-300"
//             >
//               <FaTiktok className="text-Primary-400 text-lg sm:text-xl" />
//             </a>
//             <a
//               href="https://www.instagram.com/powerline.fuel?igsh=MWF3eW1vNW93aThzcg=="
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 sm:p-3 rounded-md border border-Primary-400 bg-white hover:bg-Primary-400 hover:text-white transition-colors duration-300"
//             >
//               <FaInstagram className="text-Primary-400 text-lg sm:text-xl" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <form onSubmit={formik.handleSubmit} className="grid grid-cols-12 gap-4 sm:gap-6 px-2 sm:px-4 pt-6 sm:pt-8 max-w-4xl mx-auto">
//         <div className="col-span-12 sm:col-span-6">
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="firstName"
//               className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
//             >
//               الاسم الأول
//             </label>
//             <input
//               id="firstName"
//               name="firstName"
//               className={`p-2 sm:p-3 rounded-md border text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400 ${formik.touched.firstName && formik.errors.firstName ? "border-red-500" : "border-Neutral-600"
//                 }`}
//               placeholder="أدخل الاسم الأول"
//               type="text"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.firstName}
//             />
//             {formik.touched.firstName && formik.errors.firstName ? (
//               <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
//             ) : null}
//           </div>
//         </div>
//         <div className="col-span-12 sm:col-span-6">
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="lastName"
//               className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
//             >
//               الاسم الثاني
//             </label>
//             <input
//               id="lastName"
//               name="lastName"
//               className={`p-2 sm:p-3 rounded-md border text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400 ${formik.touched.lastName && formik.errors.lastName ? "border-red-500" : "border-Neutral-600"
//                 }`}
//               placeholder="أدخل الاسم الثاني"
//               type="text"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.lastName}
//             />
//             {formik.touched.lastName && formik.errors.lastName ? (
//               <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
//             ) : null}
//           </div>
//         </div>
//         <div className="col-span-12 sm:col-span-6">
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="email"
//               className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
//             >
//               البريد الإلكتروني
//             </label>
//             <input
//               id="email"
//               name="email"
//               className={`p-2 sm:p-3 rounded-md border text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400 ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-Neutral-600"
//                 }`}
//               placeholder="أدخل البريد الإلكتروني"
//               type="email"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.email}
//             />
//             {formik.touched.email && formik.errors.email ? (
//               <div className="text-red-500 text-sm">{formik.errors.email}</div>
//             ) : null}
//           </div>
//         </div>
//         <div className="col-span-12 sm:col-span-6">
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="phone"
//               className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
//             >
//               رقم الجوال
//             </label>
//             <input
//               id="phone"
//               name="phone"
//               className={`p-2 sm:p-3 rounded-md border text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400 ${formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-Neutral-600"
//                 }`}
//               placeholder="أدخل رقم الجوال"
//               type="tel"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.phone}
//             />
//             {formik.touched.phone && formik.errors.phone ? (
//               <div className="text-red-500 text-sm">{formik.errors.phone}</div>
//             ) : null}
//           </div>
//         </div>
//         <div className="col-span-12">
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="message"
//               className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
//             >
//               الرسالة
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={5}
//               placeholder="أدخل رسالتك"
//               className={`w-full p-2 sm:p-3 rounded-md border text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400 resize-none ${formik.touched.message && formik.errors.message ? "border-red-500" : "border-Neutral-600"
//                 }`}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.message}
//             ></textarea>
//             {formik.touched.message && formik.errors.message ? (
//               <div className="text-red-500 text-sm">{formik.errors.message}</div>
//             ) : null}
//           </div>
//           <button
//             type="submit"
//             disabled={formik.isSubmitting}
//             className={`bg-Primary-400 text-white w-full rounded-md p-3 sm:p-4 mt-4 font-poppins font-medium text-sm sm:text-base transition-colors duration-300 ${formik.isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-Primary-500"
//               }`}
//           >
//             {formik.isSubmitting ? "جاري الإرسال..." : "إرسال"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

// Validation schema using Yup
// const validationSchema = Yup.object({
//   firstName: Yup.string()
//     .required("الاسم الأول مطلوب")
//     .min(2, "الاسم الأول يجب أن يكون حرفين على الأقل"),
//   lastName: Yup.string()
//     .required("الاسم الثاني مطلوب")
//     .min(2, "الاسم الثاني يجب أن يكون حرفين على الأقل"),
//   email: Yup.string()
//     .email("البريد الإلكتروني غير صحيح")
//     .required("البريد الإلكتروني مطلوب"),
//   phone: Yup.string()
//     .matches(/^(?:\+966|966)[5-9]\d{8}$/, "رقم الجوال السعودي غير صحيح")
//     .required("رقم الجوال مطلوب"),
//   message: Yup.string()
//     .required("الرسالة مطلوبة")
//     .min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل"),
// });

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState({
    status: null, // null, "loading", "success", "error"
    message: "",
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    // validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setFormStatus({ status: "loading", message: "جاري الإرسال..." });
      try {
        await axios.post("https://power-production-0325.up.railway.app/contactUs", values);
        setFormStatus({ status: "success", message: "تم إرسال الرسالة بنجاح!" });
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        setFormStatus({ status: "error", message: "حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى." });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div id="تواصل معنا" className="p-4 sm:p-8 md:p-12 bg-white">
      <h1 className="font-poppins py-4 font-semibold text-3xl sm:text-4xl md:text-5xl leading-[100%] tracking-[0%] text-center capitalize">
        تواصلوا <span className="text-Primary-400">معنا</span>
      </h1>

      <p className="text-center text-Neutral-600 font-poppins font-normal text-sm sm:text-base leading-[150%] tracking-[0%] max-w-2xl mx-auto">
        هل لديكم أي استفسارات؟ تواصلوا مع فريقنا عبر{" "}
        <a href="mailto:info@powerlinegaz.sa" className="text-Primary-400 hover:underline">
          info@powerlinegaz.sa
        </a>
      </p>

      <div className="relative mt-8 sm:mt-12 py-6">
        <div className="h-[1px] bg-Primary-400"></div>

        <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
          <div className="flex justify-between items-center gap-4 sm:gap-6">
            <a
              href="https://x.com/powerlinefuel?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-md border border-Primary-400 bg-white hover:bg-Primary-400 hover:text-white transition-colors duration-300"
            >
              <RiTwitterXLine className="text-Primary-400 text-lg sm:text-xl" />
            </a>
            <a
              href="https://www.tiktok.com/@powerline.fuel?_t=ZS-8xAzDNxXo7E&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-md border border-Primary-400 bg-white hover:bg-Primary-400 hover:text-white transition-colors duration-300"
            >
              <FaTiktok className="text-Primary-400 text-lg sm:text-xl" />
            </a>
            <a
              href="https://www.instagram.com/powerline.fuel?igsh=MWF3eW1vNW93aThzcg=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-md border border-Primary-400 bg-white hover:bg-Primary-400 hover:text-white transition-colors duration-300"
            >
              <FaInstagram className="text-Primary-400 text-lg sm:text-xl" />
            </a>
          </div>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} className="grid grid-cols-12 gap-4 sm:gap-6 px-2 sm:px-4 pt-6 sm:pt-8 max-w-4xl mx-auto">
        <div className="col-span-12 sm:col-span-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="firstName"
              className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
            >
              الاسم الأول
            </label>
            <input
              id="firstName"
              name="firstName"
              className={`p-2 sm:p-3 rounded-md border text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400 ${formik.touched.firstName && formik.errors.firstName ? "border-red-500" : "border-Neutral-600"
                }`}
              placeholder="أدخل الاسم الأول"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
            ) : null}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastName"
              className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
            >
              الاسم الثاني
            </label>
            <input
              id="lastName"
              name="lastName"
              className={`p-2 sm:p-3 rounded-md border text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400 ${formik.touched.lastName && formik.errors.lastName ? "border-red-500" : "border-Neutral-600"
                }`}
              placeholder="أدخل الاسم الثاني"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
            >
              البريد الإلكتروني
            </label>
            <input
              id="email"
              name="email"
              className={`p-2 sm:p-3 rounded-md border text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400 ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-Neutral-600"
                }`}
              placeholder="أدخل البريد الإلكتروني"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
            >
              رقم الجوال
            </label>
            <input
              id="phone"
              name="phone"
              className={`p-2 sm:p-3 rounded-md border text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400 ${formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-Neutral-600"
                }`}
              placeholder="أدخل رقم الجوال"
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            ) : null}
          </div>
        </div>
        <div className="col-span-12">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-poppins font-semibold text-lg sm:text-xl leading-[100%] tracking-[0%]"
            >
              الرسالة
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="أدخل رسالتك"
              className={`w-full p-2 sm:p-3 rounded-md border text-sm sm:text-base placeholder-Neutral-400 focus:outline-none focus:ring-2 focus:ring-Primary-400 resize-none ${formik.touched.message && formik.errors.message ? "border-red-500" : "border-Neutral-600"
                }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-sm">{formik.errors.message}</div>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className={`bg-Primary-400 text-white w-full rounded-md p-3 sm:p-4 mt-4 font-poppins font-medium text-sm sm:text-base transition-colors duration-300 ${formik.isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-Primary-500"
              }`}
          >
            {formik.isSubmitting ? "جاري الإرسال..." : "إرسال"}
          </button>
        </div>
        {formStatus.status && (
          <div className="col-span-12 text-center mt-4">
            {formStatus.status === "loading" && (
              <p className="text-Neutral-600 font-poppins text-sm sm:text-base">{formStatus.message}</p>
            )}
            {formStatus.status === "success" && (
              <p className="text-green-600 font-poppins text-sm sm:text-base">{formStatus.message}</p>
            )}
            {formStatus.status === "error" && (
              <p className="text-red-500 font-poppins text-sm sm:text-base">{formStatus.message}</p>
            )}
          </div>
        )}
      </form>
    </div>
  );
}