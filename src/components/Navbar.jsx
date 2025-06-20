import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "bg-red-700 text-white" : ""}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "bg-red-700 text-white" : ""}`
          }
          to="/queries"
        >
          Queries
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "bg-red-700 text-white" : ""}`
          }
          to="/login"
        >
          Log-in
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className={"btn btn-ghost lg:hidden"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* dropdown for mobile screen */}
          <ul
            tabIndex={0}
            className={
              "menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-base-100"
            }
          >
            {links}
            {/* <div className="flex flex-col gap-2 mt-3">
              <Link
                to="/login"
                className={"px-4 border-2 border-red-700"}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={"px-4 border-2 border-red-700"}
              >
                Register
              </Link>
            </div> */}
          </ul>
        </div>
        <div className="flex items-center gap-2 pl-5">
          <img
            className="hidden lg:flex w-7"
            src={logo}
            alt=""
          />
          <Link
            to="/"
            className={
              "font-semibold text-xl md:font-bold md:text-2xl lg:font-bold lg:text-2xl text-red-700"
            }
          >
            Suggesto
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end px-5">
        {/* <div className="space-x-4 hidden lg:flex">
          <Link
            to="/login"
            className={"btn px-5 border-2 border-red-700 text-red-700"}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={"btn px-5 border-2 border-red-700 text-red-700"}
          >
            Register
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
