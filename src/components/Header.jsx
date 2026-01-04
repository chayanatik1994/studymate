import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import Logo from "../assets/connecting.png";
import { AuthContext } from "../provider/AuthProvider";
import { ThemeContext } from "../provider/ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut, loading } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const isLoggedIn = !!user;

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const navLinkClass = (isActive) =>
    `px-3 py-2 rounded-md transition ${
      isActive ? "text-teal-500" : "text-black"
    } hover:text-teal-500 focus:outline-none`;

  const mobileNavLinkClass = (isActive) =>
    `px-2 py-2 rounded-md transition ${
      isActive ? "text-teal-500" : "text-black"
    } hover:text-teal-500 focus:outline-none`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="StudyMate Logo"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-sm object-cover"
          />
          <span className="text-2xl md:text-3xl font-bold text-black">
            StudyMate
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={({ isActive }) => navLinkClass(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="/find-partners"
            className={({ isActive }) => navLinkClass(isActive)}
          >
            Find Partners
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => navLinkClass(isActive)}
          >
            Learn About Us
          </NavLink>
          {isLoggedIn && (
            <>
              <NavLink
                to="/create-profile"
                className={({ isActive }) => navLinkClass(isActive)}
              >
                Create Partner Profile
              </NavLink>
              <NavLink
                to="/connections"
                className={({ isActive }) => navLinkClass(isActive)}
              >
                My Connections
              </NavLink>
            </>
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle text-black"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          {!loading &&
            (isLoggedIn ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user.photoURL || "https://via.placeholder.com/40"}
                      alt="User Profile"
                    />
                  </div>
                </label>
                <ul className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 text-black">
                  <li>
                    <NavLink
                      to="/profile"
                      className={({ isActive }) => mobileNavLinkClass(isActive)}
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="px-2 py-2 rounded text-black hover:text-teal-500 w-full text-left transition"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <NavLink
                  to="/auth"
                  className="btn bg-purple-500 text-white w-24 md:w-32 hover:bg-purple-600 rounded-md shadow"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/auth/register"
                  className="btn bg-teal-500 text-white w-24 md:w-32 hover:bg-teal-600 rounded-md shadow"
                >
                  Register
                </NavLink>
              </>
            ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="btn btn-ghost p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full px-4 py-2 flex flex-col gap-2 text-center shadow">
          <button
            onClick={toggleTheme}
            className="px-2 py-2 rounded transition flex items-center justify-center gap-2 text-black hover:text-teal-500"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
            <span>{theme === "light" ? " Dark Mode" : " Light Mode"}</span>
          </button>

          <NavLink
            to="/"
            className={({ isActive }) => mobileNavLinkClass(isActive)}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/find-partners"
            className={({ isActive }) => mobileNavLinkClass(isActive)}
            onClick={() => setMenuOpen(false)}
          >
            Find Partners
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => mobileNavLinkClass(isActive)}
            onClick={() => setMenuOpen(false)}
          >
            Learn About Us
          </NavLink>

          {!loading &&
            (isLoggedIn ? (
              <>
                <NavLink
                  to="/create-profile"
                  className={({ isActive }) => mobileNavLinkClass(isActive)}
                  onClick={() => setMenuOpen(false)}
                >
                  Create Partner Profile
                </NavLink>
                <NavLink
                  to="/connections"
                  className={({ isActive }) => mobileNavLinkClass(isActive)}
                  onClick={() => setMenuOpen(false)}
                >
                  My Connections
                </NavLink>
                <NavLink
                  to="/profile"
                  className={({ isActive }) => mobileNavLinkClass(isActive)}
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="px-2 py-2 rounded text-black hover:text-teal-500 w-full transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/auth"
                  className="btn w-full bg-purple-500 text-white hover:bg-purple-600 rounded-md shadow"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/auth/register"
                  className="btn w-full bg-teal-500 text-white hover:bg-teal-600 rounded-md shadow"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </NavLink>
              </>
            ))}
        </div>
      )}
    </header>
  );
};

export default Header;
