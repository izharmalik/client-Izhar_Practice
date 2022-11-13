import React, { useState } from "react";

import { MdClear } from "react-icons/md";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BsCheck2 } from "react-icons/bs";

import { ClickAwayListener } from "App/Common/Click-away";

export const Search = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const handleClick = () => {
    setDropdown(true);
    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(() => e?.target?.value);
    setSelected(() => e?.target?.value);
  };

  const handleClear = () => {
    setSearch("");
    setSelected("");
  };

  const handleClickOutside = () => {
    setDropdown(false);
  };

  const handleDropdownClick = (name) => {
    setSelected(name);
    setSearch(name);
  };

  const filterData = props?.data?.filter((role) =>
    role?.name?.toLowerCase()?.includes(search?.toLowerCase())
  );

  return (
    <div className={`mt-1 relative ${dropdown ? "active" : ""}`}>
      <ClickAwayListener onClickOutside={handleClickOutside}>
        <div className="relative">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            type="text"
            value={selected}
            onClick={handleClick}
            onChange={handleChange}
          />
          <div className="absolute right-2 top-3 flex gap-2">
            {selected?.length >= 1 && (
              <div className="cursor-pointer" onClick={handleClear}>
                <MdClear className="text-gray-500" />
              </div>
            )}
            <HiOutlineChevronDown
              className={`${
                dropdown ? "rotate-180" : ""
              } transition-all ease-out duration-200 text-gray-500 text-md`}
            />
          </div>
        </div>
      </ClickAwayListener>
      <div className="bg-white shadow w-full rounded-lg absolute top-full mt-4 dropdown transition-all duration-500 ease-in-out z-10">
        {filterData?.length >= 1 ? (
          filterData?.map((data) => (
            <p
              key={data?.id}
              className={`text-sm px-4 py-2 cursor-pointer flex items-center justify-between ${
                selected?.toLowerCase() === data?.name?.toLowerCase()
                  ? "bg-blue-500 text-white hover:bg-blue-500 hover:text-white"
                  : "hover:bg-purple-100 hover:text-blue-700 text-slate-500 "
              }`}
              onClick={() => handleDropdownClick(data?.name)}
            >
              {data?.name}
              {selected?.toLowerCase() === data?.name?.toLowerCase() && (
                <BsCheck2 />
              )}
            </p>
          ))
        ) : (
          <p className="text-sm px-4 py-2 cursor-pointer hover:bg-purple-100 hover:text-blue-700 text-slate-500">
            Sorry, no matching options.
          </p>
        )}
      </div>
    </div>
  );
};
