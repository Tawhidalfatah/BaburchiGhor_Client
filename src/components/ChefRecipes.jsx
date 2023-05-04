/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipes = ({ recipe }) => {
  const notify = () => toast("Successfully Added to Favourites");

  const [toggle, setToggle] = useState(false);
  const { ingredients, cooking_method, img } = recipe;
  console.log(ingredients);

  const handleToggle = () => {
    setToggle(!toggle);
    notify();
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-center">
          <h2
            style={{ fontFamily: "Satisfy" }}
            className="card-title text-5xl text-primary"
          >
            {recipe?.name}
          </h2>
        </div>
        <div className="avatar flex justify-center my-5">
          <div className="w-24 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div className="flex justify-center">
          <ul
            style={{ fontFamily: "Satisfy" }}
            className="text-center font-medium"
          >
            <div className="divider"></div>
            <p className="text-4xl font-semibold">Ingredients</p>
            <br />
            <div className="divider"></div>
            {ingredients?.map((ig, index) => (
              <li className="text-2xl font-medium" key={index}>
                {ig}
              </li>
            ))}
          </ul>
        </div>
        <div className="divider"></div>
        <p
          style={{ fontFamily: "Satisfy" }}
          className="text-center my-5 text-xl font-medium text-gray-800"
        >
          {cooking_method}
        </p>
        <div className="divider"></div>
        <div className="flex justify-center">
          <Rating
            style={{ maxWidth: 180 }}
            value={Math.round(recipe?.rating)}
            readOnly
          />
        </div>
        <div className="card-actions justify-center py-5">
          {toggle ? (
            <button disabled className="btn btn-primary">
              Add to Favourite
            </button>
          ) : (
            <>
              <button onClick={handleToggle} className="btn btn-primary">
                Add to Favourite
              </button>
              <ToastContainer></ToastContainer>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
