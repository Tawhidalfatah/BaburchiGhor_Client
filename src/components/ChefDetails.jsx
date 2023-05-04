/* eslint-disable no-unused-vars */
import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useLoaderData } from "react-router-dom";
import ChefRecipes from "./ChefRecipes";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  console.log(chefDetails);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl p-36">
      <div className="card-body">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-center">
              <figure className="w-1/2">
                <img
                  className="rounded-full"
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="Album"
                />
              </figure>
            </div>
            <div className="flex justify-center">
              <h2 className="card-title text-3xl text-primary">
                Daniel LaRusso
              </h2>
            </div>
            <p className="text-center font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              aliquam temporibus impedit, id vitae placeat, amet, vel reiciendis
              dolore dolores labore! Sint maiores nesciunt voluptatum.
            </p>
            <div>
              <p className="font-semibold flex justify-center items-center gap-3">
                Likes: 260
                <FaThumbsUp className="text-primary" />
              </p>
            </div>
            <p className="text-center font-semibold">Recepies: 3</p>
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
