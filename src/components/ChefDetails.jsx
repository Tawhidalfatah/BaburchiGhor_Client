/* eslint-disable no-unused-vars */
import React from "react";
import { FaThumbsUp } from "react-icons/fa";
// import { Rating } from "@smastrom/react-rating";
import LazyLoad from "react-lazy-load";

import "@smastrom/react-rating/style.css";
import { useLoaderData } from "react-router-dom";
import ChefRecipes from "./ChefRecipes";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  const { name, bio } = chefDetails;
  console.log(chefDetails);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl p-36">
      <div className="card-body">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-center">
              <figure className="w-1/2">
                <LazyLoad threshold={0.99}>
                  <img
                    className="rounded-full"
                    src={chefDetails?.picture}
                    alt="Album"
                  />
                </LazyLoad>
              </figure>
            </div>
            <div className="flex justify-center">
              <h2 className="card-title text-3xl text-primary">{name}</h2>
            </div>
            <p className="text-center font-semibold">{bio}</p>
            <div>
              <p className="font-semibold flex justify-center items-center gap-3">
                Likes: 260
                <FaThumbsUp className="text-primary" />
              </p>
            </div>
            <p className="text-center font-semibold">
              Recepies: {chefDetails?.recipes?.length}
            </p>
            <p className="text-center font-semibold">Years of Experience: 5</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex gap-1">
          {chefDetails?.recipes?.map((recipe, index) => (
            <ChefRecipes key={index} recipe={recipe}></ChefRecipes>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
