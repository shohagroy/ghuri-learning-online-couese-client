import React from "react";
import PrimiumCourse from "../../shared/PrimiumCourse";

const Primium = ({ courses }) => {
  console.log(courses);

  return (
    <div className="max-w-[1200px] mx-auto ">
      <h3 className="text-3xl mx-4 font-bold font-serif">Our Priemum Course</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {courses.slice(0, 3).map((course) => (
          <PrimiumCourse key={course.id} course={course} />
        ))}
      </div>
      <button className="float-right py-3 px-8 bg-[#00CC83] text-white rounded-md font-bold">
        See All Course
      </button>
    </div>
  );
};

export default Primium;
