import React from 'react'

export default function ReuseableInput({col , label , icon , placeholder , value , onBlur , onChange , name , id}) {
  return (

      <div className={` w-full col-span-${col}`}>
                    <label
                      htmlFor="name"
                      className="font-[poppins] font-medium text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0] "
                    >
                    {label}
                    </label>
                    <div className="mt-3  h-[48px] gap-[10px] rounded-[8px] border border-solid p-[12px] border-Neutral-600  flex items-center">
                      <img src={icon} alt="profile" />
            
                      <input
                        type="text"
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        className="border-l-2 ps-3 w-full border-Neutral-600 p-[6px] outline-none focus:outline-none font-[poppins] font-normal  text-[16px] placeholder:text-[14px] placeholder:text-Neutral-600 leading-[100%] tracking-[0]"
                      />
                    </div>
                    {/* {getErrorMessage("name")} */}
                  </div>
    
  )
}
