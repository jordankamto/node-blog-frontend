import React from "react";
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";

const Notfound = () => {
  return (
    <>
      <Navbar isAuthenticated={false} isRegistered={false} />
      <div className="flex flex-row justify-center py-10">
        <p className="text-2xl font-bold">404 - Page not found</p>
      </div>
      <Footer />
    </>
  );
};

export default Notfound;
