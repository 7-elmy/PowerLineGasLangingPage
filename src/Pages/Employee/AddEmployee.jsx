

// Modified AddEmployee.jsx - Main component
import React, { useState } from 'react';
import { Steps, message, ConfigProvider } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { IoFolderOpen, IoPersonSharp } from 'react-icons/io5';
import AddEmployeeform1 from './forms/AddEmployeeform1';
import BreadCrumb from '../../components/Breadcrumb';
import AddEmployeeform2 from './forms/AddEmployeeform2';
import AddEmployeeform3 from './forms/AddEmployeeform3';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../Redux/Apis/apiRequest';

const { Step } = Steps;

const StatusBadge = ({ status }) => {
  const badgeClasses = {
    'In Progress': 'bg-orange-100 text-Primary-400',
    'Completed': 'bg-green-100 text-green-500',
    'Pending': 'bg-gray-100 text-gray-400'
  };
  
  return (
    <span className={`font-inter font-normal text-base text-center leading-[100%] tracking-[0%] py-2 px-2 rounded-full ${badgeClasses[status]}`}>
      {status}
    </span>
  );
};

const AddEmployee = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addEmployee } = useSelector(state => state.api);
  const [documents, setDocuments] = useState([
    { id: 1, title: '', document: null, expiryDate1: '', expiryDate2: '' }
  ]);

  // Define validation schema for each step
  const validationSchemas = [
    // Step 1 validation schema
    Yup.object({
      name: Yup.string().required('Employee name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      phone: Yup.string().required('Phone number is required'),
      age: Yup.number().positive('Age must be a positive number').required('Age is required'),
      dateOfBirth: Yup.string().required('Date of birth is required'),
      gender: Yup.string(),
      nationality: Yup.string().required('Nationality is required'),
      address: Yup.string().required('Address is required'),
      city: Yup.string().required('City is required'),
      nationalId: Yup.string().required('National ID is required'),
      swiftCode: Yup.string().required('Swift code is required'),
      IBAN: Yup.string().required('IBAN is required')
    }),
    
    // Step 2 validation schema
    Yup.object({
      permissions: Yup.string().required('Role is required'),
      station: Yup.string().required('Work station name is required'),
      salary: Yup.number().positive('Salary must be a positive number').required('Salary is required'),
      timeWork: Yup.string().required('Time work is required'),
      joiningDate: Yup.string().required('Joining date is required'),
      contractDuration: Yup.number().positive('Contract duration must be a positive number').required('Contract duration is required'),
      residenceExpiryDate: Yup.string().required('Residence expiry date is required')
    }),
    
    // Step 3 doesn't need explicit validation as it's dynamic documents
  ];
  let [docs , setDocs] = useState([])
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      age: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      address: "",
      city: "",
      nationalId: "",
      swiftCode: "",
      IBAN: "",
      permissions: "",
      station: "",
      salary: "",
      timeWork: "",
      joiningDate: "",
      contractDuration: "",
      residenceExpiryDate: "",
      // Documents will be handled separately
    },
    // validationSchema: validationSchemas[current],
    // onSubmit: (values) => {
    //   // Combine form values with documents data
    //   const formData = new FormData();
      
    //   // Add all form fields to FormData
    //   Object.keys(values).forEach(key => {
    //     formData.append(key, values[key]);
    //   });

   
    //   for (let pair of formData.entries()) {
    //     console.log(`${pair[0]}:`, pair[1]);
    //   }
      
      
    //   // Add documents data
    //   documents.forEach((doc, index) => {
    //     if (doc.title) formData.append(`documents[${index}][title]`, doc.title);
    //     if (doc.document) formData.append(`documents[${index}][file]`, doc.document);
    //     if (doc.expiryDate1) formData.append(`documents[${index}][startDate]`, doc.expiryDate1);
    //     if (doc.expiryDate2) formData.append(`documents[${index}][endDate]`, doc.expiryDate2);
    //   });
    //   console.log({formData});
      
      
    //   // Send to API
    //   // dispatch(apiRequest({
    //   //   entity: "addEmployee",
    //   //   url: "hr/employee/add",
    //   //   method: "POST",
    //   //   data: formData,
    //   //   headers: {
    //   //     'Content-Type': 'multipart/form-data'
    //   //   }
    //   // }));
      
    //   // message.success('Employee added successfully!');
    //   // navigate("/main/all-employee/details/id");
    // }

    // Inside your formik.onSubmit function:
