import React from "react";
import {
  Link,
  useLoaderData,
  useSearchParams,
  Await,
  defer,
} from "react-router-dom";
import { getVans } from "../api";

export function loader() {
  return defer({ vans: getVans() });
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();
  const typeFilter = searchParams.get("type");

  function renderVanElements(vans) {
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    const vanElements = displayedVans.map((van) => (
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        className="drop-shadow-lg hover:translate-x-0.5 hover:translate-y-0.5 transition"
      >
        <img
          src={van.imageUrl}
          alt=""
          className="w-full object-cover rounded-md object-center mb-2"
        />
        <h2 className="text-xl font-semibold mb-3">{van.name}</h2>
        <small className="block mb-2 font-semibold">${van.price}/day</small>
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
        py-1 px-4 mr-2 rounded-md`}
        >
          {van.type}
        </p>
      </Link>
    ));

    return (
      <div
        className="grid gap-8 grid-cols-2 md:grid-cols-3
        lg:grid-cols-4 2xl:grid-cols-5"
      >
        {vanElements}
      </div>
    );
  }

  function handleFilter(key, value) {
    setSearchParams((prevSearchParams) => {
      if (value) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
      return prevSearchParams;
    });
  }

  return (
    <div className="px-6 mb-20">
      <div className="mb-10 text-gray-700 font-semibold">
        <h1 className="text-3xl text-black font-bold mb-4">
          Explore our van options
        </h1>
        <div>
          <button
            onClick={() => handleFilter("type", "simple")}
            className="inline-block bg-orange-200  py-1 px-4
          mr-2 rounded-md hover:bg-orange-600
          hover:text-orange-100 transition"
          >
            Simple
          </button>
          <button
            onClick={() => handleFilter("type", "luxury")}
            className="inline-block bg-orange-200 py-1 px-4
          mr-2 rounded-md hover:bg-black
          hover:text-orange-100 transition"
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilter("type", "rugged")}
            className="inline-block bg-orange-200 py-1 px-4
          mr-2  rounded-md hover:bg-green-800
          hover:text-orange-100 transition"
          >
            Rugged
          </button>
          {typeFilter && (
            <button
              onClick={() => handleFilter("type", null)}
              className="underline text-gray-600"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
      <React.Suspense
        fallback={
          <p className="text-2xl font-semibold mb-3">...Loading Vans</p>
        }
      >
        <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
      </React.Suspense>
    </div>
  );
};

export default Vans;
