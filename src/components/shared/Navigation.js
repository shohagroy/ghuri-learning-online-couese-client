import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AuthProvaider } from "../AuthContex/AuthContex";

const Navigation = () => {
  const { user, userSignOut, userProfileUpdate, EmailVerification } =
    useContext(AuthProvaider);

  const [themes, setThemes] = useState(false);

  const [toggle, setToggle] = useState(false);
  const [profile, setProfile] = useState(false);
  const [profileUpdate, setProfileUpdate] = useState(false);

  console.log(user);

  const updateHandelar = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const photoUrl = form.photoUrl.value;
    const phone = form.phone.value;

    userProfileUpdate(userName, photoUrl, phone)
      .then(() => {
        console.log("user update");
        setProfileUpdate(!profileUpdate);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const emailVerifiedHandelar = () => {
    EmailVerification().then(() => {
      console.log("send verification code");
      // Email verification sent!
      // ...
    });
  };

  return (
    <div className="absolute z-50   h-[10vh] w-full text-white bg-gray-100">
      <div
        onClick={() => setThemes(!themes)}
        className="cursor-pointer absolute right-0 top-0 text-black p-3"
      >
        <span className={`${themes ? "hidden" : "block"}  duration-700 `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </span>

        <span className={`${themes ? "block" : "hidden"} duration-300`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </span>
      </div>
      <div className="max-w-[1200px] mx-auto ">
        {/* Desktop Navigation Menu  */}
        <div className="flex justify-between z-50 items-center mx-3 h-[10vh]   mg:m-0">
          <img className="h-[40px] md:h-[60px] p-2" src={logo} alt="Logo" />
          <div className="items-center relative hidden md:flex">
            <ul className="flex text-[#00CC83] font-bold">
              <NavLink to="/" className="p-3">
                Home
              </NavLink>
              <NavLink to="/courses" className="p-3">
                Courses
              </NavLink>
              <NavLink to="/FAQ" className="p-3">
                FAQ
              </NavLink>
              <NavLink to="/enroll" className="p-3">
                Enroll
              </NavLink>
              <NavLink to="/blog" className="p-3">
                Blog
              </NavLink>
            </ul>
            <div>
              <div className={`${user ? "hidden" : "block"}`}>
                <Link
                  to="/login"
                  className={`px-5 ml-5 py-2 bg-[#00CC83] text-white font-bold rounded-lg`}
                >
                  Login
                </Link>
              </div>

              {/* Profile image */}
              <div
                onClick={() => setProfile(!profile)}
                className={`${
                  user ? "block" : "hidden"
                } h-[50px] ml-5 w-[50px]  cursor-pointer  bg-[#00CC83] rounded-full relative flex justify-center items-center`}
              >
                <span
                  className={`${user.photoURL ? "hidden" : "block"}`}
                  title={user?.displayName}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <img
                  className={`${
                    user.photoURL ? "block" : "hidden"
                  } h-[50px] w-[50px] p-1 object-cover rounded-full`}
                  src={user.photoURL}
                  alt={user?.displayName}
                  title={user?.displayName}
                />
                {/* profile container */}
                <div
                  className={` ${
                    profile ? "absolute" : "hidden"
                  } top-[60px] right-0 w-[250px]`}
                >
                  <div className="  p-5 rounded-md bg-white border-2 text-black">
                    <div className="flex justify-center flex-col items-center">
                      <span
                        className={`${user.photoURL ? "hidden" : "block"}`}
                        title={user?.displayName}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-12 h-12"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <img
                        className={`${
                          user.photoURL ? "block" : "hidden"
                        } h-[60px] w-[60px] object-cover rounded-full p-1`}
                        src={user?.photoURL}
                        alt={user?.displayName}
                        title={user?.displayName}
                      />
                      <h1 className="text-xl font-semibold">
                        {user?.displayName}
                      </h1>
                      <p
                        className={`${
                          user.emailVerified ? "block" : "hidden"
                        } text-green-600`}
                      >
                        Verified
                      </p>
                      <p
                        className={`${
                          user.emailVerified ? "hidden" : "block"
                        } text-red-600`}
                      >
                        Unverified
                      </p>
                      <div className="mt-2 text-center">
                        <button
                          onClick={emailVerifiedHandelar}
                          className={`${
                            user.emailVerified ? "hidden" : "visible"
                          } py-2 w-full my-2 bg-red-400 text-white rounded-md`}
                        >
                          Verified Now
                        </button>

                        <button
                          onClick={() => setProfileUpdate(!profileUpdate)}
                          className="py-2 w-full bg-[#00CC83] text-white rounded-md"
                        >
                          Update Profile
                        </button>
                        <button
                          onClick={() => userSignOut()}
                          className="py-2 w-full mt-2 bg-red-600 text-white rounded-md"
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* update container */}
          <div
            className={`${
              profileUpdate ? "absolute" : "hidden"
            } top-[80px] right-0`}
          >
            <div className="bg-white text-black border-2 border-black rounded-md">
              <form onSubmit={updateHandelar} className="p-3 w-[300px] w-full">
                <div>
                  <label className="block">Name</label>
                  <input
                    name="userName"
                    className="p-1 bg-gray-100 pl-2 rounded-md border-2 border-black w-full"
                    type="text"
                    placeholder={user?.displayName}
                  />
                </div>
                <div>
                  <label className="block">Photo URL</label>
                  <input
                    name="photoUrl"
                    className="p-1 bg-gray-100 pl-2 rounded-md border-2 border-black w-full"
                    type="text"
                    placeholder={user?.photoURL}
                  />
                </div>
                <div>
                  <label className="block">Phone Number</label>
                  <input
                    name="phone"
                    className="p-1 bg-gray-100 pl-2 rounded-md border-2 border-black w-full"
                    type="number"
                    placeholder={user?.phoneNumber}
                  />
                </div>
                <button className="px-5 mt-5 w-full mx-auto py-2 bg-[#00CC83] text-white font-bold rounded-lg">
                  Update
                </button>
              </form>
            </div>
          </div>

          {/* hambargar */}
          <div
            onClick={() => setToggle(!toggle)}
            className="text-[#00CC83] md:hidden"
          >
            <span className={`${toggle ? "hidden" : "block"} cursor-pointer`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </span>

            <span className={`${toggle ? "block" : "hidden"} cursor-pointer`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* mobile navigation menu  */}
        <div className="relative z-50 ">
          <div
            className={`${
              toggle ? "top-0" : "top-[-5000px]"
            } absolute  left-0 duration-500 w-full h-[90vh] bg-gray-800/80`}
          >
            <ul>
              <li
                onClick={() => setToggle(!toggle)}
                className="p-3 cursor-pointer m-2 border-b-2 text-center"
              >
                <NavLink to="/">Home</NavLink>
              </li>
              <li
                onClick={() => setToggle(!toggle)}
                className="p-3 cursor-pointer m-2 border-b-2 text-center"
              >
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li
                onClick={() => setToggle(!toggle)}
                className="p-3 cursor-pointer m-2 border-b-2 text-center"
              >
                <NavLink to="FAQ">FAQ</NavLink>
              </li>
              <li
                onClick={() => setToggle(!toggle)}
                className="p-3 cursor-pointer m-2 border-b-2 text-center"
              >
                <NavLink to="blog">Blog</NavLink>
              </li>
            </ul>
            <button className="w-full bg-blue-600 my-5 rounded-2xl text-white py-2">
              Account
            </button>
            <div className="text-center">
              <p>
                <small>Login with</small>
              </p>
              <span className="text-xl ">
                <i className="fa-brands p-2 cursor-pointer hover:text-3xl duration-300 hover:text-orange-600 fa-facebook"></i>
                <i className="fa-brands p-2 cursor-pointer hover:text-3xl duration-300 hover:text-orange-600 fa-twitter"></i>
                <i className="fa-brands p-2 cursor-pointer hover:text-3xl duration-300 hover:text-orange-600 fa-google"></i>
                <i className="fa-brands p-2 cursor-pointer hover:text-3xl duration-300 hover:text-orange-600 fa-github"></i>
                <i className="fa-brands p-2 cursor-pointer hover:text-3xl duration-300 hover:text-orange-600 fa-linkedin"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
