import React from "react";
import { Link } from "react-router-dom";
import vanNight from "../assets/van-night.jpg";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="hero relative flex-grow overflow-hidden homeCover z-0">
        <img
          src={vanNight}
          alt="Van life background image"
          className="absolute inset-0 w-full h-full object-cover filter:saturate(50%) -z-10"
        />
        <div className="container mt-20 mx-auto px-4 py-20 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Explore anywhere with our rental vans.
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Experience the freedom of the open road. Rent your perfect adventure
            vehicle today!
          </p>
          <Link
            to="/vans"
            className="uppercase bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition hover:transform hover:translate-y-1"
          >
            Find your vans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
