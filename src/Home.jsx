import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";
import Articles from "./articles/pages/Articles";

const Home = () => {
  const isLoggedin = true;
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {isLoggedin && (
          <Link to="/article/new">
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-6 py-3 my-5 ml-35"
            >
              Add new article
            </button>
          </Link>
        )}
        <div className="flex-grow flex flex-row justify-center items-center">
          <Articles />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
