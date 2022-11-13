import React from "react";
import { Helmet } from "react-helmet-async";

import { Questions } from "App/Questions";

export const QuestionsPage = () => {
  return (
    <>
      <Helmet>
        <title>Eduhub - Questions</title>
      </Helmet>
      <Questions />
    </>
  );
};
