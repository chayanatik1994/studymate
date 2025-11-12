import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-center text-lg text-gray-600 mt-20">
          Please login to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-20 px-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-xl p-6 space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            src={user.photoURL || "https://via.placeholder.com/120"}
            alt="Profile"
            className="w-28 h-28 rounded-full shadow-md object-cover border-4 border-purple-500"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {user.displayName || "No Name"}
          </h2>
          <p className="text-gray-600 mt-1">{user.email}</p>
        </div>

        {/* Profile Details */}
        <div className="bg-purple-50 p-4 rounded-lg space-y-3">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Name:</span>
            <span className="text-gray-800">{user.displayName || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Email:</span>
            <span className="text-gray-800">{user.email}</span>
          </div>
      
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Member Since:</span>
            <span className="text-gray-800">
              {user.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : "N/A"}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center">
          <button
            className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
            onClick={() => alert("Edit profile feature coming soon!")}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
