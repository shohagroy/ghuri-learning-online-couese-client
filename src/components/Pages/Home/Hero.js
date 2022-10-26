import React from "react";
import { Link } from "react-router-dom";
import rightImage from "../../assets/hero-two-right.png";

const Hero = () => {
  return (
    <div className="w-full  bg-[#0f256e] mb-28">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 py-10">
        <div className="visible md:hidden ">
          <img
            className="p-10 float-right mt-20  w-[400px]"
            src={rightImage}
            alt="side-image"
          />
        </div>

        <div className="flex justify-center flex-col">
          <h1 className=" md:mt-[200px] mx-2 text-5xl text-white font-bold font-serif">
            Build Bright Life? <br /> Learn Many Things Us
          </h1>
          <div className="text-xl text-white font-bold mx-2 mt-8 md:flex justify-between">
            <p className="flex items-center">
              <span className="bg-[#00CC83] mr-1  rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              Experts Advisors
            </p>
            <p className="flex items-center">
              <span className="bg-[#00CC83] mr-1  rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              Many Courses
            </p>
            <p className="flex items-center">
              <span className="bg-[#00CC83] mr-1  rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              Events & Program
            </p>
          </div>

          <div className="mt-8 mx-2">
            <Link
              to="enroll"
              className="py-4 text-xl px-8 rounded-xl bg-[#00CC83] text-white font-bold"
            >
              Registration Now
            </Link>
          </div>
        </div>
        <div className="hidden md:block ">
          <img
            className=" p-10 float-right md:mt-20  w-[450px]"
            src={rightImage}
            alt="side-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
