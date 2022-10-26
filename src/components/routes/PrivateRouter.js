import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvaider } from "../AuthContex/AuthContex";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthProvaider);
  const location = useLocation();

  if (loading) {
    return (
      <div className="md:flex justify-center items-center h-screen ">
        <div className="flex flex-col h-[80vh] pt-[15vh] md:pt-0  w-100 m-2  rounded shadow-md sm:w-80 animate-pulse">
          <div className="h-48 border rounded-t  bg-gray-100"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300">
            <div className="w-full h-6 rounded bg-gray-400"></div>
            <div className="w-full h-6 rounded bg-gray-400"></div>
            <div className="w-3/4 h-6 rounded bg-gray-400"></div>
            <div className="w-full h-6 rounded bg-gray-400"></div>
            <div className="w-full h-6 rounded bg-gray-400"></div>
          </div>
        </div>
        <div className=" hidden md:flex flex-col h-[80vh] pt-[15vh] md:pt-0  w-100 m-2  rounded shadow-md sm:w-80 animate-pulse">
          <div className="h-48 border rounded-t  bg-gray-100"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300">
            <div className="w-full h-6 rounded bg-gray-400"></div>
            <div className="w-full h-6 rounded bg-gray-400"></div>
            <div className="w-3/4 h-6 rounded bg-gray-400"></div>
            <div className="w-full h-6 rounded bg-gray-400"></div>
            <div className="w-full h-6 rounded bg-gray-400"></div>
          </div>
        </div>
        <div className=" hidden md:flex flex-col h-[80vh] pt-[15vh] md:pt-0  w-100 m-2  rounded shadow-md sm:w-80 animate-pulse">
          <div className="h-48 border rounded-t  bg-gray-100"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300">
            <div className="w-full h-6 rounded bg-gray-400"></div>
            <div className="w-full h-6 rounded bg-gray-400"></div>
            <div className="w-3/4 h-6 rounded bg-gray-400"></div>
            <div className="w-full h-6 rounded bg-gray-400"></div>
            <div className="w-full h-6 rounded bg-gray-400"></div>
          </div>
        </div>
        <div className=" hidden md:flex flex-col h-[80vh] pt-[15vh] md:pt-0  w-100 m-2  rounded shadow-md sm:w-80 animate-pulse">
          <div className="h-48 border rounded-t  bg-gray-100"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300">
            <div className="w-full h-6 rounded bg-gray-400"></div>
            <div className="w-full h-6 rounded bg-gray-400"></div>
            <div className="w-3/4 h-6 rounded bg-gray-400"></div>
            <div className="w-full h-6 rounded bg-gray-400"></div>
            <div className="w-full h-6 rounded bg-gray-400"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ path: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
