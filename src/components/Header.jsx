import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeStyles = "font-bold text-gray-800 underline";

  return (
    <header className="flex justify-between items-center my-6 mt-4 p-2 px-4">
      <Link to="/">
        <h1 className="text-2xl font-black">#VANLIFE</h1>
      </Link>
      <nav className="flex gap-6 items-center">
        <NavLink
          to="/host"
          className={({ isActive }) =>
            ` hover:text-gray-800 hover:underline font-semibold text-gray-600 ${
              isActive && `${activeStyles} font-bold text-gray-800`
            }`
          }
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            ` hover:text-gray-800 hover:underline font-semibold text-gray-600 ${
              isActive && `${activeStyles} font-bold text-gray-800`
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            ` hover:text-gray-800 hover:underline font-semibold text-gray-600 ${
              isActive && `${activeStyles} font-bold text-gray-800`
            }`
          }
        >
          Vans
        </NavLink>
        <div className="text-orange-400  flex items-center justify-center gap-2 text-xs font-bold">
          <Link to="/register" className="hover:text-orange-500">
            Login
          </Link>
          <Link className="hover:text-orange-500" to="/register?logout=true">
            Logout
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
