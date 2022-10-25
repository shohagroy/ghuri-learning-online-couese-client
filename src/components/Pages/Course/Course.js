import React, { useState } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Coursebanar from "./Coursebanar";

const Course = () => {
  const [toggle, setToggle] = useState(false);

  const allCourses = useLoaderData();

  return (
    <div>
      <Coursebanar />

      <div className="bg-[#0f256e]">
        <div className="flex py-10 relative">
          <div
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer bg-green-500 md:hidden fixed z-50 top-[95vh] "
          >
            <span className="text-white  left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
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
          </div>
          <div
            className={`${
              toggle ? "fixed" : "hidden"
            } p-5 h-screen md:sticky pt-[10vh] md:block md:pt-0 top-0 z-30  bg-white`}
          >
            {allCourses.map((course) => (
              <NavLink
                onClick={() => setToggle(!toggle)}
                to={`../courses/details/${course.id}`}
                key={course.id}
              >
                <button className="py-3 md:block w-full px-8 my-1 text-white font-bold text-xl  bg-[#00CC83]">
                  {course.category}
                </button>
              </NavLink>
            ))}
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Course;
