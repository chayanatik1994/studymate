import React, { useState, useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import bgImage from "../assets/LoginBackground.jpg";
import GoogleIcons from "../assets/GoogleIcons.png";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import logo from "../assets/connecting.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      const loggedUser = { name: "Demo User", email, photoURL: "https://via.placeholder.com/40" };
        setUser(loggedUser);
      toast.success("Login Successful!");
        setTimeout(() => navigate(from, { replace: true }), 500);
    } else {
      toast.error("Login Failed. Please enter valid credentials.");
    }
  };

  const handleGoogleLogin = () => {
        const googleUser = { name: "Google User", email: "googleuser@example.com", photoURL: "https://via.placeholder.com/40" };
      setUser(googleUser);
    toast.success("Logged in with Google!");
    setTimeout(() => navigate(from, { replace: true }), 500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="shadow-2xl rounded-3xl p-10 w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md">
          <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full shadow-md border border-gray-200" />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back to StudyMate</h2>
          <form onSubmit={handleLogin} className="space-y-5">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400" />
          <button type="submit" className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl">Login</button>
        </form>
          <div className="text-center mt-8 text-sm">
          <p className="text-purple-600 mb-4">Don’t have an account? <Link to="/auth/register" className="text-green-600 font-medium">Register</Link></p>
          <div className="flex items-center justify-center cursor-pointer border border-gray-300 rounded-xl py-2 hover:bg-gray-100 transition" onClick={handleGoogleLogin}>
            <img src={GoogleIcons} alt="Google Icon" className="w-6 h-6 mr-2" />
              <span className="font-bold text-gray-700">Login With Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
