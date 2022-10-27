import React from "react";
import { Link } from "react-router-dom";
import banarImage from "../../assets/courseBanar.webp";

const Coursebanar = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto bg-white grid md:grid-cols-2 px-2">
        <div className="flex justify-center mt-28  flex-col ">
          <h1 className="font-bold text-3xl">What do you want to learn?</h1>
          <p className="py-2">
            All the best courses from the best instructors in the country are
            now on one platform.
          </p>
          <div className="mt-10 hidden md:block">
            <Link
              to="/enroll"
              className="py-3 px-8 bg-[#00CC83] text-white font-bold text-xl rounded-lg"
            >
              Enroll Now
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-[400px] float-right mt-[100px]"
            src={banarImage}
            alt="banar Image"
          />

          <div className="absolute center m-4  bottom-0 md:hidden">
            <button className="py-3 px-8 bg-[#00CC83] text-white font-bold text-xl rounded-lg">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursebanar;
