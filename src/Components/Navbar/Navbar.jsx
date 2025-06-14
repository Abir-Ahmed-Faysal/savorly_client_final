import React from "react";
import { Link, NavLink, useLocation } from "react-router";
import { FaSignInAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut, loading } = useAuth();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleLogOut = () => {
    logOut()
      .then(() => alert("log out success"))
      .catch((error) => console.log(error));
  };

  const link = (
    <>
      <li>
        <NavLink to="/" className={isHome?'text-white':'text-black'}>Home</NavLink>
      </li>
      <li>
        <NavLink  to="/all-foods" className={isHome?'text-white':'text-black'}>All Foods</NavLink>
      </li>
      <li>
        <NavLink to="/gallery" className={isHome?'text-white':'text-black'}>Gallery</NavLink>
      </li>
    </>
  );

  return (
    <>
  
      <div
        className={`navbar shadow-sm ${
          isHome ? "bg-transparent absolute top-0 left-0 z-50" : "bg-base-100"
        }`}
      >
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                {link}
              </ul>
            </div>
            <Link to="/">
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
              user ? (
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img alt="User" src={user?.photoURL} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <NavLink to="/my-foods">My Foods</NavLink>
                    </li>
                    <li>
                      <NavLink to="/add-food">Add Food</NavLink>
                    </li>
                    <li>
                      <NavLink to="/my-orders">My Orders</NavLink>
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
              ) : (
                <Link to="/log-in" className="btn btn-primary">
                  <FaSignInAlt className="text-white" size={16} /> Log in
                </Link>
              )
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>

      {/* Banner (only on Home page) */}
      {isHome && (
        <div
          className="hero min-h-[70vh] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1170&q=80')",
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-60"></div>
          <div className="hero-content text-center text-white px-4">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold mb-4">Welcome to Savorly!</h1>
              <p className="mb-6 text-lg">
                Discover a world of delightful flavors and delicious meals curated just for you.
              </p>
              <Link to="/all-foods" className="btn btn-accent text-white">
                Explore All Foods
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
