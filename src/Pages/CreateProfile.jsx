import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const CreateProfile = () => {
  const { user } = useContext(AuthContext);
    const [photo, setPhoto] = useState(user?.photoURL || "");
  const [bio, setBio] = useState("");
    const [skills, setSkills] = useState("");
  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      const profile = JSON.parse(saved);
      setPhoto(profile.photo || "");
      setBio(profile.bio || "");
        setSkills(profile.skills || "");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = { 
      name: user?.displayName || user?.email, 
      email: user?.email, 
      photo, 
      bio, 
      skills 
    };
    localStorage.setItem("userProfile", JSON.stringify(profile));
    Swal.fire("Success", "Profile saved locally!", "success");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg border border-purple-100">
          <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
          Create Partner Profile
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src={photo || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
            className="w-28 h-28 rounded-full object-cover border-4 border-purple-300 shadow-md"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Photo URL</label>
            <input
               type="text"
               placeholder="Paste your image URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Bio</label>
            <textarea
                placeholder="Tell others about your background, goals, and interests"
              value={bio}
               onChange={(e) => setBio(e.target.value)}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Skills / Interests</label>
            <input
              type="text"
                placeholder="e.g. React, JavaScript, Communication"
                value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 shadow-md"
          >
            Save Profile
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-5">
          Logged in as:{" "}
          <span className="font-semibold text-purple-600">
            {user?.email || "Guest"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CreateProfile;
