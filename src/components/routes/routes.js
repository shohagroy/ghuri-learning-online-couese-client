import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllCourse from "../Pages/Course/AllCourse";
import Course from "../Pages/Course/Course";
import CourseDetails from "../Pages/Course/CourseDetails";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/"),
        element: <Home />,
      },
      {
        path: "/courses",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <Course />,
        children: [
          {
            path: "/courses",
            loader: () => fetch("http://localhost:5000/courses"),
            element: <AllCourse />,
          },
          {
            path: "/courses/details/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:5000/courses/details/${params.id}`),
            element: <CourseDetails />,
          },
        ],
      },
    ],
  },
]);
