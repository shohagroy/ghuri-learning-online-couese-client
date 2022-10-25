import React from "react";

const CheckOutFrom = () => {
  return (
    <div>
      <section className=" p-2 md:p-6 bg-gray-800 text-gray-50">
        <form className=" max-w-[800px] container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
          <fieldset className=" p-6 rounded-md shadow-sm bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-bold text-2xl">Personal Inormation</p>
            </div>
            <div className="mt-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Your Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Address</label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">City</label>
                <input
                  id="city"
                  type="text"
                  placeholder=""
                  className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">State / Province</label>
                <input
                  id="state"
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
                    className="w-full bg-gray-200 rounded-md p-2"
                    name="Course Category"
                    id=""
                    value="course Category"
                  >
                    <option className="rounded-md" value="Course">
                      Free Course
                    </option>
                    <option selected value="Course">
                      Paid Course
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <div className="w-full  text-black">
                  <select
                    value="Course name"
                    className="w-full bg-gray-200 rounded-md p-2"
                    name="Course Category"
                    id=""
                  >
                    <option className="rounded-md" value="Course">
                      English Spiking
                    </option>
                    <option value="Course">Graphic Design</option>
                    <option value="Course">UI/UX Design</option>
                    <option selected value="Course">
                      Web Development
                    </option>
                    <option value="Course">Digital Marketing</option>
                    <option value="Course">Professional Photography</option>
                  </select>
                </div>
              </div>
              <div className="col-span-full">
                <label className="text-sm">Memo</label>
                <textarea
                  placeholder=""
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
