/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  console.log(chef.id);
  return (
    <div className="card w-56 md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Shoes"
        />
      </figure>
      <div className="card-body ">
        <div className="flex justify-center">
          <h2 className="card-title">Daniel</h2>
        </div>
        <p className="text-center">Years of Experience: 2</p>
        <p className="text-center">Number of Recipes: 2</p>
        <p className="font-semibold flex justify-center items-center gap-3">
          Likes: 260
          <FaThumbsUp className="text-primary" />
        </p>
        <br />
        <div className="card-actions justify-center">
          <Link to={`/${chef.id}`}>
            <button className="btn btn-primary">View Recipes</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
