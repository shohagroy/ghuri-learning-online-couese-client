import React from "react";
import { Link } from "react-router-dom";

const FreeCategory = ({ image, name }) => {
  return (
    <div className="bg-gray-200 border rounded-lg border-gray-800 flex justify-center items-center flex-col">
      <img src={image} alt="" />
      <div className="border-y-2 w-full border-black">
        <h3 className="text-xl text-center font-bold text-gray-500  p-3">
          {name}
        </h3>
      </div>
      <Link
        to="/enroll"
        className="w-full text-center py-2 rounded-b-lg text-white font-bold bg-[#00CC83]"
      >
        Enroll Now
      </Link>
    </div>
  );
};

export default FreeCategory;
