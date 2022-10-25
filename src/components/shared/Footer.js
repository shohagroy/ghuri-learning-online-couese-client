import React from "react";

import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className=" bg-white">
      <div className="text-[#E5BD43] uppercase flex justify-center items-center flex-col h-[400px]">
        <img className="w-[200px] mb-5" src={logo} alt="" />
        <h2 className="text-3xl font-serif font-bold">
          GET NEWS & OFFERS subscribe us
        </h2>
        <div className="my-5 flex ">
          <input
            className="w-[500px] pl-4 bg-red-200"
            type="email"
            placeholder="Enter your email address"
          />
          <button className="text-white bg-[#E5BD43] py-3 px-8 font-bold">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="text-white px-10 pb-10 flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <h2 className="text-3xl font-bold font-serif text-[#E5BD43]">
              Roxal hotel
            </h2>
            <div className="flex">
              <p className="pr-5 border-r-2">
                Tel: <span className="text-[#E5BD43]">+01 222 999 1414</span>
              </p>
              <p className="pl-3">
                E-mail:{" "}
                <span className="text-[#E5BD43]">roxal@exemple.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex text-2xl">
          <a
            className="px-3 hover:text-3xl duration-300 hover:text-[#E5BD43]"
            href=""
          >
            <i className="fa-brands  fa-facebook"></i>
          </a>
          <a
            className="px-3 hover:text-3xl duration-300 hover:text-[#E5BD43]"
            href=""
          >
            <i className="fa-brands  fa-twitter"></i>
          </a>
          <a
            className="px-3 hover:text-3xl duration-300 hover:text-[#E5BD43]"
            href=""
          >
            <i className="fa-brands  fa-instagram"></i>
          </a>
          <a
            className="px-3 hover:text-3xl duration-300 hover:text-[#E5BD43]"
            href=""
          >
            <i className="fa-brands  fa-github"></i>
          </a>
          <a
            className="px-3 hover:text-3xl duration-300 hover:text-[#E5BD43]"
            href=""
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
