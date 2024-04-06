import React from "react";
import { Link, useLoaderData, NavLink, Outlet } from "react-router-dom";
import { getVan, requireAuth } from "../../api";

export const loader = async ({ params, request }) => {
  await requireAuth(request);
  return getVan(params.id);
};

const HostVanDetail = () => {
  const van = useLoaderData();

  const activeStyles = "font-bold text-gray-800 underline";
  return (
    <div>
      <Link to=".." relative="path" className="block ml-6 my-6">
        &larr;{" "}
        <span className="hover:underline font-semibold">Back to all vans</span>
      </Link>

      <div className="flex flex-col bg-white mx-4 p-4 drop-shadow-lg">
        <div className="flex items-center bg-white mb-8">
          <div className="mr-4">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="w-40 rounded-md"
            />
          </div>
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
            py-1 px-4 mr-2 rounded-md mb-4`}
            >
              {van.type}
            </p>
            <h2 className="text-2xl font-bold mb-2">{van.name}</h2>
            <small className="block text-xl">
              <span className="font-semibold">${van.price}</span>/day
            </small>
          </div>
        </div>

        <div>
          <nav>
            <NavLink
              to="."
              end
              className={({ isActive }) =>
                `mr-3 hover:text-gray-800 hover:underline font-semibold text-gray-600 ${
                  isActive && `${activeStyles} font-bold text-gray-800`
                }`
              }
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                `mx-3 hover:text-gray-800 hover:underline font-semibold text-gray-600 ${
                  isActive && `${activeStyles} font-bold text-gray-800`
                }`
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) =>
                `mx-3 hover:text-gray-800 hover:underline font-semibold text-gray-600 ${
                  isActive && `${activeStyles} font-bold text-gray-800`
                }`
              }
            >
              Photos
            </NavLink>
          </nav>
          <div className="my-6">
            <Outlet context={{ van }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostVanDetail;
