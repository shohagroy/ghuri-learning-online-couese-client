import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AuthProvaider } from "../AuthContex/AuthContex";

import swal from "sweetalert";

const Navigation = () => {
  const {
    user,
    userSignOut,
    userProfileUpdate,
    EmailVerification,
    googleSignIn,
    facebookSignin,
    gitHubSignin,
  } = useContext(AuthProvaider);

  const [themes, setThemes] = useState(false);

  const [toggle, setToggle] = useState(false);
  const [profile, setProfile] = useState(false);
  const [profileUpdate, setProfileUpdate] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const path = location.state?.path?.pathname || "/";

  const updateHandelar = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const photoUrl = form.photoUrl.value;
    const phone = form.phone.value;

    userProfileUpdate(userName, photoUrl, phone)
      .then(() => {
        swal({
          title: "Successfully!",
          text: "Your Profile has been Updated!",
          icon: "success",
          button: "Ok!",
        });
        setProfileUpdate(!profileUpdate);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const emailVerifiedHandelar = () => {
    EmailVerification().then(() => {
      console.log("send verification code");
      swal({
        title: "Code Send!",
        text: "Verification Code Send Successfully! Please Chek Your Email",
        icon: "success",
        button: "Ok!",
      });
    });
  };

  const googleLoginHandelar = () => {
    const provaider = new GoogleAuthProvider();
    googleSignIn(provaider)
      .then((res) => {
        navigate(path, { relative: true });
      })
      .catch((error) => {
        console.error(error);
      });
    setToggle(!toggle);
  };

  const facebookLoginHandelar = () => {
    const provider = new FacebookAuthProvider();
    facebookSignin(provider)
      .then((result) => {
        const user = result.user;
        navigate(path, { relative: true });
      })

      .catch((error) => {
        console.error(error);
      });
    setToggle(!toggle);
  };

  const gitHubLoginHandelar = () => {
    const provaider = new GithubAuthProvider();

    gitHubSignin(provaider)
      .then((result) => {
        const user = result.user;
        navigate(path, { relative: true });
      })
      .catch((error) => {
        console.error(error);
      });
    setToggle(!toggle);
  };

  return (
    <div className="absolute z-50   h-[10vh] w-full text-white bg-gray-100">
      <div
        onClick={() => setThemes(!themes)}
        className="cursor-pointer absolute right-0 top-0 text-black md:p-3"
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
          <Link to="/">
            <img className="h-[50px] md:h-[60px] p-2" src={logo} alt="Logo" />
          </Link>
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
                        defaultValue={user.photoURL}
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
                    defaultValue={user?.displayName}
                  />
                </div>
                <div>
                  <label className="block">Photo URL</label>
                  <input
                    name="photoUrl"
                    className="p-1 bg-gray-100 pl-2 rounded-md
                     border-2 border-black w-full"
                    type="text"
                    defaultValue={user?.photoURL}
                  />
                </div>
                <div>
                  <label className="block">Phone Number</label>
                  <input
                    name="phone"
                    className="p-1 bg-gray-100 pl-2 rounded-md border-2 border-black w-full"
                    type="text"
                    defaultValue={user?.phoneNumber}
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
            } absolute  left-0 duration-500 w-full h-[90vh] bg-[#0f256e]`}
          >
            <ul>
              <li
                onClick={() => setToggle(!toggle)}
                className="p-3 hover:bg-[#00CC83] cursor-pointer m-2 border-b-2 text-center"
              >
                <NavLink className="block" to="/">
                  Home
                </NavLink>
              </li>
              <li
                onClick={() => setToggle(!toggle)}
                className="p-3 hover:bg-[#00CC83] cursor-pointer m-2 border-b-2 text-center"
              >
                <NavLink className="block" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li
                onClick={() => setToggle(!toggle)}
                className="p-3 hover:bg-[#00CC83] cursor-pointer m-2 border-b-2 text-center"
              >
                <NavLink className="block" to="FAQ">
                  FAQ
                </NavLink>
              </li>
              <li
                onClick={() => setToggle(!toggle)}
                className="p-3 hover:bg-[#00CC83] cursor-pointer m-2 border-b-2 text-center"
              >
                <NavLink className="block" to="/enroll">
                  Enroll
                </NavLink>
              </li>
              <li
                onClick={() => setToggle(!toggle)}
                className="p-3 hover:bg-[#00CC83] cursor-pointer m-2 border-b-2 text-center"
              >
                <NavLink className="block" to="blog">
                  Blog
                </NavLink>
              </li>
            </ul>
            <Link
              className={`${user ? "hidden" : "block"}`}
              to="/login"
              onClick={() => setToggle(!toggle)}
            >
              <button className="w-full bg-[#00CC83] my-5 text-xl rounded-md text-white py-3">
                Log in
              </button>
            </Link>

            <button
              onClick={() => userSignOut()}
              className={` ${
                user ? "block" : "hidden"
              } w-full bg-red-600 my-5 text-xl rounded-md text-white placeholder-opacity-30 py-3`}
            >
              Log out
            </button>
            <div className="text-center">
              <div
                onClick={() => setProfile(!profile)}
                className="my-6 space-y-4 "
              >
                <button
                  onClick={googleLoginHandelar}
                  aria-label="Login with Google"
                  type="button"
                  className="flex hover:bg-[#00CC83] items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                  <p>Login with Google</p>
                </button>
                <button
                  onClick={facebookLoginHandelar}
                  aria-label="Login with facebook"
                  role="button"
                  className="flex hover:bg-[#00CC83] items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                  <p>Login with Facebook</p>
                </button>

                <button
                  onClick={gitHubLoginHandelar}
                  aria-label="Login with GitHub"
                  role="button"
                  className="flex hover:bg-[#00CC83] items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                  <p>Login with GitHub</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
