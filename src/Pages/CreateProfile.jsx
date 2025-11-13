import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { createPartner } from "../utils/api";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const CreateProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    profileimage: user?.photoURL || "",
    subject: "",
      studyMode: "Online",
    availabilityTime: "",
    location: "",
      experienceLevel: "Beginner",
    rating: 0,
    partnerCount: 0,
    email: user?.email || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      toast.error("Please login to create a profile");
       return;
    }

    // Validation
    if (!formData.name || !formData.subject || !formData.availabilityTime || !formData.location) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const response = await createPartner(formData);
      toast.success("Profile created successfully!");
       navigate("/connections");
    } catch (error) {
      console.error("Error creating profile:", error);
        toast.error(error.response?.data?.message || "Failed to create profile");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl border border-purple-100">
        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
            Create Partner Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name *</label>
            <input
              type="text"
               name="name"
              placeholder="Full name"
                value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Profile Image URL</label>
            <input
              type="text"
              name="profileimage"
              placeholder="https://example.com/image.jpg"
               value={formData.profileimage}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
            />
            {formData.profileimage && (
              <img
                src={formData.profileimage}
                alt="Preview"
                 className="w-20 h-20 rounded-full object-cover mt-2 border-2 border-purple-300"
              />
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
            <input
              type="text"
              name="subject"
               placeholder="Mathematics, English, Programming"
              value={formData.subject}
               onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Study Mode *</label>
            <select
                name="studyMode"
              value={formData.studyMode}
               onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 bg-white"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Availability Time *</label>
            <input
              type="text"
              name="availabilityTime"
                placeholder="Evening 6-9 PM"
              value={formData.availabilityTime}
               onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Location *</label>
            <input
              type="text"
              name="location"
                placeholder="City, area, or preferred location"
               value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Experience Level *</label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
               onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 bg-white"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email (Read Only)</label>
            <input
              type="email"
               name="email"
              value={formData.email}
              readOnly
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 cursor-not-allowed text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 shadow-md"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
