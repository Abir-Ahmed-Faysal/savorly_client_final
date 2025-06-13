import React from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { FaSignInAlt } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut, loading } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => alert("log out success"))
      .catch((error) => console.log(error));
  };

  const link = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>All Foods</NavLink>
      </li>
      <li>
        <NavLink>Gallery</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="w-11/12 flex mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link to={"/"}>
            <img
              className="h-20"
              alt="Savorly"
              src="https://i.ibb.co/JFKwYhjk/Chat-GPT-Image-Jun-13-2025-09-40-13-AM.png"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end gap-5">
          {!loading ? (
            <>
              {" "}
              {user ? (
                <div>
                  {" "}
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user?.photoURL}
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                      <li>
                        <NavLink>My Foods</NavLink>
                      </li>
                      <li>
                        <NavLink>Add Food</NavLink>
                      </li>
                      <li>
                        <NavLink>My orders</NavLink>
                      </li>
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="text-red-500 hover:text-white hover:bg-red-500"
                        >
                          Log out <FiLogOut />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <Link to={"/log-in"} className="btn btn-primary">
                    <FaSignInAlt className="text-white" size={16} /> Log in
                  </Link>
                </div>
              )}
            </>
          ) : <div>Loading...</div>}

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
