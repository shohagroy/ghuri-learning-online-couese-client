import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  const { category, details, duration, id, img, live, name, price, video } =
    courseDetails;
  return (
    <div>
      <div className="w-100 mx-2 md:mx-8 p-4 shadow-md bg-white text-gray-900">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <h3 className="text-lg md:text-2xl font-bold font-serif">
              {category}
            </h3>
          </div>
          <p className=" md:text-xl font-bold text-[#00CC83]">Price: {price}</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={img}
              alt={category}
              className="block  md:h-[80vh] object-center w-full rounded-md bg-gray-100"
            />
            <div className="md:flex flex-col md:flex-row  md:items-center md:justify-between md:text-xl md:font-bold text-gray-600">
              <p>Course Duration: {duration}</p>
              <p>Pre-recorded video: {video}</p>
              <p>Live Class: {live}</p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl  font-bold text-black">{name}</h3>
            <p className="leading-snug text-gray-700">{details}</p>
          </div>
        </div>
        <div className="p-6 flex justify-end">
          <button className=" bg-[#00CC83] rounded-md text-white font-bold text-xl py-3 px-8">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
