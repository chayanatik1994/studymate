import React, { useState } from 'react';
import { NavLink } from 'react-router';
import Logo from '../assets/connecting.png';

const Header = ({ isLoggedIn, user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-purple-700 text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-6">

          <div className="flex items-center mb-3 md:mb-0">
          <img src={Logo} alt="StudyMate Logo" className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-full shadow-sm" />
            <span className="text-2xl md:text-3xl font-bold ml-0">StudyMate</span>
        </div>

        <div className="md:hidden mb-3 md:mb-0">
            <button className="btn btn-ghost p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex flex-1 gap-4 md:gap-6 justify-center text-center">
            <NavLink to="/" className={({ isActive }) => `px-2 py-1 rounded hover:bg-purple-800 transition ${isActive ? 'bg-purple-900' : ''}`}>Home</NavLink>
            <NavLink to="/find-partners" className={({ isActive }) => `px-2 py-1 rounded hover:bg-purple-800 transition ${isActive ? 'bg-purple-900' : ''}`}>Find Partners</NavLink>
          {isLoggedIn && <>
             <NavLink to="/create-profile" className={({ isActive }) => `px-2 py-1 rounded hover:bg-purple-800 transition ${isActive ? 'bg-purple-900' : ''}`}>Create Partner Profile</NavLink>
              <NavLink to="/connections" className={({ isActive }) => `px-2 py-1 rounded hover:bg-purple-800 transition ${isActive ? 'bg-purple-900' : ''}`}>My Connections</NavLink>
          </>}
        </nav>
   <div className="hidden md:flex gap-3">
          {isLoggedIn ? (
              <div className="dropdown dropdown-end">
                 <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="User Profile" />
                  </div>
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 text-black">
                  <li><NavLink to="/profile">Profile</NavLink></li>
                  <li><button onClick={onLogout}>Logout</button></li>
              </ul>
              </div>
          ) : (
            <>
                <NavLink to="/auth" className="btn bg-purple-500 text-white w-32 hover:bg-purple-600 rounded-md shadow">Login</NavLink>
              <NavLink to="/auth" className="btn bg-teal-500 text-white w-32 hover:bg-teal-600 rounded-md shadow">Register</NavLink>
            </>
          )}
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-2 mt-2 w-full text-center">
              <NavLink to="/" className="px-2 py-1 rounded hover:bg-purple-800 transition" onClick={() => setMenuOpen(false)}>Home</NavLink>
              <NavLink to="/find-partners" className="px-2 py-1 rounded hover:bg-purple-800 transition" onClick={() => setMenuOpen(false)}>Find Partners</NavLink>

            {!isLoggedIn ? (
              <>
                  <NavLink to="/auth" className="btn w-full bg-purple-500 text-white hover:bg-purple-600 rounded-md shadow" onClick={() => setMenuOpen(false)}>Login</NavLink>
                  <NavLink to="/auth" className="btn w-full bg-teal-500 text-white hover:bg-teal-600 rounded-md shadow" onClick={() => setMenuOpen(false)}>Register</NavLink>
              </>
            ) : (
              <>
                 <NavLink to="/create-profile" className="px-2 py-1 rounded hover:bg-purple-800 transition" onClick={() => setMenuOpen(false)}>Create Partner Profile</NavLink>
                  <NavLink to="/connections" className="px-2 py-1 rounded hover:bg-purple-800 transition" onClick={() => setMenuOpen(false)}>My Connections</NavLink>
                  <NavLink to="/profile" className="px-2 py-1 rounded hover:bg-gray-200 text-black" onClick={() => setMenuOpen(false)}>Profile</NavLink>
                <button onClick={() => { onLogout(); setMenuOpen(false); }} className="px-2 py-1 rounded hover:bg-gray-200 text-black">Logout</button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
