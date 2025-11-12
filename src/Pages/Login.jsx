import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router";
import bgImage from "../assets/LoginBackground.jpg";
import GoogleIcons from "../assets/GoogleIcons.png";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import logo from "../assets/connecting.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
         navigate("/profile", { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
        await loginWithGoogle();
      navigate("/profile", { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
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
          Welcome Back to StudyMate
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              required
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
            {/* Navigate to ForgotPassword page and pass email */}
          <button
            onClick={() =>
                navigate("/auth/forgot-password", { state: { email } })
            }
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <div className="text-center mt-8 text-sm">
          <p className="text-purple-600 mb-4">
              Don’t have an account?{" "}
            <Link to="/auth/register" className="text-green-600 font-medium">
              Register
            </Link>
          </p>
          <div
            className="flex items-center justify-center cursor-pointer border border-gray-300 rounded-xl py-2 hover:bg-gray-100 transition"
            onClick={handleGoogleLogin}
          >
            <img
              src={GoogleIcons}
              alt="Google Icon"
              className="w-6 h-6 mr-2"
            />
            <span className="font-bold text-gray-700">Login With Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
