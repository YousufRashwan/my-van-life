import React from "react";
import { useLoaderData, Link, useLocation } from "react-router-dom";
import { getVan } from "../api";

export function loader({ params }) {
  return getVan(params.id);
}

const VanDetail = () => {
  const van = useLoaderData();
  const location = useLocation();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  const vanElement = (
    <div className="mb-16 mx-auto px-4 flex flex-col items-center max-w-3xl">
      <img
        src={van.imageUrl}
        alt={van.name}
        className="w-full object-cover rounded-md object-center mb-10"
      />
      <div>
        <p
          className={` 
      ${
        van.type === "simple"
          ? "bg-orange-600"
          : van.type === "luxury"
          ? "bg-black"
          : "bg-green-800"
      }
      inline-block text-orange-100 font-semibold
      py-1 px-6 mr-2 rounded-md mb-8`}
        >
          {van.type}
        </p>
        <h2 className="text-3xl font-bold mb-4">{van.name}</h2>
        <small className="block mb-4 text-2xl">
          <span className="font-semibold">${van.price}</span>/day
        </small>
        <p className="font-semibold mb-4">{van.description}</p>
        <button
          className="bg-orange-400 inline-block w-full text-center
          py-3 rounded-md font-bold text-white
          hover:translate-x-0.5 hover:translate-y-0.5 transition drop-shadow-lg"
        >
          Rent this van
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Link to={`..${search}`} relative="path" className="block ml-16 mb-6 ">
        &larr;{" "}
        <span className="underline font-semibold">Back to {type} vans</span>
      </Link>
      {vanElement}
    </>
  );
};

export default VanDetail;
