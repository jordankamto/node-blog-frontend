import React from "react";
import { Link } from "react-router-dom";
import { AUTH } from "../../dummyData";

const EditPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    console.log(email);
    const password = document.getElementById("password").value;
    console.log(password);

    const updatedAuth = AUTH.find((auth) => auth.email === email);
    if (!updatedAuth) {
      console.log("User not found");
      alert("User not found");
      return;
    }

    updatedAuth.password = password;
    console.log("Password updated successfully");
    alert("Password updated successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <form className="space-y-6">
          <Link to="/" className="flex justify-center items-center mb-4">
            <img
              src="/svg/logoipsum-368.svg"
              className="h-6 sm:h-9"
              alt="React-Blog Logo"
            />
          </Link>
          <h5 className="text-xl font-medium text-gray-900 text-center">
            Edit password React-Blog
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-0.5 focus:border-
            blue-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@mail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-0.5 focus:ring-blue-500 focus:border-
            blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleSubmit}
          >
            Edit your password
          </button>
          <div className="text-sm font-medium text-gray-500">
            Changed password?{" "}
            <Link to="/auth/login" className="text-blue-700 hover:underline">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPassword;
