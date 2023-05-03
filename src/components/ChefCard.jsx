/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
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
        <h2 className="card-title">Daniel</h2>
        <p>Years of Experience: 2</p>
        <p>Number of Recipes: 2</p>
        <p>Likes: 2</p>
        <br />
        <div className="card-actions justify-start">
          <Link to={`/${chef.id}`}>
            <button className="btn btn-primary">View Recipe</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
