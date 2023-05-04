/* eslint-disable no-unused-vars */
import Lottie from "lottie-react";
import React from "react";
import { Navigate, useRouteError } from "react-router-dom";
import error404 from "../assets/error.json";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie animationData={error404} loop={true}></Lottie>
        <div>
          <h1 className="text-5xl text-red-600">
            {error.status}: {error.statusText}
          </h1>
          <p className="text-2xl my-5 italic">{error.data}</p>
          <a href="/">
            <button className="btn btn-primary">Go to Home</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
