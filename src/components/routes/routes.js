import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Main from "../layout/Main";
import AllCourse from "../Pages/Course/AllCourse";
import Course from "../Pages/Course/Course";
import CourseDetails from "../Pages/Course/CourseDetails";
import Enroll from "../Pages/Enroll/Enroll";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import PrientCourseDetails from "../Pages/PrientCourseDetails";
import Login from "../shared/Login";
import Regestation from "../shared/Regestation";
import PrivateRoute from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("https://ghoori-learning.vercel.app/"),
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      { path: "/regestation", element: <Regestation /> },
      {
        path: "/prient-enroll",
        element: (
          <PrivateRoute>
            <PrientCourseDetails />
          </PrivateRoute>
        ),
      },
      { path: "/blog", element: <Blog /> },
      {
        path: "/courses",
        loader: () => fetch("https://ghoori-learning.vercel.app/courses"),
        element: <Course />,
        children: [
          {
            path: "/courses",
            loader: () => fetch("https://ghoori-learning.vercel.app/courses"),
            element: <AllCourse />,
          },
          {
            path: "/courses/details/:id",
            loader: ({ params }) =>
              fetch(
                `https://ghoori-learning.vercel.app/courses/details/${params.id}`
              ),
            element: <CourseDetails />,
          },
        ],
      },
      {
        path: "/enroll",
        element: (
          <PrivateRoute>
            <Enroll />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
