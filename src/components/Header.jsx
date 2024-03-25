import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const activeStyles = "font-bold text-gray-800 underline";

  return (
    <header className="flex justify-between items-center m-4">
      <Link to="/">
        <h1 className="text-2xl font-black">#VANLIFE</h1>
      </Link>
      <nav className="flex justify-between">
        <NavLink
          to="/host"
          className={({ isActive }) =>
            `mx-3 font-semibold text-gray-600 ${isActive && activeStyles}`
          }
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `mx-3 font-semibold text-gray-600 ${isActive && activeStyles}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            `mx-3 font-semibold text-gray-600 ${isActive && activeStyles}`
          }
        >
          Vans
        </NavLink>
        <Link to="/login" className="mx-3 font-bold text-black">
          <FontAwesomeIcon icon={faRightToBracket} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
