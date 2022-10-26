import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ course }) => {
  const { category, name, img, details } = course;
  return (
    <div className="relative">
      <div className=" h-100 md:h-[550px] p-3 rounded-md shadow-lg bg-gray-100 text-gray-900">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-900"
        />
        <div className="mt-6 mb-2">
          <span className="block text-md font-medium tracking-widest uppercase text-gray-700">
            {category}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        </div>
        <p className="text-gray-900">{details.slice(0, 200)}...</p>
        <div className=" block md:absolute bottom-2 my-2 w-full">
          <div className=" w-full">
            <Link to={`../courses/details/${course.id}`}>
              <button className="py-3 px-8 bg-[#00CC83] rounded-md text-white font-semibold">
                See Details
              </button>
            </Link>
            <Link
              to="/enroll"
              className="py-3 px-8 ml-3  bg-[#00CC83] rounded-md text-white font-semibold"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
