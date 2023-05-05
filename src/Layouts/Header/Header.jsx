/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ChefCard from "../../components/ChefCard";
import { Map, Overlay } from "pigeon-maps";

const Header = () => {
  // useState for dynamical data
  const [allChefs, setAllChefs] = useState([]);

  // useEffect for all chefs data load
  useEffect(() => {
    fetch(
      "https://b7a10-chef-recipe-hunter-server-side-tawhidalfata-tawhidalfatah.vercel.app/"
    )
      .then((res) => res.json())
      .then((data) => setAllChefs(data));
  }, []);
  return (
    <div>
      {/* Banner Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center ">
          <div className="max-w-md">
            <h1
              style={{ fontFamily: "Satisfy" }}
              className="mb-5 text-6xl font-bold text-white"
            >
              Hello there!!
            </h1>
            <p className="mb-5 text-white font-semibold text-xl">
              You, Hungry? Tired of eating the same food again and again? Need
              to try the best of the best French Cuisuine there can be? You are
              in the right place.
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
      {/* Chefs Section */}
      <div id="chef-section" className="mt-4 p-10">
        <h1
          style={{ fontFamily: "Satisfy" }}
          className="text-center text-primary text-7xl py-28 leading-snug md:leading-none"
        >
          Meet Our Chefs
        </h1>

        <div className="ms-2 md:ms-44 grid grid-cols-1 md:grid-cols-3 gap-4">
          {allChefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </div>
      </div>
      <div className="divider"></div>
      <h1
        style={{ fontFamily: "Satisfy" }}
        className="text-center text-primary text-7xl mt-28 mb-11 py-20"
      >
        Browse Our Signature Dishes
      </h1>
      {/* Carousel Section */}
      <div className="carousel carousel-center rounded-box mx-2">
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1549203438-a7696aed4dac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1046&q=80" />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1608855238293-a8853e7f7c98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1621327017866-6fb07e6c96ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1531664412848-9610afed156c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1581512778119-b71ae58bc687?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
        </div>
      </div>
      {/* Map Section */}
      <div className="divider mt-28"></div>
      <h1
        style={{ fontFamily: "Satisfy" }}
        className="text-center text-primary text-7xl mt-28 mb-11 py-20"
      >
        Find us here!!
      </h1>
      <div className="flex justify-center px-5 md:px-28 pb-20 md:pb-28 ">
        <Map
          height={300}
          defaultCenter={[48.86888132775037, 2.3007869202861793]}
          defaultZoom={13}
        >
          <Overlay
            anchor={[48.86888132775037, 2.3007869202861793]}
            offset={[80, 40]}
          >
            <img src="tomato.svg" width={49} height={40} alt="" />
          </Overlay>
        </Map>
      </div>
    </div>
  );
};

export default Header;
