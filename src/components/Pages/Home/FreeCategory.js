import React from "react";

const FreeCategory = ({ image, name }) => {
  return (
    <div className="bg-gray-200 border rounded-lg border-gray-800 flex justify-center items-center flex-col">
      <img src={image} alt="" />
      <div className="border-t-2 w-full border-black">
        <h3 className="text-xl text-center font-bold text-gray-500  p-3">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default FreeCategory;
