/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ chef }) => {
  return (
    <div className="card w-56 md:w-96 bg-base-100 shadow-xl">
      <figure>
        <LazyLoad>
          <img className="w-full h-96" src={chef?.picture} alt="" />
        </LazyLoad>
      </figure>
      <div className="card-body ">
        <div style={{ fontFamily: "Satisfy" }}>
          <div className="flex justify-center">
            <h2 className="card-title text-5xl text-primary text-center">
              {chef?.name}
            </h2>
          </div>
          <div className="divider"></div>
          <p className=" text-center text-2xl py-2">
            Years of Experience: {chef?.years_experience}
          </p>
          <p className=" text-center text-2xl py-2">
            Number of Recipes: {chef?.recipes?.length}
          </p>
          <p className=" flex justify-center items-center gap-3 text-2xl py-2">
            Likes: {chef?.likes}
            <FaThumbsUp className="text-primary" />
          </p>
        </div>
        <br />
        <div className="card-actions justify-center">
          <Link to={`chef/${chef.id}`}>
            <button className="btn btn-primary">View Recipes</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
