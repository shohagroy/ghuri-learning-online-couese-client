import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  return (
    <div className="absolute z-50   h-[10vh] w-full text-white bg-gray-100/40">
      <div className="max-w-[1200px] mx-auto ">
        {/* Desktop Navigation Menu  */}
        <div className="flex justify-between z-50 items-center mx-3 h-[10vh]   mg:m-0">
          <img className="h-[40px] md:h-[60px]" src={logo} alt="Logo" />
          <div className="items-center hidden md:flex">
            <ul className="flex">
              <NavLink to="/" className="p-3">
                Home
              </NavLink>
              <NavLink to="/courses" className="p-3">
                Courses
              </NavLink>
              <NavLink to="/FAQ" className="p-3">
                FAQ
              </NavLink>
              <NavLink to="/blog" className="p-3">
                Blog
              </NavLink>
            </ul>
            <div>
              <button className="px-5 py-1 bg-blue-400 text-white font-bold rounded-lg">
                Login
              </button>
            </div>
          </div>

          {/* hambargar */}
          <div onClick={() => setToggle(!toggle)} className=" md:hidden">
            <span className={`${toggle ? "hidden" : "block"} cursor-pointer`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </span>

            <span className={`${toggle ? "block" : "hidden"} cursor-pointer`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* mobile navigation menu  */}
        <div className="relative z-50 ">
          <div
            className={`${
              toggle ? "top-0" : "top-[-5000px]"
            } absolute  left-0 duration-500 w-full h-[90vh] bg-gray-800/80`}
          >
            <ul>
              <li className="p-3 m-2 border-b-2 text-center">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="p-3 m-2 border-b-2 text-center">
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li className="p-3 m-2 border-b-2 text-center">
                <NavLink to="FAQ">FAQ</NavLink>
              </li>
              <li className="p-3 m-2 border-b-2 text-center">
                <NavLink to="blog">Blog</NavLink>
              </li>
            </ul>
            <button className="w-full bg-blue-600 my-5 rounded-2xl text-white py-2">
              Account
            </button>
            <div className="text-center">
              <p>
                <small>Login with</small>
              </p>
              <span className="text-xl ">
                <i className="fa-brands p-2 cursor-pointer hover:text-3xl duration-300 hover:text-orange-600 fa-facebook"></i>
                <i className="fa-brands p-2 cursor-pointer hover:text-3xl duration-300 hover:text-orange-600 fa-twitter"></i>
                <i className="fa-brands p-2 cursor-pointer hover:text-3xl duration-300 hover:text-orange-600 fa-google"></i>
                <i className="fa-brands p-2 cursor-pointer hover:text-3xl duration-300 hover:text-orange-600 fa-github"></i>
                <i className="fa-brands p-2 cursor-pointer hover:text-3xl duration-300 hover:text-orange-600 fa-linkedin"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