onSubmit: (values) => {
  // Create a new FormData object
  const formData = new FormData();
  
  // Add all form fields to FormData
  Object.keys(values).forEach(key => {
    formData.append(key, values[key]);
  });
  
  // Add documents data correctly for API
  documents.forEach((doc, index) => {
    // Only add document if it has a title
    if (doc.title) {
      formData.append(`documents[${index}][title]`, doc.title);
      
      // Add file if it exists
      if (doc.document) {
        formData.append(`documentsFiles_${index}`, doc.document);
      }
      
      // Add dates if they exist
      if (doc.expiryDate1) {
        formData.append(`documents[${index}][startDate]`, doc.expiryDate1);
      }
      
      if (doc.expiryDate2) {
        formData.append(`documents[${index}][endDate]`, doc.expiryDate2);
      }
    }
  });
  
  // Log the form data for debugging
  console.log("Submitting form data:");
  for (let pair of formData.entries()) {
    console.log(`${pair[0]}:`, pair[1]);
  }
  
  // Send to API
  // dispatch(apiRequest({
  //   entity: "addEmployee",
  //   url: "hr/employee/add",
  //   method: "POST",
  //   data: formData,
  //   headers: {
  //     'Content-Type': 'multipart/form-data'
  //   }
  // }));
  
  // message.success('Employee added successfully!');
  // navigate("/main/all-employee/details/id");
}
  });

  const next = () => {
    // Validate current step before proceeding
    // const currentSchema = validationSchemas[current];
    
    try {
      // currentSchema.validateSync(formik.values, { abortEarly: false });
      setCurrent(current + 1);
    } catch (errors) {
      // Mark fields as touched to show errors
      const touchedFields = {};
      if (errors.inner) {
        errors.inner.forEach(error => {
          touchedFields[error.path] = true;
        });
        formik.setTouched({ ...formik.touched, ...touchedFields });
      }
      message.error('Please fill in all required fields correctly');
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // Update documents state from form 3
  const handleDocumentsChange = (newDocuments) => {
    setDocuments(newDocuments);
  };

  // Define status for each step
  const getStepStatus = (stepIndex) => {
    if (current === stepIndex) return 'In Progress';
    if (current > stepIndex) return 'Completed';
    return 'Pending';
  };

  // Custom icon renderer with conditional styling
  const getStepIcon = (index) => {
    const status = getStepStatus(index);
    const icons = [IoPersonSharp, IoFolderOpen, FileTextOutlined];
    const IconComponent = icons[index];

    if (status === 'Completed') {
      // Green background with white icon for completed steps
      return (
        <div className='bg-green-500 text-white w-8 h-8 flex justify-center items-center rounded-full'>
          <IconComponent className="text-lg" />
        </div>
      );
    } else if (status === 'In Progress') {
      // Orange background with white icon for current step
      return (
        <div className='bg-[#FBB03F] text-white w-8 h-8 flex justify-center items-center rounded-full'>
          <IconComponent className="text-lg" />
        </div>
      );
    } else {
      // Gray border and gray icon for pending steps
      return (
        <div className='border-2 border-gray-300 text-gray-400 w-8 h-8 flex justify-center items-center rounded-full'>
          <IconComponent className="text-lg" />
        </div>
      );
    }
  };

  // Step titles and descriptions
  const stepInfo = [
    {
      title: 'Step 1',
      description: 'Personal Information',
      content: <AddEmployeeform1 formik={formik} />
    },
    {
      title: 'Step 2',
      description: 'Job Information',
      content: <AddEmployeeform2 formik={formik} />
    },
    {
      title: 'Step 3',
      description: 'Documents',
      content: <AddEmployeeform3 formik={formik} documents={documents} setDocuments={handleDocumentsChange} />
    }
  ];

  // Custom CSS for steps to override Ant Design's default styles
  const customStepStyles = `
    .custom-steps .ant-steps-item-finish .ant-steps-item-tail::after {
      background-color: #22c55e !important; /* green-500 for completed steps */
    }
    .custom-steps .ant-steps-item-wait .ant-steps-item-tail::after {
      background-color: #d9d9d9 !important; /* gray for pending steps */
    }
    .custom-steps .ant-steps-item-process .ant-steps-item-tail::after {
      background-color: #d9d9d9 !important; /* gray after current step */
    }
  `;

  return (
    <ConfigProvider
      theme={{
        token: {
           colorPrimary: '#1fc16b',
        },
      }}
    >
      <style>{customStepStyles}</style>
      <div className="p-8">
        {/* Header with All Employees link and Add Employee button */}
        <BreadCrumb item1={"All Employees"} item2={" Add Employees"} />
        
        {/* Steps Component */}
        <div className="relative w-full mb-10 px-10">
          <Steps 
            current={current}
            className="custom-steps"
            progressDot={false}
          >
            {stepInfo.map((step, index) => (
              <Step 
                key={index}
                icon={getStepIcon(index)}
                status={
                  getStepStatus(index) === 'Completed' ? 'finish' : 
                  getStepStatus(index) === 'In Progress' ? 'process' : 'wait'
                }
              />
            ))}
          </Steps>
          
          {/* Custom step titles and descriptions */}
          <div className="absolute top-3 left-0 right-0 flex justify-between mt-10">
            {stepInfo.map((step, index) => (
              <div key={index} className={`${step.title === "Step 1" ? "ps-10" : ""} ${step.title === "Step 2" ? "ms-[-50px]" : ""} flex flex-col`}>
                <div className={`mb-1 font-poppins font-normal text-[16px] leading-[100%] tracking-[0] ${getStepStatus(index) === 'Pending' ? 'text-gray-400' : ''}`}>
                  {step.title}
                </div>
                <div className={`mb-2 ${getStepStatus(index) === 'Pending' ? 'text-Neutral-600' : 'text-Neutral-1500'}`}>
                  {step.description}
                </div>
                <StatusBadge status={getStepStatus(index)} />
              </div>
            ))}
          </div>
        </div>

        {/* Content area */}
        <div className="bg-white p-6 rounded-lg shadow-sm min-h-96 mt-32 mb-6">
          <form onSubmit={formik.handleSubmit}>
            {stepInfo[current].content}
          </form>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-5 items-center mt-6">
          {current < stepInfo.length - 1 && (
            <>
              <button 
                className="h-10 rounded-md border border-[#FBB03F] text-Primary-400 cursor-pointer w-[130px]"
                onClick={() => navigate("/main/all-employee")}
                type="button"
              >
                Cancel
              </button>
              <button 
                className="h-10 rounded-md border border-[#FBB03F] bg-Primary-400 cursor-pointer text-white w-[130px]"
                onClick={next}
                type="button"
              >
                Next
              </button>
            </>
          )}
          
          {current === stepInfo.length - 1 && (
            <button 
              type="button"
              className="h-10 rounded-md border border-[#FBB03F] bg-Primary-400 cursor-pointer text-white w-[130px]"
              onClick={() =>{ formik.handleSubmit()

                navigate("/main/all-employee/details/id")
              }}
            >
              Done
            </button>
          )}
          
          {current > 0 && (
            <button
              type="button"
              className="h-10 rounded-md border border-[#FBB03F] text-Primary-400 cursor-pointer w-[130px]"
              onClick={prev}
            >
              Previous
            </button>
          )}
        </div>
      </div>
    </ConfigProvider>
  );
};

export default AddEmployee;


