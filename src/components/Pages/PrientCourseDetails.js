import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/logo.svg";

import Pdf from "react-to-pdf";
const ref = React.createRef();

const PrientCourseDetails = () => {
  const studenDetails = JSON.parse(localStorage.getItem("enrollCourse"));

  const { name, email, add, city, state, courseCategory, courseName } =
    studenDetails;

  return (
    <div className=" bg-[#0f256e] pt-28">
      <div className="flex justify-center flex-col items-center max-w-[1200px] mx-auto">
        <div
          ref={ref}
          // style={{ width: 800, height: 500 }}
          className="bg-white w-100 h-100 md:w-[800px] md:h-[500px] p-3"
        >
          <div className="text-gray-900 text-black border-2 border-black my-4 p-3">
            <div className="p-5 w-100 h-100">
              <img className="h-[40px] mb-10" src={image} alt="" />
              <p className="text-xl">Student Details:</p>
              <p>
                Name: <strong>{name}</strong>
              </p>
              <p>
                Email: <strong>{email}</strong>
              </p>
              <p>
                Address: <strong>{add}</strong>, City: <strong>{city}</strong>,
                State: <strong>{state}</strong>
              </p>
              <div className="mt-3 p-2 w-100">
                <h2 className="text-2xl font-bold ">Enrollment Details</h2>
                <table className="min-w-full text-xs border border-black">
                  <colgroup>
                    <col className="border border-black" />
                    <col className="" />
                  </colgroup>
                  <thead className="bg-gray-300/30 ">
                    <tr className="text-left">
                      <th className="p-3 text-center border border-black">
                        Course Category
                      </th>
                      <th className="p-3 text-center border border-black">
                        Course Name & Course Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b text-center border-opacity-20 border-gray-300 bg-gray-300/10">
                      <td className="p-3 ">
                        <p>{courseCategory}</p>
                      </td>
                      <td className="p-3">
                        <p>{courseName}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-5 w-full">
          <Link
            to="/"
            className="py-3 rounded-md w-[180px] text-center bg-[#00CC83] text-white font-bold text-xl mr-1"
          >
            Back to Home
          </Link>

          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="py-3 rounded-md ml-1 w-[180px] text-center bg-[red] text-white font-bold text-xl"
              >
                <span>Download</span>
              </button>
            )}
          </Pdf>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PrientCourseDetails;
