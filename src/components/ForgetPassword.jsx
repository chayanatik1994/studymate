import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const ForgotPassword = () => {
  const location = useLocation();
    const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) setEmail(location.state.email);
  }, [location]);

  const handleReset = async (e) => {
    e.preventDefault();
      if (!email) return Swal.fire("Error", "Enter your email", "error");

    try {
      await sendPasswordResetEmail(auth, email); 
        Swal.fire(
        "Success",
        "Password reset email sent! Check inbox/spam folder.",
        "success"
      );
      setEmail("");
      setTimeout(() => navigate("/auth/login"), 2000);
    } catch (error) {
      console.error(error);
      if (error.code === "auth/user-not-found") {
          Swal.fire("Error", "No user found with this email", "error");
      } else if (error.code === "auth/invalid-email") {
          Swal.fire("Error", "Invalid email", "error");
      } else {
          Swal.fire("Error", error.message || "Something went wrong", "error");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-blue-200">
      <div className="p-8 bg-white shadow-xl rounded-3xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
             placeholder="Enter your email"
            value={email}
              onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
             required
          />
          <button
            type="submit"
              className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md"
          >
            Reset Password
          </button>
         </form>
        <p
          className="mt-4 text-center text-sm text-blue-600 cursor-pointer"
           onClick={() => navigate("/auth/login")}
        >
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
