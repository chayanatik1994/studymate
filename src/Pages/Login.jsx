import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import logo from "../assets/connecting.png";
import bgImage from "../assets/LoginBackground.jpg";
import GoogleIcons from "../assets/GoogleIcons.png"

const Login = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const navigate = useNavigate();
       const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
      console.log("Login with:", email, password);
    navigate(from, { replace: true });
  };

   const handleForgotPassword = () => {
    navigate("/auth/forgot-password", { state: { email } });
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
        <div className="shadow-2xl rounded-3xl p-10 w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md">
        <div className="flex justify-center mb-6">
          <img
              src={logo}
            alt="Logo"
            className="w-20 h-20 rounded-full shadow-md border border-gray-200"
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Welcome Back to StudyMate Website
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
                type="email"
              placeholder="Enter your email"
              value={email}
                onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
                value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <div className="text-right mt-2">
              <button
                type="button"
                  onClick={handleForgotPassword}
                className="text-sm text-red-600 font-medium"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          <button
             type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl"
          >
            Login
           </button>
        </form>

      <div className="text-center mt-8 text-sm">
  {/* Register Link */}
        <p className="text-purple-600 mb-4">
            Don’t have an account?{" "}
         <Link to="/auth/register" className="text-green-600 font-medium">
           Register
        </Link>
      </p>

      {/* Google Login */}
        <div className="flex items-center justify-center cursor-pointer">
         <img src={GoogleIcons} alt="Google Icon" className="w-6 h-6 mr-2" />
          <h2 className="font-bold text-1xl bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
             Login With Google
          </h2>
      </div>
     </div>

      </div>
    </div>
  );
};

export default Login;
