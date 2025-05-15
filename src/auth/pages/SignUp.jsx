import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <form class="space-y-6">
          <div className="flex justify-center items-center mb-4">
            <img
              src="/svg/logoipsum-368.svg"
              className="h-6 sm:h-9"
              alt="React-Blog Logo"
            />
          </div>
          <h5 class="text-xl font-medium text-gray-900 text-center">
            Register to React-Blog
          </h5>
          <div>
            <label
              htmlFor="name"
              class="block text-sm font-medium text-gray-900"
            >
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-0.5 focus:border-
            blue-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              class="block text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-0.5 focus:border-
            blue-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              class="block text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-0.5 focus:ring-blue-500 focus:border-
            blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleSubmit}
          >
            Register account
          </button>
          <div class="text-sm font-medium text-gray-500">
            Already Registered?{" "}
            <Link to="/auth/login" class="text-blue-700 hover:underline">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
