import React from "react";
import { Link } from "react-router-dom";
import vanOut from "../assets/van-out.jpg";
const About = () => {
  return (
    <div>
      <img
        src={vanOut}
        alt="friends"
        className=" h-80 w-full object-cover object-bottom mb-8"
      />
      <div className="mb-12 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className=" mb-4">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className=" mb-4">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="bg-orange-300 mx-6 ml-10 mb-10 p-6 rounded-md">
        <div className="text-2xl font-bold mb-8">
          <p>Your destination is waiting.</p>
          <p>Your van is ready.</p>
        </div>
        <Link
          to="/vans"
          className="text-white bg-black inline-block py-4 px-6
          rounded-md font-bold drop-shadow-lg hover:translate-x-0.5
          hover:translate-y-0.5 transition"
        >
          Explore our vans
        </Link>
      </div>
    </div>
  );
};

export default About;
