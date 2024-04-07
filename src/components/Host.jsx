import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Host = () => {
  const activeStyles = "font-bold text-gray-800 underline";
  return (
    <div className="">
      <nav>
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            `mx-2 hover:text-gray-800 hover:underline font-semibold text-gray-600 ${
              isActive && `${activeStyles} font-bold text-gray-800`
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            `mx-2 hover:text-gray-800 hover:underline font-semibold text-gray-600 ${
              isActive && `${activeStyles} font-bold text-gray-800`
            }`
          }
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            `mx-2 hover:text-gray-800 hover:underline font-semibold text-gray-600 ${
              isActive && `${activeStyles} font-bold text-gray-800`
            }`
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            `mx-2 hover:text-gray-800 hover:underline font-semibold text-gray-600 ${
              isActive && `${activeStyles} font-bold text-gray-800`
            }`
          }
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Host;
