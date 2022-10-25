import React from "react";

const FreeCategory = ({ image, name }) => {
  return (
    <div className="bg-white border rounded-lg border-gray-800 flex justify-center items-center flex-col">
      <img src={image} alt="" />
      <h3 className="text-xl text-center font-bold text-gray-700 border-t-2 border-black p-3">
        {name}
      </h3>
    </div>
  );
};

export default FreeCategory;
