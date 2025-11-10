import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";


const StudyPartnerCard = ({ partner, user }) => {
  const navigate = useNavigate();
  const handleViewProfile = () => navigate(user ? `/partner/${partner.id}` : "/auth");

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      <img
        src={partner.profileImage}
        alt={partner.name}
        className="w-30 h-30 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold">{partner.name}</h3>
      <p className="text-gray-500 mb-2">
          {partner.subject} • {partner.skills.join(", ")}
      </p>
      <p className="text-yellow-400 mb-4 flex items-center gap-1">
          <FaStar /> {partner.rating || 0}
      </p>
      <button
          onClick={handleViewProfile}
        className="px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
      >
        View Profile
      </button>
    </div>
  );
};

export default StudyPartnerCard;
