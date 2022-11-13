import React from "react";

import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const MasterLayout = ({ children }) => {
  return (
    <div className="grid master-layout min-h-screen gap-y-6">
      <Sidebar />
      <Navbar />
      <div className="col-start-3 col-end-4 row-start-3 row-end-4">{children}</div>
    </div>
  );
};
