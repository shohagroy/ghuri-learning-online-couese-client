import React from "react";

const PrimiumCourse = ({ course }) => {
  const { img, name } = course;
  return (
    <div>
      <div className=" m-4 rounded-md shadow-md bg-[#0f256e] text-gray-100">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-bold tracking-wide rounded-md bg-[#00CC83] text-white"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimiumCourse;
