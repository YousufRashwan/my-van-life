import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const activeStyles = "font-bold text-gray-800 underline";

  return (
    <header className="flex justify-between items-center m-2 my-6 p-2">
      <Link to="/">
        <h1 className="text-2xl font-black">#VANLIFE</h1>
      </Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) =>
            `mx-3 hover:text-gray-800 hover:underline font-semibold text-gray-600 ${
              isActive && `${activeStyles} font-bold text-gray-800`
            }`
          }
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `mx-3 hover:text-gray-800 hover:underline font-semibold text-gray-600 ${
              isActive && `${activeStyles} font-bold text-gray-800`
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            `mx-3 hover:text-gray-800 hover:underline font-semibold text-gray-600 ${
              isActive && `${activeStyles} font-bold text-gray-800`
            }`
          }
        >
          Vans
        </NavLink>
        <Link to="/register" className="mx-3 font-bold text-black">
          <FontAwesomeIcon icon={faRightToBracket} />
        </Link>
        <button onClick={() => localStorage.removeItem("loggedin")}>X</button>
      </nav>
    </header>
  );
};

export default Header;
