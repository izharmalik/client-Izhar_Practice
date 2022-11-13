import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsChatLeftDots } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { FaQq } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";

import { ClickAwayListener } from "App/Common/Click-away";
import { useAppContext } from "State";

export const Navbar = () => {
  const { authContext } = useAppContext();
  const [user, setUser] = useState(authContext);
  const [dropdown, setDropdown] = useState(false);

  const handleClickOutside = () => {
    setDropdown(false);
  };

  const handleClick = () => {
    setDropdown(true);
  };

  return (
    <div className="bg-white row-start-2 row-end-3 shadow-md px-5 py-3 rounded-lg flex justify-end col-start-3 col-end-4">
      <div
        className={`relative w-40 cursor-pointer ${dropdown ? "active" : ""}`}
      >
        <ClickAwayListener onClickOutside={handleClickOutside}>
          <div className="flex gap-3 justify-end" onClick={handleClick}>
            <div className="text-right">
              <h2 className="text-md font-semibold text-slate-600">
                {user?.firstname}
              </h2>
              <p className="text-sm text-slate-400">teacher</p>
            </div>
            <img
              src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-5/img/13-small.d796bffd.png"
              alt={user?.firstname}
              className="h-10 w-10 rounded-full"
            />
          </div>
        </ClickAwayListener>
        <div className="bg-white absolute z-10 w-full rounded shadow top-16 dropdown">
          <p className="flex gap-2 items-center text-md px-4 py-2 cursor-pointer hover:bg-purple-100 hover:text-blue-700 text-slate-500">
            <CgProfile />
            Profile
          </p>
          <p className="flex gap-2 items-center text-md px-4 py-2 cursor-pointer hover:bg-purple-100 hover:text-blue-700 text-slate-500">
            <BsChatLeftDots />
            Inbox
          </p>
          <p className="flex gap-2 items-center text-md px-4 py-2 cursor-pointer hover:bg-purple-100 hover:text-blue-700 text-slate-500">
            <AiOutlineSetting />
            Setting
          </p>
          <p className="flex gap-2 items-center text-md px-4 py-2 cursor-pointer hover:bg-purple-100 hover:text-blue-700 text-slate-500">
            <FaQq />
            Faq
          </p>
          <p className="flex gap-2 items-center text-md px-4 py-2 cursor-pointer hover:bg-purple-100 hover:text-blue-700 text-slate-500">
            <GrPowerShutdown />
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};
