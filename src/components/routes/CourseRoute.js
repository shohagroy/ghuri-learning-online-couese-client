import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllCourse from "../Pages/Course/AllCourse";

const CourseRoute = () => {
  const courseRouter = createBrowserRouter([
    { path: "/courses", element: <AllCourse /> },
  ]);
  return (
    <div>
      <RouterProvider router={courseRouter}></RouterProvider>
    </div>
  );
};

export default CourseRoute;
