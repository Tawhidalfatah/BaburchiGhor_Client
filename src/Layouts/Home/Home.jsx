/* eslint-disable no-unused-vars */
import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div className="relative ">
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <div className="absolute bottom-0 w-full h-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
