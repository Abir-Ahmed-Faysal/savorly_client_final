import React, { useState, useEffect, useRef } from "react";
import { FaSun, FaMoon, FaSignInAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";

const Navbar = () => {
  const { user, logOut, loading, toggleTheme, isDark } = useAuth();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  // refs for measuring / observing
  const navbarRef = useRef(null);
  const bannerRef = useRef(null);

  // Observe banner so nav background appears only after banner is scrolled past
  useEffect(() => {
    if (!isHome) return; // only observe on home

    const banner = bannerRef.current;
    const nav = navbarRef.current;
    if (!banner || !nav) return;

    // Use IntersectionObserver and set rootMargin to nav height so
    // the background appears when the banner's bottom crosses the navbar.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // when banner is not intersecting (scrolled past), we set scrolled = true
          setScrolled(!entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${nav.offsetHeight}px 0px 0px 0px`,
      }
    );

    observer.observe(banner);

    // initial check (useful if user reloads mid-page)
    const check = () => {
      const rect = banner.getBoundingClientRect();
      setScrolled(rect.bottom <= nav.offsetHeight);
    };
    check();

    window.addEventListener("resize", check);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", check);
    };
  }, [isHome]);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("log out success"))
      .catch((error) => console.log(error));
  };

  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={ !isDark ? "text-white" : "text-black"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-foods"
          className={ !isDark ? "text-white" : "text-black"}
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={ !isDark ? "text-white" : "text-black"}
        >
          Gallery
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/my-foods"
              className={!isDark ? "text-white" : "text-black"}
            >
              My Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-food"
              className={ !isDark ? "text-white" : "text-black"}
            >
              Add Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-orders"
              className={ !isDark ? "text-white" : "text-black"}
            >
              My Order
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  // add transition classes for a smooth fade
const navbarClasses = `navbar  transition-colors duration-300 ${
  isHome
    ? scrolled
      ? "bg-[rgb(255,141,107)] shadow-sm fixed top-0 left-0 w-full z-50"
      : "bg-[rgb(255,141,107)] absolute top-0 left-0 w-full z-50"
    : "bg-[rgb(255,141,107)] shadow-sm fixed top-0 left-0 w-full z-50"
}`;


  return (
    <>
      <div ref={navbarRef} className={navbarClasses}>
        <div className="w-11/12 flex mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content ${
                  isHome ? "bg-black" : "bg-[rgb(255,141,107)]"
                } rounded-box z-10 mt-3 w-52 p-2 shadow`}
              >
                {link}
              </ul>
            </div>
            <Link to="/">
              <img
                className={`h-20 invert brightness-0`}
                alt="Savourly"
                src="https://i.ibb.co.com/99P351F8/Savorly-Logo-Nav-2ef8e390c54a5606a9cd012341f38541.png"
              />
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-lg px-1">{link}</ul>
          </div>

          <div className="navbar-end gap-5">
            {!loading ? (
              user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10  rounded-full">
                      <img alt="User" src={user?.photoURL} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                  >
                    <li
                      onClick={toggleTheme}
                      className="cursor-pointer flex items-center gap-2"
                    >
                      {isDark ? (
                        <>
                          <FaSun className="text-yellow-400" />{" "}
                          <span>Light</span>
                        </>
                      ) : (
                        <>
                          <FaMoon className="text-blue-500" /> <span>Dark</span>
                        </>
                      )}
                    </li>
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
                <Link to="/log-in" className="btn text-white bg-[rgb(255,141,107)]">
                  <FaSignInAlt className="text-white" size={16} /> Log in
                </Link>
              )
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>

      {isHome && (
        <div
          id="bannerImg"
          ref={bannerRef}
          className="hero min-h-[70vh] bg-cover bg-center relative"
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-white px-4">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold mb-4">Welcome to Savourly!</h1>
              <p className="mb-6 text-lg">
                Discover a world of delightful flavors and delicious meals
                curated just for you.
              </p>
              <Link
                to="/all-foods"
                className="btn bg-[rgb(255,141,107)] text-white hover:bg-[rgb(255,141,107)]"
              >
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
