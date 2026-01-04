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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return toast.error("Please login to create a profile");

    const required = ["name", "subject", "availabilityTime", "location"];
    for (const field of required) {
      if (!formData[field]?.trim()) return toast.error("Please fill all required fields");
    }

    setLoading(true);
    try {
      await createPartner(formData);
      toast.success("Profile created successfully!");
      navigate("/connections");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to create profile");
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
          {/* Name */}
          <InputField label="Name *" name="name" value={formData.name} onChange={handleChange} />

          {/* Profile Image */}
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

          {/* Subject */}
          <InputField label="Subject *" name="subject" value={formData.subject} onChange={handleChange} placeholder="Mathematics, English, Programming" />

          {/* Study Mode */}
          <SelectField
            label="Study Mode *"
            name="studyMode"
            value={formData.studyMode}
            onChange={handleChange}
            options={["Online", "Offline"]}
          />

          {/* Availability */}
          <InputField label="Availability Time *" name="availabilityTime" value={formData.availabilityTime} onChange={handleChange} placeholder="Evening 6-9 PM" />

          {/* Location */}
          <InputField label="Location *" name="location" value={formData.location} onChange={handleChange} placeholder="City, area, or preferred location" />

          {/* Experience */}
          <SelectField
            label="Experience Level *"
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            options={["Beginner", "Intermediate", "Expert"]}
          />

          {/* Email */}
          <InputField label="Email (Read Only)" name="email" value={formData.email} readOnly disabled />

          <button className="w-full py-3 mt-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 shadow-md">
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, placeholder, readOnly, disabled }) => (
  <div>
    <label className="block text-gray-700 font-semibold mb-2">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
      className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500 ${
        disabled ? "bg-gray-100 cursor-not-allowed" : ""
      }`}
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-gray-700 font-semibold mb-2">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 bg-white"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default CreateProfile;
