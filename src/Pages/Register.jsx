import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import bgImage from "../assets/SignUpBackground.jpg";
import GoogleIcons from "../assets/GoogleIcons.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
     e.preventDefault();
    console.log("Register with:", { name, email, photo, password });
      navigate("/"); 
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="shadow-2xl rounded-3xl p-10 w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Account
        </h2>
        {photo && (
          <div className="flex justify-center mb-4">
            <img
              src={photo}
              alt="Profile Preview"
              className="w-20 h-20 rounded-full shadow-md border border-gray-300"
            />
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
                placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

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
            <label className="block text-gray-700 font-medium mb-2">Photo URL</label>
            <input
              type="text"
                placeholder="Enter your photo URL"
              value={photo}
                onChange={(e) => setPhoto(e.target.value)}
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
          </div>

          <button
             type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl"
          >
            Register
          </button>
        </form>

       <div className="text-center text-gray-600 mt-8 text-sm">
          {/* Login Link */}
        <p>
          Already have an account?{" "}
          <Link to="/auth/login" className="text-purple-600 font-medium">
             Login
           </Link>
           </p>

            {/* Google Login */}
           <div className="flex items-center justify-center mt-4 cursor-pointer">
               <img src={GoogleIcons} alt="Google Icon" className="w-6 h-6 mr-2" />
                <span className="font-bold text-1xl bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent">
               Login With Google
           </span>
            </div>
             </div>
      </div>
    </div>
  );
};

export default Register;
