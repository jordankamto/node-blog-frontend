import React from "react";
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";

const Notfound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={false} isRegistered={false} />
      <div className="flex-grow flex flex-row justify-center items-center">
        <p className="text-2xl font-bold">404 - Page not found</p>
      </div>
      <Footer />
    </div>
  );
};

export default Notfound;
