// import React from 'react';
// import { FaHome } from "react-icons/fa";

import { IoIosHome, IoMdStats } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {

const links = (
    <>
    <li><NavLink to={"/"} className={({isActive})=> ` ${isActive ? "text-white bg-gray-700":""} `}><IoIosHome /> Home </NavLink></li>
      <li> <NavLink to={"/friends"} className={({isActive})=> ` ${isActive ? "text-white bg-gray-700":""} `}><RiTimeLine />
        TimeLine</NavLink>
      </li>
      <li> <NavLink to={"/stats"} className={({isActive})=> ` ${isActive ? "text-white bg-gray-700":""} `}><IoMdStats />
        Stats</NavLink>
      </li>
    
    </>
)



    return (
      <div className="navbar bg-base-100 shadow-sm px-12.5">
  <div className="flex-1">
    <h2 className=" text-[24px]"> <span className="text-[#1F2937] font-bold">Keen</span>
    <span className="text-[#244D3F]">Keeper</span></h2>
  </div>


  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 space-x-4">
      {links}
    </ul>
  </div>
</div>
    );
};

export default Navbar;