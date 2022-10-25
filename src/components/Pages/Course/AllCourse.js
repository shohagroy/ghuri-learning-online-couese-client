import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "./SingleCourse";

const AllCourse = () => {
  const allCourse = useLoaderData();

  return (
    <div>
      <div className="grid md:grid-cols-2 center gap-4 mx-2 md:mx-5">
        {allCourse.map((course) => (
          <SingleCourse key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
