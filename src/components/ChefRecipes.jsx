/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LazyLoad from "react-lazy-load";

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
          <h2 className="card-title">{recipe?.name}</h2>
        </div>
        <div className="avatar flex justify-center my-5">
          <div className="w-24 rounded-full">
            <LazyLoad>
              <img src={img} />
            </LazyLoad>
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="list-disc">
            {ingredients?.map((ig, index) => (
              <li key={index}>{ig}</li>
            ))}
          </ul>
        </div>
        <p className="text-center my-5">{cooking_method}</p>
        <div className="flex justify-center">
          <Rating style={{ maxWidth: 180 }} value={3} readOnly />
        </div>
        <div className="card-actions justify-center">
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
