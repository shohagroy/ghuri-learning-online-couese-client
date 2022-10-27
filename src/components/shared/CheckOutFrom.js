import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvaider } from "../AuthContex/AuthContex";

const CheckOutFrom = () => {
  const { user } = useContext(AuthProvaider);

  const navigate = useNavigate();
  const personalDetilsHandelar = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const address = form.address.value;
    const state = form.state.value;
    const city = form.city.value;
    const courseCategory = form.category.value;
    const courseName = form.courseName.value;

    const userDetails = {
      name: userName,
      email: userEmail,
      add: address,
      state: state,
      city: city,
      courseCategory: courseCategory,
      courseName: courseName,
    };

    localStorage.setItem("enrollCourse", JSON.stringify(userDetails));

    navigate("/prient-enroll");
  };
  return (
    <div>
      <section className=" p-2 md:p-6 bg-gray-800 text-gray-50">
        <form
          onSubmit={personalDetilsHandelar}
          className=" max-w-[800px] container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className=" p-6 rounded-md shadow-sm bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-bold text-2xl">Personal Inormation</p>
            </div>
            <div className="mt-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Your Name</label>
                <input
                  name="userName"
                  defaultValue={user?.displayName}
                  type="text"
                  placeholder="Your Name"
                  className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Email</label>
                <input
                  defaultValue={user?.email}
                  name="userEmail"
                  type="email"
                  placeholder="Email"
                  className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Address</label>
                <input
                  name="address"
                  type="text"
                  placeholder=""
                  className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">City</label>
                <input
                  name="city"
                  type="text"
                  placeholder=""
                  className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">State / Province</label>
                <input
                  name="state"
                  type="text"
                  placeholder=""
                  className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-2xl">Course Information</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <div className="w-full  text-black">
                  <select
                    defaultValue=""
                    className="w-full bg-gray-200 rounded-md p-2"
                    name="category"
                  >
                    <option className="rounded-md" value="Free Course">
                      Free Course
                    </option>
                    <option selected value="Paid Course">
                      Paid Course
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <div className="w-full  text-black">
                  <select
                    defaultValue=""
                    className="w-full bg-gray-200 rounded-md p-2"
                    name="courseName"
                  >
                    <option
                      className="rounded-md"
                      value="English Spiking $10000"
                    >
                      English Spiking
                    </option>
                    <option value="Graphic Design $4000">Graphic Design</option>
                    <option value="UI/UX Design $6000">UI/UX Design</option>
                    <option selected value="Web Development $8000">
                      Web Development
                    </option>
                    <option value="Digital Marketing $7000">
                      Digital Marketing
                    </option>
                    <option value="Professional Photography $5000">
                      Professional Photography
                    </option>
                    <option value="Free Course $FREE">Free Course</option>
                  </select>
                </div>
              </div>
              <div className="col-span-full">
                <label className="text-sm">Free Course Name</label>
                <textarea
                  placeholder="if you select free course, course type free corse name"
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                ></textarea>
              </div>
              <div className="col-span-full">
                <div className="flex items-center space-x-2">
                  <button
                    type="submit"
                    className="px-4 py-2 border rounded-md border-gray-100"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default CheckOutFrom;
