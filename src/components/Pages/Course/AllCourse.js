import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "./SingleCourse";

const AllCourse = () => {
  const allCourse = useLoaderData();

  console.log(allCourse);
  return (
    <div>
      <div className="grid md:grid-cols-2 center gap-4 mx-8">
        {allCourse.map((course) => (
          <SingleCourse key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
