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
      </div>

      <Link
        to="/courses"
        className="float-right py-3 mt-3 px-8 bg-[#00CC83] text-white rounded-md font-bold"
      >
        See Full Details
      </Link>
    </div>
  );
};

export default Primium;
