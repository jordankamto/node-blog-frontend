import React from "react";
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";
import Articles from "./articles/pages/Articles";

const Home = () => {
  return (
    <>
      <Navbar />
      <Articles />
      <Footer />
    </>
  );
};

export default Home;
