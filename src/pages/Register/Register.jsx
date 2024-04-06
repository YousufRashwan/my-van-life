import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import OrangeVan from "../../assets/orange-van.jpg";

const Register = () => {
  const activeStyles = "text-black bg-orange-50 bg-opacity-30";

  return (
    <div
      className="mx-auto my-auto w-2/3 h-[470px] sm:w-auto
    lg:w-[1000px] lg:mx-auto sm:mx-4 flex rounded-3xl drop-shadow-2xl
    overflow-hidden"
    >
      <div
        style={{ backgroundImage: `url(${OrangeVan})` }}
        className="relative bg-cover bg-center w-0 sm:w-1/2 md:w-3/5 "
      >
        <div
          className="flex flex-col w-24 items-center justify-center
        text-sm font-semibold absolute top-1/4 right-0"
        >
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              `w-full transition-colors py-4 text-center rounded-l-3xl ${
                isActive ? activeStyles : " text-orange-50"
              }`
            }
          >
            LOGIN
          </NavLink>
          <NavLink
            to="signup"
            className={({ isActive }) =>
              `w-full transition-colors py-4 text-center rounded-l-3xl ${
                isActive ? activeStyles : " text-orange-50"
              }`
            }
          >
            SIGN UP
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Register;
