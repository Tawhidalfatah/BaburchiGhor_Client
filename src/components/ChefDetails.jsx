/* eslint-disable no-unused-vars */
import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ChefDetails = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl p-36">
      <figure className="w-full">
        <img
          className="rounded-full"
          src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
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
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-center">
                <h2 className="card-title">Recipe Name</h2>
              </div>
              <div className="avatar flex justify-center my-5">
                <div className="w-24 rounded-full">
                  <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                </div>
              </div>
              <div className="flex justify-center">
                <ul className="list-disc">
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdad</li>
                </ul>
              </div>
              <p className="text-center my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus dicta dolorem modi, provident ex sunt dolore
                praesentium culpa aliquam impedit incidunt necessitatibus animi
                quae aut labore.
              </p>
              <div className="flex justify-center">
                <Rating style={{ maxWidth: 180 }} value={3} readOnly />
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Add to Favourite</button>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-center">
                <h2 className="card-title">Recipe Name</h2>
              </div>
              <div className="avatar flex justify-center my-5">
                <div className="w-24 rounded-full">
                  <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                </div>
              </div>
              <div className="flex justify-center">
                <ul className="list-disc">
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdad</li>
                </ul>
              </div>
              <p className="text-center my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus dicta dolorem modi, provident ex sunt dolore
                praesentium culpa aliquam impedit incidunt necessitatibus animi
                quae aut labore.
              </p>
              <div className="flex justify-center">
                <Rating style={{ maxWidth: 180 }} value={3} readOnly />
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Add to Favourite</button>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-center">
                <h2 className="card-title">Recipe Name</h2>
              </div>
              <div className="avatar flex justify-center my-5">
                <div className="w-24 rounded-full">
                  <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                </div>
              </div>
              <div className="flex justify-center">
                <ul className="list-disc">
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdad</li>
                </ul>
              </div>
              <p className="text-center my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus dicta dolorem modi, provident ex sunt dolore
                praesentium culpa aliquam impedit incidunt necessitatibus animi
                quae aut labore.
              </p>
              <div className="flex justify-center">
                <Rating style={{ maxWidth: 180 }} value={3} readOnly />
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Add to Favourite</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
