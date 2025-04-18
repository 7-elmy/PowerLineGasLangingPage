import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineEye, AiOutlineEdit, AiOutlineDelete, AiOutlinePlus, AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi';
import { MdOutlineDashboard, MdOutlineWindow, MdOutlineWorkOutline } from 'react-icons/md';
import { FaAngleDown, FaChevronDown, FaChevronUp, FaMoon, FaRegBuilding } from 'react-icons/fa';
import { RiUserSettingsLine } from 'react-icons/ri';
import { BiTask } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';
import { FiSettings, FiMessageSquare, FiUsers } from 'react-icons/fi';
import { BsGrid } from 'react-icons/bs';
import logo from "../../assets/logo.png"
import userprofile from "../../assets/sidbar/company logo.png"
import station from "../../assets/sidbar/Gas Station.svg"
import { IoMdSunny } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
export default function Sidebar() {

    const [activeItem, setActiveItem] = useState('hr');
  const [activeSubItem, setActiveSubItem] = useState('allEmployees');
  let navigate = useNavigate()
  // Track expanded menu items
  const [expandedMenus, setExpandedMenus] = useState({
    hr: false,
    workStations: false,
    settings: false
  });
      const sidebarItems = [
        { 
          id: 'overView', 
        //   icon: <BsGrid className="text-xl" />, 
         icon: <MdOutlineWindow className='text-xl ' />, 
          label: 'Over View', 
          link: 'main/', 
          hasSubmenu: false 
        },
        { 
          id: 'hr', 
        //   icon: <HiOutlineUsers className="text-xl" />, 
          icon: <FiUsers className="text-xl " />, 
          label: 'HR', 
          link:"main/all-employee",
          hasSubmenu: true,
          submenu: [
            { id: 'allEmployees', label: 'All Employees' },
            { id: 'dailyWorks', label: 'Daily Works' },
            { id: 'tasks', label: 'Tasks' }
          ] 
        },
        { 
          id: 'workStations',  
          link:"workStations", 
          icon: <img src={station} alt="" />, 
          label: 'Work stations', 
          hasSubmenu: true,
          submenu: [
            { id: 'allStations', label: 'All Stations' },
            { id: 'stationDetails', label: 'Station Details' },
            { id: 'stationManagement', label: 'Station Management' }
          ] 
        },
        { 
          id: 'rolesPermissions', 
          link:"rolesPermissions",
          icon: <RiUserSettingsLine className="text-xl" />, 
          label: 'Roles & Permissions', 
          hasSubmenu: false 
        },
        { 
          id: 'automation', 
          link:"automation",
          icon: <MdOutlineWorkOutline className="text-xl" />, 
          label: 'AutoMation', 
          subtext: '(Soon)',
          hasSubmenu: false 
        },
        { 
          id: 'maintenance', 
          link: 'maintenance', 
          icon: <MdOutlineWorkOutline className="text-xl" />, 
          label: 'Maintenance', 
          hasSubmenu: false 
        },
        { 
          id: 'tasksStations', 
          link: 'tasksStations', 
          icon: <BiTask className="text-xl" />, 
          label: 'Tasks Stations', 
          hasSubmenu: false 
        },
        { 
          id: 'suppliesRequest', 
          link: 'suppliesRequest', 
          icon: <TbTruckDelivery className="text-xl" />, 
          label: 'Supplies Request', 
          hasSubmenu: false 
        },
        { 
          id: 'messages', 
          link: 'messages', 
          icon: <FiMessageSquare className="text-xl" />, 
          label: 'Messages', 
          hasSubmenu: false 
        },
        { 
          id: 'settings', 
          link: 'settings', 
          icon: <FiSettings className="text-xl" />, 
          label: 'Setting', 
          hasSubmenu: true,
          submenu: [
            { id: 'generalSettings', label: 'General Settings' },
            { id: 'userSettings', label: 'User Settings' },
            { id: 'systemSettings', label: 'System Settings' }
          ] 
        },
      ];

       // Toggle submenu expansion
  const toggleSubmenu = (menuId) => {
    setExpandedMenus({
      ...expandedMenus,
      [menuId]: !expandedMenus[menuId]
    });
    
    // Set active item
    setActiveItem(menuId);
  };

  // Handle menu item click
  const handleMenuItemClick = (menuId, hasSubmenu) => {
    if (hasSubmenu) {
      toggleSubmenu(menuId);
    } else {
      setActiveItem(menuId);
      // Close all submenus when clicking on a non-submenu item
      setExpandedMenus({
        hr: false,
        workStations: false,
        settings: false
      });
    }
  };

  // Handle submenu item click
  const handleSubMenuClick = (menuId, subItemId) => {
    setActiveItem(menuId);
    setActiveSubItem(subItemId);
  };
  return (
    <aside className=' sticky top-0 h-screen '>
       <div className="w-64 bg-white border-r border-gray-200 flex flex-col ">
              <div className="flex items-center justify-center py-4 border-b border-gray-200">
                <img src={logo} alt="Power Line Gas" className="h-12" />
              </div>
              
              <div className="flex items-center px-4 py-3 border-b border-gray-200">
                <div className="w-10 h-10 rounded-[10px] bg-gray-300 overflow-hidden flex-shrink-0">
                  <img src={userprofile} alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="ml-3 space-y-2">
                  {/* <div className=" text-Neutral-600 flex gap-1 items-center font-poppins font-medium text-[12px] leading-[100%] tracking-[0px] text-right capitalize"><span>Good Morning</span> <span className='pt-0.5'><IoMdSunny  className="text-Primary-400"/></span></div> */}

                  {/*  */}
{/* Dynamic greeting based on time of day */}
<div className="text-Neutral-600 flex gap-1 items-center font-poppins font-medium text-[12px] leading-[100%] tracking-[0px] text-right capitalize">
  <span>
    {new Date().getHours() >= 5 && new Date().getHours() < 18 
      ? "Good Morning" 
      : "Good Evening"}
  </span> 
  <span className='pt-0.5'>
    {new Date().getHours() >= 5 && new Date().getHours() < 18 
      ? <IoMdSunny className="text-Primary-400"/> 
      : <FaMoon className="text-blue-950"/>}
  </span>
</div>
                  {/*  */}
                  
                  <div className=" font-poppins font-semibold text-[16px] text-Neutral-1500 leading-[100%] tracking-[0%] text-right capitalize">Ahmed Hossam</div>
                
                </div>
              </div>
              
              <div className="font-poppins font-semibold text-[12px] leading-[14px] tracking-[0px] text-Neutral-600 gap-[130px] p-[12px]  uppercase">Main</div>
              
              <div className="flex-1 overflow-y-auto h-64 max-h-[calc(100vh-200px)]">
                {sidebarItems.map((item) => (
                  <div key={item.id}>
                    {/* Main menu item */}
                    <Link to={`/${item.link}`} 
                      className={`flex  items-center px-4 py-3 cursor-pointer  ${activeItem === item.id && !item.hasSubmenu ? 'bg-Primary-400 !text-white ' : 'text-Neutral-1500'}`}
                      onClick={() => handleMenuItemClick(item.id, item.hasSubmenu)}
                    >
                      <div className={`mr-3 ${activeItem === item.id && !item.hasSubmenu ? ' text-white' : 'text-Neutral-600'}`}>
                        {item.icon}
                      </div>
                      <span className={`font-poppins font-medium text-[16px] leading-[100%] tracking-[0px] align-middle ${activeItem === item.id && !item.hasSubmenu ? "text-white" :"text-Neutral-600"}   flex-1`}>{item.label} {item.subtext && <span className="text-Neutral-600 text-[14px]">{item.subtext}</span>}</span>
                      {item.hasSubmenu && (
                        expandedMenus[item.id] ? 
                        "" : 
                        <FaChevronDown  className={`text-sm ${activeItem === item.id ? 'text-Neutral-600' : 'text-Neutral-600'}`} />
                      )}
                    </Link>
                    
                    {/* Submenu items */}
                    {item.hasSubmenu && expandedMenus[item.id] && (
                      <div className="  pl-10 pr-4 mb-2 ">
                        {item.submenu.map((subItem) => (
                       <div key={subItem.id} className='border-l-2 border-Neutral-600 ps-2  '>
                           <div 
                            
                            className={`py-2 text-center text-sm cursor-pointer border  border-Neutral-600 rounded-md ${activeSubItem === subItem.id ? 'bg-Primary-400 font-medium text-white' : 'text-Neutral-600 border-Neutral-600 rounded-md'}`}
                            onClick={() => handleSubMenuClick(item.id, subItem.id)}
                          >
                            {subItem.label}
                          </div>
                          <div className='py-1'></div>
                       </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
    </aside>
  )
}
