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
  const { name, bio, years_experience } = chefDetails;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl py-36 pb-36 pt-0">
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
            <div className="flex justify-center my-9">
              <h2
                style={{ fontFamily: "Satisfy" }}
                className="card-title text-7xl text-primary"
              >
                {name}
              </h2>
            </div>
            <p className="text-center font-semibold text-4xl py-4">{bio}</p>
            <div>
              <p className="font-semibold flex justify-center items-center gap-3 text-2xl py-3">
                Likes: 260
                <FaThumbsUp className="text-primary" />
              </p>
            </div>

            <p
              // style={{ fontFamily: 'Montserrat' }}
              className="text-center font-semibold text-2xl"
            >
              Years of Experience: {years_experience}
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <h2
          style={{ fontFamily: "Satisfy" }}
          className="text-center text-primary text-6xl my-9"
        >
          Recipes : {chefDetails?.recipes?.length}
        </h2>
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
