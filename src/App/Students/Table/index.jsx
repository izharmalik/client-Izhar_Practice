import React from "react";

import { Header } from "./Header";
import { Row } from "./Row";

import { tableData } from "App/Students/ducks/initial";

export const Table = () => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <Header />
      <Row data={tableData} />
    </div>
  );
};
