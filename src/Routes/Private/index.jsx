import { MasterLayout } from "App/Common/Layout/Master-layout";
import React from "react";
import { Navigate } from "react-router-dom";

import { useAppContext } from "State";

export const PrivateRoute = ({ children }) => {
  const { authContext } = useAppContext();

  return authContext?.isAuthenticated ? (
    <MasterLayout>{children}</MasterLayout>
  ) : (
    <Navigate to="/login" />
  );
};
