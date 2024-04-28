import React from "react";
import loginImage from "../assests/img/signupimage.jpg";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex my-[20px] w-[65%]">
        <div className="w-[45%]">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src={loginImage}
            alt="Login Image"
          />
        </div>
        <div className="w-[55%]  bg-white shadow-md rounded p-8">
        <h2 className="text-3xl font-bold leading-tight mb-5 text-black sm:text-4xl">Sign Up</h2>
          <form>
            <div className="mb-4 flex">
              <div className="mr-2 w-1/2">
                <label
                  className="text-base font-medium text-gray-900"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="ml-2 w-1/2">
                <label
                  className="text-base font-medium text-gray-900"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="text-base font-medium text-gray-900"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="text-base font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label
                className="text-base font-medium text-gray-900"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                className="mr-2"
                id="termsCheckbox"
                type="checkbox"
              />
              <label className="text-sm text-gray-600" htmlFor="termsCheckbox">
                I accept the terms of use and privacy policy
              </label>
            </div>
            <div className="text-center mb-6">
              <button
                className="w-full bg-violet-700 hover:bg-violet-800 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <a className="text-blue-500 hover:text-blue-800" href="#">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
