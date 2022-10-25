import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Coursebanar from "./Coursebanar";

const Course = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      <Coursebanar />

      <div className="bg-[#0f256e]">
        <div className="flex py-10">
          <div className="w-[300px]">
            {allCourses.map((course) => (
              <NavLink to={`/course/${course.id}`} key={course.id}>
                <button className="py-3 w-full m-1 px-8 bg-[#00CC83]">
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
