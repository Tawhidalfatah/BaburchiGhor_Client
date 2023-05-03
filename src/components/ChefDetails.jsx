/* eslint-disable no-unused-vars */
import React from "react";

const ChefDetails = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl p-36">
      <figure className="w-full">
        <img
          src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-center">
              <h2 className="card-title">Daniel LaRusso</h2>
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              aliquam temporibus impedit, id vitae placeat, amet, vel reiciendis
              dolore dolores labore! Sint maiores nesciunt voluptatum.
            </p>
            <p className="text-center">Likes: 260</p>
            <p className="text-center">Recepies: 3</p>
            <p className="text-center">Years of Experience</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex gap-1">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-center">
                <h2 className="card-title">Recipe Name</h2>
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
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus dicta dolorem modi, provident ex sunt dolore
                praesentium culpa aliquam impedit incidunt necessitatibus animi
                quae aut labore.
              </p>
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
              <div className="flex justify-center">
                <ul className="list-disc">
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdad</li>
                </ul>
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus dicta dolorem modi, provident ex sunt dolore
                praesentium culpa aliquam impedit incidunt necessitatibus animi
                quae aut labore.
              </p>
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
              <div className="flex justify-center">
                <ul className="list-disc">
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdasd</li>
                  <li>asdad</li>
                </ul>
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus dicta dolorem modi, provident ex sunt dolore
                praesentium culpa aliquam impedit incidunt necessitatibus animi
                quae aut labore.
              </p>
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
