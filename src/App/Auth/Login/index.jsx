import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormInput } from "App/Common/UI/Form-Input";
import { useAppContext } from "State";
import { Loader } from "App/Common/UI/Loader";

import { formState, errorState } from "./ducks/initial";
import { classnames } from "./ducks/classNames";
import { validateLogin } from "./ducks/utils";
import { loginToDashboard } from "Lib/Auth";

export const Login = () => {
  const [form, setForm] = useState(formState);
  const [error, setError] = useState(errorState);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);

  const navigate = useNavigate();
  const { setAuthContext } = useAppContext();

  useEffect(() => {
    data && successfulLogin();
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((currVal) => ({ ...currVal, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateLogin(form, error, setError)) {
      setLoading(true);

      const url = `${process.env.REACT_APP_BASEURL}/teacher-login`;
      const body = { ...form, role_id: 2 };

      loginToDashboard(url, body, setData, setLoading);
    }
  };

  const successfulLogin = () => {
    if (data?.status) {
      setForm(formState);
      setAuthContext({
        ...data?.user,
        isAuthenticated: data?.isAuthenticated,
      });
      navigate("/dashboard");
      localStorage.setItem(
        "userAuth",
        JSON.stringify({
          ...data?.user,
          isAuthenticated: data?.isAuthenticated,
        })
      );
    }
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit} noValidate>
      <div className="my-5">
        <FormInput
          type="email"
          label="Email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={form?.email}
          onChange={handleChange}
        />
        {error.errorFor === "email" && (
          <p className="text-sm mt-3 text-red-500">{error.message}</p>
        )}
      </div>
      <div className="my-5">
        <FormInput
          type="password"
          label="Password"
          name="password"
          id="password"
          placeholder="Your secret password"
          value={form?.password}
          onChange={handleChange}
        />
        {error.errorFor === "password" && (
          <p className="text-sm mt-3 text-red-500">{error.message}</p>
        )}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <button type="submit" className={classnames?.submitButton}>
          Go to Dashboard
        </button>
      )}
    </form>
  );
};
