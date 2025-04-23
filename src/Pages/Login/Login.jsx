import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo.svg";
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { MdLockOutline } from 'react-icons/md';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { apiRequest } from '../../Redux/Apis/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

// Extend Yup for phone or email validation
Yup.addMethod(Yup.string, "phoneOrEmail", function (message) {
  return this.test("phoneOrEmail", message, function (value) {
    const { path, createError } = this;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(00966|\+966|0)?5[0-9]{8}$/;
    return emailRegex.test(value) || phoneRegex.test(value)
      ? true
      : createError({ path, message });
  });
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  
  const { login } = useSelector(state => state.api);
 let navigate = useNavigate()
  console.log({login});


  
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validationSchema = Yup.object({
    phoneOrEmail: Yup.string().phoneOrEmail("Invalid email ").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("password is required"),
  });

  // useEffect(() => {
  //   if (login?.data?.status === 200) {
  //     // Store token in session storage
  //     sessionStorage.setItem("token", login?.data?.data?.authorization?.token);
  //     toast.success("success")
  //     // Navigate to the desired route
  //     navigate("/main/all-employee");
  //   } else {
  //     toast.error("error")
  //   }
  // }, [login, navigate]);

  return (
    <div className='min-h-screen bg-Primary-400 flex flex-col justify-center items-center px-4 py-8'>
      <div className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white rounded-2xl flex flex-col justify-center items-center gap-4 md:gap-5 py-6 md:py-8 shadow-md md:shadow-[0px_20px_20px_0px_#00000040]'>

        {/* Logo */}
        <div className='flex justify-center items-center mt-2 md:mt-4'>
          <img src={logo} className='w-auto h-12 md:h-16' alt="Power Line Gas" />
        </div>

        {/* Heading */}
        <h1 className="font-poppins font-semibold text-3xl md:text-[48px] text-center">
          Login to <span className='text-Primary-400'>Power line gas</span>
        </h1>
        <p className="font-poppins font-normal text-sm md:text-[18px] text-center text-Neutral-600">
          Welcome back! Please log in to access your account.
        </p>

        {/* Form */}
        <Formik
          initialValues={{ phoneOrEmail: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async(values, actions) => {
           
            // console.log("Submitted:", values);
            // dispatch(apiRequest({
            //   entity: "login",
            //   url: "hr/login",
            //   method: "POST",
            //   data: values
            // }));
            // actions.setSubmitting(true);
            await axios.post(`https://powerline-app.vercel.app/hr/login`,values).then(res=>{
             
              console.log(res);
              sessionStorage.setItem("token", res.data?.authorization?.token);
       toast.success(`${res.data.message}`)
       // Navigate to the desired route
       navigate("/main/");
            }).catch(err=>{
              console.log(err);
              if(err.response.data.message =="Validation Error" || err.status ==500){
                toast.error("Invalid Email or Password!!!")
              }
             
              
            })
           
          }}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form className='space-y-4 md:space-y-5 pt-4 md:pt-6 w-full px-6 md:px-8 lg:px-12'>

              {/* phoneOrEmail Field */}
              <div>
                <label htmlFor="phoneOrEmail" className="font-poppins font-medium text-base md:text-lg text-Neutral-1500 block mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <AiOutlineMail className='size-5 text-Neutral-600' />
                  </div>
                  <Field
                    type="text"
                    name="phoneOrEmail"
                    id="phoneOrEmail"
                    placeholder="Enter Your phone or email"
                    className="ps-12 p-2.5 w-full h-12 border border-Neutral-600 focus:border-Primary-400 rounded-lg outline-none transition-colors duration-200"
                  />
                </div>
                <ErrorMessage name="phoneOrEmail" component="div" className="text-danger-1600 text-sm mt-1" />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="font-poppins font-medium text-base md:text-lg text-Neutral-1500 block mb-1">
                  password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <MdLockOutline className='size-5 text-Neutral-600' />
                  </div>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter Your password"
                    className="ps-12 p-2.5 w-full h-12 border border-Neutral-600 focus:border-Primary-400 rounded-lg outline-none transition-colors duration-200"
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 cursor-pointer"
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword
                      ? <AiOutlineEyeInvisible className='size-5 text-Neutral-600 hover:text-Primary-400 transition-colors' />
                      : <AiOutlineEye className='size-5 text-Neutral-600 hover:text-Primary-400 transition-colors' />}
                  </div>
                </div>
                <ErrorMessage name="password" component="div" className="text-danger-1600 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!(isValid && dirty)}
                className={`relative w-full h-12 md:h-14 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center font-poppins font-semibold text-base md:text-lg text-center 
                ${isValid && dirty ? 'bg-Primary-400 hover:bg-Primary-500 text-white' : 'bg-Primary-400/50 text-white cursor-not-allowed'}`}
              >
                {isSubmitting ?  <div className='flex items-center gap-1'> <div className="loader"></div></div> : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
