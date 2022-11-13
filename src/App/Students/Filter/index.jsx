import React from "react";

import { Search } from "./Search";
import { roles, plan, status } from "App/Students/ducks/initial";

export const Filter = () => {
  return (
    <div className="p-5 bg-white shadow-md rounded-lg mb-5">
      <h2 className="text-md text-slate-500">Filters</h2>
      <div className="flex justify-between items-center gap-8 mt-4">
        <div className="w-full">
          <p className="text-sm text-slate-400 font-light">Role</p>
          <Search data={roles} />
        </div>
        <div className="w-full">
          <p className="text-sm text-slate-400">Plan</p>
          <Search data={plan} />
        </div>
        <div className="w-full">
          <p className="text-sm text-slate-400">Status</p>
          <Search data={status} />
        </div>
      </div>
    </div>
  );
};
