import React, { useState } from "react";
import person from "../../../assets/table/profile.svg";

import pump from "../../../assets/station/pump.svg";
import pump2 from "../../../assets/station/pump2.png";
import blackpump from "../../../assets/station/blackpump.svg";
import greenpump from "../../../assets/station/greenpump.svg";
import redpump from "../../../assets/station/redpump.svg";
import station from "../../../assets/table/Gas Station-26.png";

import FormWithDropdown from "../../../components/Gender";
import FileUploadInput from "../../../components/FileUpload_Input";
export default function AddStationform1({ setBorder = false, formik }) {
  let [selectGender, setSelectGender] = useState("");
  const handleDateChange = (date, dateString) => {
    formik?.setFieldValue("dateOfBirth", dateString);
  };
  const genderOptions = ["male", "female", "other"];
  const handleFileUpload = (file) => {
    console.log({ file });

    formik?.setFieldValue("profilePic", file);
  };

  // Helper function to show error messages
  const getErrorMessage = (fieldName) => {
    return formik?.touched[fieldName] && formik?.errors[fieldName] ? (
      <div className="text-red-500 text-xs mt-1">
        {formik?.errors[fieldName]}
      </div>
    ) : null;
  };

  return (
    <section
      className={`pt-8 grid grid-cols-12 gap-6 ${
        setBorder == true
          ? "border border-Neutral-600 rounded-[12px] px-8 mx-3 pb-8"
          : ""
      } `}
    >
      <div className=" col-span-6">
        <label
          htmlFor="name"
          className="font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] "
        >
          Employees Name*
        </label>
        <div className="mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center">
          <img src={person} alt="profile" />

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Employee Name"
            value={formik?.values?.name}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            className="border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal  text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]"
          />
        </div>
        {getErrorMessage("name")}
      </div>
      <div className="col-span-6">
        <label
          htmlFor="name"
          className="font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] "
        >
          Station address*
        </label>
        <div className="mt-2  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center">
          <img src={station} alt="profile" />

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Station address Stations"
            value={formik?.values?.name}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            className="border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal  text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]"
          />
        </div>
        {getErrorMessage("name")}
      </div>

      {/*row 2 */}
      <div className="col-span-6">
        <label
          htmlFor="age"
          className="font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] "
        >
          Number of each pump*
        </label>
        <div className="mt-2  relative h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center">
          <img src={pump} alt="age" />

          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter Number of each pump"
            value={formik?.values?.age}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            className="border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]"
          />
          <div className="bg-white w-7 h-7  absolute top-3 right-2"></div>
        </div>
        {getErrorMessage("age")}
      </div>
      <div className="col-span-6">
        <label
          htmlFor="age"
          className="font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] "
        >
          Number of each pistol*
        </label>
        <div className="mt-2  relative h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center">
          <img src={pump2} alt="age" />

          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter number of each pistol"
            value={formik?.values?.age}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            className="border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]"
          />
          <div className="bg-white w-7 h-7  absolute top-3 right-2"></div>
        </div>
        {getErrorMessage("age")}
      </div>

      <div className="col-span-6 mt-1">
        <FormWithDropdown
          icon={person}
          options={genderOptions}
          label="Supplier Name*"
          value={formik?.values?.gender}
          onChange={(value) => formik?.setFieldValue("gender", value)}
          placeholder={"Select Supplier Name"}
        />
        {getErrorMessage("gender")}
      </div>

      <div className="col-span-6">
        <label
          htmlFor="age"
          className="font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] "
        >
          Number of green petrol pistol*
        </label>
        <div className="mt-1  relative h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center">
          <img src={greenpump} alt="age" />

          <input
            type="number"
            id="age"
            name="age"
            placeholder="The Number of green petrol pumps"
            value={formik?.values?.age}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            className="border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]"
          />
          <div className="bg-white w-7 h-7  absolute top-3 right-2"></div>
        </div>
        {getErrorMessage("age")}
      </div>

      <div className="col-span-6">
        <label
          htmlFor="age"
          className="font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] "
        >
          Number of Red petrol pistol *
        </label>
        <div className="mt-2  relative h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center">
          <img src={redpump} alt="age" />

          <input
            type="number"
            id="age"
            name="age"
            placeholder="The Number of Red petrol pumps "
            value={formik?.values?.age}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            className="border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]"
          />
          <div className="bg-white w-7 h-7  absolute top-3 right-2"></div>
        </div>
        {getErrorMessage("age")}
      </div>

      <div className="col-span-6">
        <label
          htmlFor="age"
          className="font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] "
        >
          Number of Diesel petrol pistol *
        </label>
        <div className="mt-2  relative h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center">
          <img src={blackpump} alt="age" />

          <input
            type="number"
            id="age"
            name="age"
            placeholder="The Number of Diesel petrol pumps "
            value={formik?.values?.age}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            className="border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]"
          />
          <div className="bg-white w-7 h-7  absolute top-3 right-2"></div>
        </div>
        {getErrorMessage("age")}
      </div>
    </section>
  );
}
