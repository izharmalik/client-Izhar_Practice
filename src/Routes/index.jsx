import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { DashboardPage } from "Pages/Dashboard";
import { LoginPage } from "Pages/Auth/Login";
import { RegisterPage } from "Pages/Auth/Register";
import { StudentsPage } from "Pages/Students";
import { QuestionsPage } from "Pages/Questions";

import { PublicRoute } from "./Public";
import { PrivateRoute } from "./Private";

export const AllRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/students"
        element={
          <PrivateRoute>
            <StudentsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/questions"
        element={
          <PrivateRoute>
            <QuestionsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute restricted={props.userAuth}>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute restricted={false}>
            <RegisterPage />
          </PublicRoute>
        }
      />
    </Routes>
  );
};
