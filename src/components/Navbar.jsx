import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../providers/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {

  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Logout successfully.`,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

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
      {!user && (
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
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "bg-red-700 text-white" : ""}`
            }
            to={`/my-plants/${user?.email}`}
          >
            Recommendations For Me
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "bg-red-700 text-white" : ""}`
            }
            to={`/my-queries/${user?.email}`}
          >
            My Queries
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "bg-red-700 text-white" : ""}`
            }
            to={`/my-plants/${user?.email}`}
          >
            My recommendations
          </NavLink>
        </li>
      )}
      {user && (
        <button
          onClick={handleLogout}
          className="btn bg-white border border-red-700 text-red-700 px-5"
        >
          Logout
        </button>
      )}
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
          </ul>
        </div>
        <div className="flex items-center gap-2 pl-5">
          <img className="hidden lg:flex w-7" src={logo} alt="" />
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
      <div className="navbar-center hidden lg:flex lg:items-center">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end px-5">

        {/* {user ? (
          <div className="flex items-center gap-2">
            <div className="tooltip tooltip-bottom" data-tip={user.name || ""}>
              <img
                className="w-10 h-10 rounded-full hidden lg:block"
                src={user.photoURL}
                alt="user profile pic"
              />
            </div>
            <button
              onClick={handleLogout}
              className="btn bg-red-600 text-white px-5"
            >
              Logout
            </button>
          </div>
        ) : ""} */}

      </div>
    </div>
  );
};

export default Navbar;
