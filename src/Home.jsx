import React from "react";
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";
import Article from "./articles/pages/Article";

const Home = () => {
  return (
    <>
      <Navbar isAuthenticated={false} isRegistered={false} />
      <Article />
      <Footer />
    </>
  );
};

export default Home;
