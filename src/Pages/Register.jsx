import React, { useState, useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import bgImage from "../assets/SignUpBackground.jpg";
import GoogleIcons from "../assets/GoogleIcons.png";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
    const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const validatePassword = (pwd) =>
    /[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && pwd.length >= 6;

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      toast.error(
        "Password must have 1 uppercase, 1 lowercase, and be at least 6 characters long"
      );
      return;
    }

    const newUser = { name, email, photoURL: photo || "https://via.placeholder.com/40" };
      setUser(newUser);
    toast.success("Registration Successful!");

    setTimeout(() => navigate(from, { replace: true }), 500); 
  };

  const handleGoogleRegister = () => {
    const googleUser = { name: "Google User", email: "googleuser@example.com", photoURL: "https://via.placeholder.com/40" };
     setUser(googleUser);
    toast.success("Registered with Google!");
    setTimeout(() => navigate(from, { replace: true }), 500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="shadow-2xl rounded-3xl p-10 w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Account</h2>
        {photo && (
          <div className="flex justify-center mb-4">
              <img src={photo} alt="Profile Preview" className="w-20 h-20 rounded-full shadow-md border border-gray-300" />
          </div>
        )}
        <form onSubmit={handleRegister} className="space-y-5">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400" />
            <input type="text" placeholder="Photo URL" value={photo} onChange={(e) => setPhoto(e.target.value)} className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-400" />
          <button type="submit" className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl">Register</button>
        </form>
        <div className="text-center text-gray-600 mt-8 text-sm">
          <p>Already have an account? <Link to="/auth/login" className="text-purple-600 font-medium">Login</Link></p>
          <div className="flex items-center justify-center mt-4 cursor-pointer" onClick={handleGoogleRegister}>
              <img src={GoogleIcons} alt="Google Icon" className="w-6 h-6 mr-2" />
            <span className="font-bold text-1xl bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent">Login With Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
