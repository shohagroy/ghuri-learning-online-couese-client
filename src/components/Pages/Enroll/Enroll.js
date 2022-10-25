import React from "react";
import banar from "../../assets/enrollbanar.png";
import CheckOutFrom from "../../shared/CheckOutFrom";

const Enroll = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 p-2 py-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-700">
            Develop Your Skills, Learn Something New, and Grow Your Skills From
            Anywhere in the World!
          </h2>
          <p className="mt-2 py-2 text-gray-500">
            We understand better that online-based learning can make a
            significant change to reach students from all over the world! Giving
            options to learn better always can offer the best outcomes!
          </p>
          <div className="mt-5">
            <button className="py-3 px-8 bg-[#00CC83] text-white rounded-md font-bold">
              Join Free Trail
            </button>
          </div>
        </div>
        <div>
          <img className="" src={banar} alt="banar images" />
        </div>
      </div>

      <div className="mt-20">
        <CheckOutFrom />
      </div>
    </div>
  );
};

export default Enroll;
