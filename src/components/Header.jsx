import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import Logo from '../assets/connecting.png';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const isLoggedIn = !!user;

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/', { replace: true }); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="bg-purple-700 text-white shadow-md w-full relative">
      <div className="flex items-center justify-between px-4 py-4 md:px-8 relative">
        <div className="flex items-center gap-3">
           <img src={Logo} alt="StudyMate Logo" className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-sm" />
          <span className="text-2xl md:text-3xl font-bold">StudyMate</span>
        </div>

        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
          <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded hover:bg-purple-800 transition ${isActive ? 'bg-purple-900' : ''}`}>Home</NavLink>
           <NavLink to="/find-partners" className={({ isActive }) => `px-3 py-2 rounded hover:bg-purple-800 transition ${isActive ? 'bg-purple-900' : ''}`}>Find Partners</NavLink>
            {isLoggedIn && (
            <>
              <NavLink to="/create-profile" className={({ isActive }) => `px-3 py-2 rounded hover:bg-purple-800 transition ${isActive ? 'bg-purple-900' : ''}`}>Create Partner Profile</NavLink>
              <NavLink to="/connections" className={({ isActive }) => `px-3 py-2 rounded hover:bg-purple-800 transition ${isActive ? 'bg-purple-900' : ''}`}>My Connections</NavLink>
            </>
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {!loading && (
            isLoggedIn ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                     <img src={user.photoURL || 'https://via.placeholder.com/40'} alt="User Profile" />
                  </div>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 text-black">
                  <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
              </div>
            ) : (
              <>
                <NavLink to="/auth" className="btn bg-purple-500 text-white w-24 md:w-32 hover:bg-purple-600 rounded-md shadow">Login</NavLink>
                <NavLink to="/auth/register" className="btn bg-teal-500 text-white w-24 md:w-32 hover:bg-teal-600 rounded-md shadow">Register</NavLink>
                </>
            )
          )}
        </div>

        <div className="md:hidden">
          <button className="btn btn-ghost p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-purple-600 w-full px-4 py-2 flex flex-col gap-2 text-center">
          <NavLink to="/" className="px-2 py-2 rounded hover:bg-purple-800 transition" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/find-partners" className="px-2 py-2 rounded hover:bg-purple-800 transition" onClick={() => setMenuOpen(false)}>Find Partners</NavLink>
          {!loading && (
            isLoggedIn ? (
              <>
                  <NavLink to="/create-profile" className="px-2 py-2 rounded hover:bg-purple-800 transition" onClick={() => setMenuOpen(false)}>Create Partner Profile</NavLink>
                  <NavLink to="/connections" className="px-2 py-2 rounded hover:bg-purple-800 transition" onClick={() => setMenuOpen(false)}>My Connections</NavLink>
                  <NavLink to="/profile" className="px-2 py-2 rounded hover:bg-gray-200 text-black" onClick={() => setMenuOpen(false)}>Profile</NavLink>
                <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="px-2 py-2 rounded hover:bg-gray-200 text-black">Logout</button>
              </>
            ) : (
              <>
                  <NavLink to="/auth" className="btn w-full bg-purple-500 text-white hover:bg-purple-600 rounded-md shadow" onClick={() => setMenuOpen(false)}>Login</NavLink>
                <NavLink to="/auth/register" className="btn w-full bg-teal-500 text-white hover:bg-teal-600 rounded-md shadow" onClick={() => setMenuOpen(false)}>Register</NavLink>
              </>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
