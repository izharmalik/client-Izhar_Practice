import React from "react";

import { Search } from "App/Students/Filter/Search";
import { entries } from "App/Students/ducks/initial";
import { FormInput } from "App/Common/UI/Form-Input";

export const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center gap-3 p-5">
        <div className="flex items-center gap-2">
          <p className="text-sm text-slate-500">Show</p>
          <Search data={entries} />
          <p className="text-sm text-slate-500">entries</p>
        </div>
        <div className="flex items-center gap-4 max-w-lg w-full">
          <div className="w-full">
            <FormInput type="text" placeholder="Search..." />
          </div>
          <button className="mt-2 inline-block px-5 py-3 bg-blue-600 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out whitespace-nowrap">
            Add Student
          </button>
        </div>
      </div>
      <div className="bg-slate-200 py-3 px-5 grid grid-cols-6 gap-2">
        <p className="uppercase text-sm text-slate-600 font-semibold">user</p>
        <p className="uppercase text-sm text-slate-600 font-semibold">email</p>
        <p className="uppercase text-sm text-slate-600 font-semibold">role</p>
        <p className="uppercase text-sm text-slate-600 font-semibold">plan</p>
        <p className="uppercase text-sm text-slate-600 font-semibold">status</p>
        <p className="uppercase text-sm text-slate-600 font-semibold">
          actions
        </p>
      </div>
    </div>
  );
};
