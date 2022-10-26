import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthProvaider } from "../AuthContex/AuthContex";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [resetPassword, setResetPassword] = useState(false);

  const {
    userLogin,
    googleSignIn,
    passwordResetEmail,
    facebookSignin,
    gitHubSignin,
  } = useContext(AuthProvaider);

  const navigate = useNavigate();
  const location = useLocation();

  const [viewPassword, setViewPassword] = useState(false);

  const path = location.state?.path?.pathname || "/";

  const userLoginHandelar = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((res) => {
        const user = res.user;
        if (user) {
          navigate(path, { relative: true });
        }
      })
      .catch((error) => {
        setLoginError(error.code);
      });
  };

  const passwordResetcodeSend = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.forgateEmail.value;

    console.log(email);

    passwordResetEmail(email)
      .then((res) => {
        setResetPassword(!resetPassword);
        swal({
          title: "Successful!",
          text: "Password Reset Code Send to Your Email! Please Chek Your Email",
          icon: "success",
          button: "Ok",
        });
      })
      .catch((error) => {
        setLoginError(error.code);
      });
  };

  const googleLoginHandelar = () => {
    const provaider = new GoogleAuthProvider();
    googleSignIn(provaider)
      .then((res) => {
        if (res.user) {
          navigate(path, { relative: true });
        }
      })
      .catch((error) => {
        setLoginError(error.code);
      });
  };

  const facebookLoginHandelar = () => {
    const provider = new FacebookAuthProvider();
    facebookSignin(provider)
      .then((result) => {
        console.log();
        if (result.user.uid) {
          navigate(path, { relative: true });
        }
      })
      .catch((error) => {
        setLoginError(error.code);
        console.error(error);
      });
  };

  const gitHubLoginHandelar = () => {
    const provaider = new GithubAuthProvider();

    gitHubSignin(provaider)
      .then((result) => {
        if (result.user) {
          navigate(path, { relative: true });
        }
      })
      .catch((error) => {
        setLoginError(error.code);
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center bg-[#0f256e] h-screen items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-gray-900">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <p
          className={`${loginError ? "block" : "hidden"}
                text-red-600 text-2xl font-bold`}
        >
          {loginError.slice(5)}!
        </p>

        <form
          onSubmit={userLoginHandelar}
          className="relative space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label className="block text-left text-gray-400">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label className="block text-gray-400 text-left">Password</label>
            <input
              type={`${viewPassword ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
            />

            <div
              onClick={() => setViewPassword(!viewPassword)}
              className="absolute top-[35%] cursor-pointer mr-2 text-gray-600 right-0"
            >
              <span className={`${viewPassword ? "hidden" : "visible"}`}>
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>

              <span className={`${viewPassword ? "visible" : "hidden"}`}>
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
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </span>
            </div>
            <div className="flex cursor-pointer justify-end text-xs text-gray-400">
              <p onClick={() => setResetPassword(!resetPassword)}>
                Forgot Password?
              </p>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white font-bold bg-[#00CC83]">
            Log in
          </button>
        </form>

        <form
          onSubmit={passwordResetcodeSend}
          className={`${
            resetPassword ? "absolute" : "hidden"
          } top-[30%] left-0 md:left-[36%] w-full md:w-[420px] p-2 rounded-md bg-[#0f256e] border-2 border-white`}
        >
          <div className="flex justify-between p-2">
            <label className="block text-white text-xl py-2">Your Email</label>
            <span
              onClick={() => setResetPassword(!resetPassword)}
              className="cursor-pointer p-1 rounded-full  text-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          <input
            className="w-full bg-gray-200 border-2 border-black rounded-md p-2"
            type="email"
            name="forgateEmail"
            placeholder="Your Email"
          />
          <button
            type="submit"
            className="p-3 mt-5 rounded-md bg-[#00CC83] text-white"
          >
            Send Code
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center  space-x-4">
          <button
            onClick={googleLoginHandelar}
            aria-label="Log in with Google"
            className="p-3 rounded-full bg-[#00CC83] text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button
            onClick={facebookLoginHandelar}
            aria-label="Log in with Twitter"
            className="p-3 rounded-full bg-[#00CC83] text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-5 h-5"
            >
              <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
            </svg>
          </button>
          <button
            onClick={gitHubLoginHandelar}
            aria-label="Log in with GitHub"
            className="p-3 rounded-full bg-[#00CC83] text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Don't have an account?
          <Link
            to="/regestation"
            rel="noopener noreferrer"
            className="underline text-gray-900"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
