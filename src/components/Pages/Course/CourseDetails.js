import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { category, details, duration, img, live, name, price, video } =
    courseDetails;

  const options = {
    orientation: "landscape",
  };
  return (
    <div ref={ref}>
      <div className="w-100 mx-2 md:mx-8 p-4 shadow-md bg-white text-gray-900">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <h3 className="text-lg md:text-2xl font-bold font-serif">
              {category}
            </h3>
          </div>
          <p className=" md:text-xl font-bold text-[#00CC83]">Price: {price}</p>

          <Pdf
            targetRef={ref}
            filename="code-example.pdf"
            options={options}
            x={1}
            y={1}
            scale={0.8}
          >
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="flex bg-gray-800 text-white font-bold p-2 rounded-md"
              >
                PDF
                <span>
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
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </span>
              </button>
            )}
          </Pdf>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={img}
              alt={category}
              className="block object-cover md:h-[70vh] object-center w-full rounded-md bg-gray-100"
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
          <Link
            to="/enroll"
            className=" bg-[#00CC83] rounded-md text-white font-bold text-xl py-3 px-8"
          >
            Get premium access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
