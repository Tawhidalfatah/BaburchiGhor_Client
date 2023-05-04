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
        <div className="flex justify-center">
          <h2 className="card-title">{chef?.name}</h2>
        </div>
        <p className="text-center">
          Years of Experience: {chef?.years_experience}
        </p>
        <p className="text-center">
          Number of Recipes: {chef?.recipes?.length}
        </p>
        <p className="font-semibold flex justify-center items-center gap-3">
          Likes: {chef?.likes}
          <FaThumbsUp className="text-primary" />
        </p>
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
