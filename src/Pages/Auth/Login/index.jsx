import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet,  } from 'react-helmet-async';

import { Login } from 'App/Auth/Login';

import { classnames } from './ducks/classNames';

import loginBg from 'Assets/images/teacher/login/teacher-login.jpg';
import logo from 'Assets/images/Logo/logo.svg';

// import { useName } from "./useName";

// import { className } from "./class";

// function reducer(state, action) {
//   switch (action.type) {
//     case "notification": {
//       return { ...state, notification: !state.notification };
//     }
//     case "menu": {
//       return { ...state, menu: !state.menu };
//     }
//     default:
//       throw new Error();
//   }
// }

export const LoginPage = () => {
  // const initialState = { notification: false, menu: false };
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const { name } = useName();

  return (
    <>
      <Helmet>
        <title>Eduhub - Login</title>
      </Helmet>
      <div className={classnames.container}>
        <div className={classnames.formContainer}>
          <div className="max-w-md mx-auto p-5">
            <div className="mb-8 logo-container">
              <img src={logo} alt="logo" />
            </div>
            <h1 className={classnames.heading}>
              Free and user-friendly teaching platform.
            </h1>
            <p className={classnames.subheading}>
              Free support all week. Send questions, handle students and manage
              your classes in few clicks.
            </p>
            <Login />
            <div className="flex items-center gap-4 mt-10 pl-2">
              <p className="text-sm text-slate-700">Don't have an account?</p>
              <Link to="/register">
                <button className={classnames.redirectButton}>Sign up</button>
              </Link>
            </div>
          </div>
          <div className="w-full h-screen">
            <img
              src={loginBg}
              loading="lazy"
              className="w-full h-full object-cover"
              alt="teacher working on laptop"
            />
          </div>
        </div>
      </div>
      {/* <div>{name}</div>

      <div>{state.menu ? "True" : "False"}</div>
      <div>{state.notification ? "True" : "False"}</div>
      <button onClick={() => dispatch({ type: "notification" })}>
        notification
      </button>
      <br />
      <button onClick={() => dispatch({ type: "menu" })}>menu</button> */}
    </>
  );
};
