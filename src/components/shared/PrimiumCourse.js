import React from "react";
import { Link } from "react-router-dom";

const PrimiumCourse = ({ course }) => {
  const { img, name } = course;
  return (
    <div>
      <div className=" m-4 border-2 rounded-md shadow-xl bg-[#0f256e] text-gray-100">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-white"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          </div>
          <Link
            to="/enroll"
            className="flex items-center justify-center w-full p-3 font-bold tracking-wide rounded-md bg-[#00CC83] text-white"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrimiumCourse;
