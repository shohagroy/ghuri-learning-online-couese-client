import React from "react";

import image1 from "../../assets/cr-1.png";
import image2 from "../../assets/cr-2.png";
import image3 from "../../assets/cr-3.png";
import image4 from "../../assets/cr-4.png";
import image5 from "../../assets/cr-5.png";
import image6 from "../../assets/cr-6.png";
import image7 from "../../assets/cr-7.png";
import image8 from "../../assets/cr-8.png";
import image9 from "../../assets/cr-9.png";

import FreeCategory from "./FreeCategory";

const AboutLearn = () => {
  return (
    <div className="bg-[#0f256e]">
      <div className="mt-20 p-2">
        <div className="max-w-[1200px] mx-auto text-center">
          <h3 className="text-2xl font-bold font-serif text-[#0f256e]">
            How About Learn Us
          </h3>
          <h2 className="text-5xl font-bold my-5">
            Opportunity For Online Learning
          </h2>
          <div className="grid md:grid-cols-3 my-10">
            <div className="flex md:justify-center items-center m-2">
              <span className="bg-[#00CC83] text-white rounded-full mr-3 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <h4 className="text-2xl font-bold text-gray-600">
                Courses From Experts
              </h4>
            </div>
            <div className="flex m-2 md:justify-center items-center">
              <span className="bg-[#00CC83] text-white rounded-full mr-3 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <h4 className="text-2xl font-bold text-gray-600">
                Program Video Update
              </h4>
            </div>
            <div className="flex m-2 md:justify-center items-center">
              <span className="bg-[#00CC83] text-white rounded-full mr-3 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <h4 className="text-2xl font-bold text-gray-600">
                Over 500+ Quality Topics
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-[#0f256e] py-10">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Our Other Course
              </h3>
              <p className="text-xl text-gray-100">
                Registration to 1 Month Free
              </p>
            </div>
            <div className="flex items-center">
              <button className="py-2 px-4 text-white font-bold rounded-lg text- ml-2 bg-[#00CC83]">
                Registration Now
              </button>
            </div>
          </div>

          <div className="max-w-[1200px] mx-auto">
            <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <FreeCategory image={image1} name={"Creativity & Design"} />
              <FreeCategory image={image2} name={"Professional Development"} />
              <FreeCategory image={image3} name={"Technology"} />
              <FreeCategory image={image4} name={"Personal Developmemt"} />
              <FreeCategory image={image5} name={"Sales & Marketing"} />
              <FreeCategory image={image6} name={"Freelance Marketplace"} />
              <FreeCategory image={image7} name={"Development"} />
              <FreeCategory image={image8} name={"Language Learning"} />
              <FreeCategory image={image9} name={"Business "} />
              <FreeCategory image={image2} name={"Teaching & Academic "} />
              <FreeCategory image={image3} name={"WorkShop & Live Class "} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLearn;
