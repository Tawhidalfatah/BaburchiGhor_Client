/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Rating } from "@smastrom/react-rating";
import React from "react";

const ChefRecipes = ({ recipe }) => {
  const { ingredients, cooking_method, img } = recipe;
  console.log(ingredients);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-center">
          <h2 className="card-title">{recipe?.name}</h2>
        </div>
        <div className="avatar flex justify-center my-5">
          <div className="w-24 rounded-full">
            <img src={img} />
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
          <button className="btn btn-primary">Add to Favourite</button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
