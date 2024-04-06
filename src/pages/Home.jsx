import React from "react";
import { Link } from "react-router-dom";
import vanNight from "../assets/van-night.jpg";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${vanNight})`,
        }}
        className={`min-h-80 py-11 px-6 text-white bg-cover bg-center`}
      >
        <h1 className="text-4xl font-extrabold mb-8">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-l font-semibold mb-8">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to="/vans"
          className="bg-orange-400 drop-shadow-lg inline-block w-full text-center
          py-3 rounded-md font-bold text-white
          hover:translate-x-0.5 hover:translate-y-0.5 transition"
        >
          Find your vans
        </Link>
      </div>
    </div>
  );
};

export default Home;
