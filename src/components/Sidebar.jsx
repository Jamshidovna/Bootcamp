import React, { useState } from 'react'
import "./Sidebar.css"
import {FaBars, FaRegChartBar,} from 'react-icons/fa';
import { SlBasket } from "react-icons/sl";
import { FaUserGroup } from "react-icons/fa6";
import { SiGooglemarketingplatform } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo_img.svg'





export default function Sidebar({children}) {

   const [isOpen,setIsOpen] = useState (false);
   const toggle = () => setIsOpen (!isOpen);

   const menuItem=[
    {
      path:"/dashboard",
      name:"Дашборд",
      icon:<FaRegChartBar/>
    
    },
    {
      path:"/zakaz",
      name:"Заказы",
      icon: < SlBasket/>
    
    },
    {
      path:"/klient",
      name:"Клиенты",
      icon:<FaUserGroup />
    
    },
    {
      path:"/marketing",
      name:"Маркетинг",
      icon:<SiGooglemarketingplatform />
    
    }
   ]

   
  return (
    <div className='container'>
     <div style={{width: isOpen ? "350px" : "70px"}} className="sidebar bg-white text-black h-screen w-80 transition-all duration-500 ">
        <div className="top_section flex justify-around items-center p-5 ">
          <h1 style={{display: isOpen ? "block" : "none"}}  className="logo text-3xl">
            <div className='flex gap-4'>
            <img src={Logo} alt="" />
            <h2 className='text-[#0974E9] font-semibold text-2xl py-2 '>Delever</h2>
            </div>
            
          </h1>
          <div style={{marginLeft: isOpen ? "50px" : "0px"}}  className="bars flex text-2xl ml-10">
            <FaBars onClick={toggle}/>
          </div>
        </div>
      {
        menuItem.map((item, index)=>(
        
          <div className='px-2'>
              <NavLink to={item.path} key={index} className="link  flex rounded-s-xl rounded-e-xl mt-2  p-2.5 gap-4 transition-all duration-500   hover:text-gray-50 hover:bg-[#4094F7] " >
              <div className="icon px-1 mt-1.5">{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
              </NavLink>
          </div>
         
        ))
      }


     </div>
       <main className='w-full  bg-[#DCE9F9]'>{children}</main>
    
  </div>

  
  )
}
