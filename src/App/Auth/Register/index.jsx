import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FormInput } from "App/Common/UI/Form-Input";

import { formState, errorState } from "./ducks/initial";
import { classNames } from "./ducks/classNames";
// import second from "first";

import RegisterBg from "Assets/images/teacher/Register/teacher-register.jpg";
import logo from "Assets/images/teacher/Register/logo.svg";
import {
  IoCallOutline,
  IoMailOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";

import { SlSocialTwitter, SlSocialFacebook } from "react-icons/sl";

export const Register = () => {
  const [form, setForm] = useState(formState);
  const [error, setError] = useState(errorState);

  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((currVal) => ({ ...currVal, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    setForm(formState);
  };

  return (
    <>
      {/* nav-sec */}
      <nav>
        <div className="container-fluid bg-blue-600 h-10 text-white flex justify-around items-center">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center m-2">
              <IoCallOutline />
              <a href="#">+91-9999978888</a>
            </div>
            <div className="flex justify-center items-center m-2">
              <IoMailOutline />
              <a href="#">example@gmail.com</a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <span div className="">
              <IoPersonOutline />
            </span>
            <button>Login/</button>
            <button>Register</button>
            <p className="ml-5"> Follow Us :</p>
            <span div className="mt-1 mx-4">
              <SlSocialTwitter />
            </span>
            <span div className="mt-1 mx-1 ">
              <SlSocialFacebook />
            </span>
          </div>
        </div>
        <div className="container mx-auto h-16 ">
          <div className=" flex justify-around items-center p-3">
            <div className="flex  justify-center items-center">
              <img className="w-40" src={logo} />
            </div>
            <div className=" w-full md:w-auto ">
              <ul className={classNames?.ul}>
                <li>
                  <a href="#"> Coaching Institutes</a>
                </li>
                <li>
                  <a href="#">Exam Categories</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Teachers</a>
                </li>
                <li>
                  <a href="#">Challenge Zone</a>
                </li>
                <li>
                  <a href="#">Quiz Zone</a>
                </li>
                <li className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center m-0 ">
                  <IoSearchOutline size="1.1rem" color="white" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* form-sec */}
      <div className="register_sec grid grid-cols-2  md:items-center  ">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 w-full md:w-3/3 max-w-10xl  ">
          <img className="xl" src={RegisterBg} />
        </div>
        <div className="flex col-start-2 row-start-1 row-end-2 col-end-3 flex-col items-center justify-center  ">
          <div className="text-blue-700 pb-4 text-center mt-3 mb-3 text-4xl font-bold">
            <h1>Register Free</h1>
          </div>
          <div className="bg-gray-700 w-full   md:w-4/6 max-w-lg p-6 pb-6 shadow-2xl  ">
            <form>
              <FormInput
                className="block text-gray-700 p-2 mt-1 mb-5 ml-0  w-full form-control text-small font-normal placeholder-black-700"
                id="Name"
                type="text"
                name="name"
                placeholder="Name"
                value={form?.name}
                onChange={handleChange}
              />
              <FormInput
                className="block text-gray-700 p-2 m-4 mb-5 ml-0 w-full form-control  text-lg font-normal placeholder-black-700"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={form?.email}
                onChange={handleChange}
              />
              <FormInput
                className="block text-gray-700 p-2 m-4 ml-0 mb-5 w-full form-control  text-lg font-normal placeholder-black-700"
                id="telephone"
                type="tell"
                name="tell"
                placeholder="Mobile"
                value={form?.tell}
                onChange={handleChange}
              />
              <div className="flex justify-center">
                <div className="mb-1 md:w-full  ">
                  <select
                    className="form-select appearance-none
                            block
                            w-full
                            px-2
                            py-2.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-200
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700  focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    placeholder="Select Your Exam Category"
                  >
                    <option selected>Select Your Exam Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <FormInput
                className="block text-gray-700 p-2 m-4 ml-0 w-full form-control text-lg font-normal placeholder-black-700"
                id="education"
                type="text"
                placeholder="Education"
                onChange={handleChange}
              />
              <div className="mb-3 form-check  flex justify-between">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="checked"
                  id="exampleCheck1"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label   "
                  htmlFor="exampleCheck1"
                ></label>
                <p className="text-white text-xs">
                  By submitted this form, you agree to the Terms & Privacy
                  policy
                </p>
              </div>
              <div className="flex justify-center">
                <button className={classNames?.submitButton}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* coures-sec */}

      <body class="font-mono bg-gray-400">
        <div class="container mx-auto">
          <div class="flex justify-center px-6 my-12">
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">
              <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-4/12 bg-cover rounded-l-lg bg-[url('/src/Assets/images/teacher/Register/teacher-register.jpg')]"></div>

              <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
                <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="firstName"
                      >
                        First Name
                      </label>
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="md:ml-2">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                      />
                      <p class="text-xs italic text-red-500">
                        Please choose a password.
                      </p>
                    </div>
                    <div class="md:ml-2">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="c_password"
                      >
                        Confirm Password
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                  </div>
                  <div class="mb-6 text-center">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Register Account
                    </button>
                  </div>
                  <hr class="mb-6 border-t" />
                  <div class="text-center">
                    <a
                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div class="text-center">
                    <a
                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="./index.html"
                    >
                      Already have an account? Login!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
