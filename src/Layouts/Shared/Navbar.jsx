/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="navbar bg-secondary md:p-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            {user && (
              <li>
                <button onClick={handleLogout} className="btn btn-link ">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <Link
          to="/"
          style={{ fontFamily: "Satisfy" }}
          className="btn btn-ghost normal-case text-xl md:text-3xl text-primary"
        >
          Baburchi Ghor
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-primary font-bold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li tabIndex={0} className="text-primary font-bold md:mx-2">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          {user && (
            <li>
              <button
                onClick={handleLogout}
                className="btn btn-link text-white"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} title={user?.displayName} />
              </div>
            </label>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary text-white">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
