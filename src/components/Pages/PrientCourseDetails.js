import React from "react";

const PrientCourseDetails = () => {
  const studenDetails = JSON.parse(localStorage.getItem("enrollCourse"));

  const { name, email, add, city, state, courseCategory, courseName } =
    studenDetails;

  return (
    <div className=" bg-[#0f256e] pt-28">
      <div className="flex, max-w-[1200px] mx-auto h-[70%] justify-center items-center md:h-screen w-full">
        <div className="bg-white">
          <div className="container p-2 mx-auto sm:p-4 text-gray-100">
            <div className="text-gray-900 my-4">
              <div>
                <p className="text-xl">Student Details:</p>
                <p>
                  Name: <strong>{name}</strong>
                </p>
                <p>
                  Email: <strong>{email}</strong>
                </p>
                <p>
                  Address: <strong>{add}</strong>, City: <strong>{city}</strong>
                  , State: <strong>{state}</strong>
                </p>
              </div>
            </div>
            <h2 className="mb-4 text-2xl text-gray-900 font-semibold leading-tight">
              Invoices
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <colgroup>
                  <col className="w-[150px]" />
                  <col />
                  <col className="w-24" />
                </colgroup>
                <thead className="bg-gray-700 ">
                  <tr className="text-left">
                    <th className="p-3 text-center">Course Category</th>
                    <th className="p-3 text-center">
                      Course Name & Course Amount
                    </th>
                    <th className="p-3 text-center">Prient</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                    <td className="p-3">
                      <p>{courseCategory}</p>
                    </td>
                    <td className="p-3">
                      <p>{courseName}</p>
                    </td>

                    <td className="p-3 text-right ">
                      <button className="px-3 py-1 cursor-pointer font-semibold rounded-md bg-white text-gray-900">
                        <span>Prient</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrientCourseDetails;
