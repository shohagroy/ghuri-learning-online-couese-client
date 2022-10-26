import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllCourse from "../Pages/Course/AllCourse";
import Course from "../Pages/Course/Course";
import CourseDetails from "../Pages/Course/CourseDetails";
import Enroll from "../Pages/Enroll/Enroll";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
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
        loader: () => fetch("http://localhost:5000/"),
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      { path: "/regestation", element: <Regestation /> },
      {
        path: "/courses",
        loader: () => fetch("http://localhost:5000/courses"),
        element: (
          <PrivateRoute>
            <Course />
          </PrivateRoute>
        ),
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
