/* eslint-disable no-unused-vars */
import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    // Fixed Element
    <div className="relative min-h-screen">
      <Navbar></Navbar>
      <div>
        {/* Dynamic element */}
        <Outlet></Outlet>
      </div>
      {/* Fixed element */}
      <div className="absolute bottom-0 w-full h-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
