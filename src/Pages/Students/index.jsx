import React from "react";
import { Helmet } from "react-helmet-async";

import { Students } from "App/Students";

export const StudentsPage = () => {
  return (
    <>
      <Helmet>
        <title>Eduhub - Students</title>
      </Helmet>
      <Students />
    </>
  );
};
