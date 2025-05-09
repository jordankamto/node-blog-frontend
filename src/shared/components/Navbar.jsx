import React from "react";

const Navbar = () => {
  // Dummy authentication state
  const isAuthenticated = false; // Change this to true to simulate an authenticated user
  const isRegistered = false; // Change this to true to simulate a registered user

  return (
    <header>
      <nav className="bg-gray-200 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img
              src="../svg/logoipsum-368.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              React-Blog
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            {isAuthenticated ? (
              <a
                href="#logout"
                className="text-gray-800 bg-blue-500 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Log out
              </a>
            ) : isRegistered ? (
              <a
                href="#login"
                className="text-gray-800 bg-blue-500 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Log in
              </a>
            ) : (
              <a
                href="#signup"
                className="text-gray-800 bg-blue-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Sign up
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
