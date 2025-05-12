import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-200 border-gray-200 md:p-8 lg:p-10 lg:relative bottom-0 w-full mt-auto">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          to="/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900"
        >
          <img
            src="/svg/logoipsum-368.svg"
            className="mr-3 h-6 sm:h-9"
            alt="React-Blog Logo"
          />
          React-Blog
        </Link>
        <div className="my-6 text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          voluptatem quo quibusdam repellat deleniti sequi!
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, non.
          </p>
        </div>
        <span className="text-sm text-gray-500 sm:text-center">
          © 2025{" "}
          <Link to="/" className="hover:underline">
            React-Blog
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
