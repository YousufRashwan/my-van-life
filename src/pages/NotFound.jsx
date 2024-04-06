import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl mt-4 text-gray-600">
        Oops! Looks like you're lost.
      </p>
      <p className="text-lg mt-4 text-gray-600">
        The page you're looking for could not be found.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-lg bg-orange-400 px-4 py-2 font-semibold text-white hover:bg-orange-500 transition-all"
      >
        Go Back Home
      </Link>
      <div className="mt-8">
        <span className="text-gray-600">Feeling adventurous?</span> Explore our
        website:
        <ul className="list-none mt-2 text-center">
          <li className="text-orange-500 underline transition-all">
            <Link to="/">Home</Link>
          </li>
          {/* Add more links to other important pages here */}
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
