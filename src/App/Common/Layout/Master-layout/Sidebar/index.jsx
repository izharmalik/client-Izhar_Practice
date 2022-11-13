import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

import book from "Assets/images/Logo/book.svg";
import name from "Assets/images/Logo/name.svg";

export const Sidebar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`bg-white shadow-md p-5 fixed h-screen no-expand w-full top-0 z-20 ${
        hovered ? "expand" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to="/dashboard" className="block mb-5">
        <div className="mb-8 grid gap-2 custom-2-cols items-center">
          <div className="w-7">
            <img src={book} alt="eduhub" className="" />
          </div>
          <div className="w-24">
            <img src={name} alt="eduhub" className="hide" />
          </div>
        </div>
      </Link>
      <Link to="/dashboard" className="block mb-10">
        <div className="grid gap-2 custom-2-cols items-end hover:pl-3 transition-all duration-200">
          <AiOutlineHome className="text-slate-500 w-7 h-7" />
          <p className="hide text-md text-gray-700">Dashboard</p>
        </div>
      </Link>
      <div className="items-center mb-6">
        <BsThreeDots
          className={`text-slate-500 w-7 h-7 ${hovered ? "hidden" : "block"}`}
        />
        <p className={`text-sm text-gray-500 uppercase ${hovered ? "block" : "hidden"}`}>
          Apps & Pages
        </p>
      </div> 
      <div className="">
        <Link to="/students" className="block mb-5">
          <div className="grid gap-2 custom-2-cols items-end hover:pl-3 transition-all duration-200">
            <AiOutlineUsergroupAdd className="text-slate-500 w-7 h-7" />
            <p className="hide text-md text-gray-700">Students</p>
          </div>
        </Link>
        <Link to="/questions" className="block mb-5">
          <div className="grid gap-2 custom-2-cols items-end hover:pl-3 transition-all duration-200">
            <AiOutlineQuestionCircle className="text-slate-500 w-7 h-7" />
            <p className="hide text-md text-gray-700">Questions</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
