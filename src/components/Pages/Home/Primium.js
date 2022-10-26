import React from "react";
import { Link } from "react-router-dom";
import PrimiumCourse from "../../shared/PrimiumCourse";

const Primium = ({ courses }) => {
  console.log(courses);

  return (
    <div className="max-w-[1200px] mx-auto ">
      <h3 className="text-3xl mx-4 font-bold font-serif">Our Priemum Course</h3>
      <div className="relative flex items-center justify-center w-full text-gray-50">
        <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            {courses.map((course) => (
              <PrimiumCourse key={course.id} course={course} />
            ))}
          </div>
        </div>
        <button
          aria-label="Slide forward"
          id="next"
          className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>

      <Link
        to="/courses"
        className="float-right py-3 px-8 bg-[#00CC83] text-white rounded-md font-bold"
      >
        See All Course
      </Link>
    </div>
  );
};

export default Primium;
