import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Dummy authentication state
  const isAuthenticated = false; // Change this to true to simulate an authenticated user
  const isRegistered = true; // Change this to true to simulate a registered user

  return (
    <header>
      <nav className="bg-gray-200 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="/svg/logoipsum-368.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              React-Blog
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {isAuthenticated ? (
              <Link
                to="#logout"
                className="text-gray-800 bg-blue-500 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Log out
              </Link>
            ) : isRegistered ? (
              <Link
                to="/auth/login"
                className="text-gray-800 bg-blue-500 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Log in
              </Link>
            ) : (
              <Link
                to="/auth/signup"
                className="text-gray-800 bg-blue-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Sign up
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
