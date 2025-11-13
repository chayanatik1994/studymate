import React from "react";
import { useNavigate } from "react-router";

const StudyPartnerCard = ({ partner }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    const partnerId = partner._id || partner.id;
    if (!partnerId) {
      console.error("Partner ID is missing");
      return;
    }
    // Always navigate to partner details page
    navigate(`/partner/${partnerId}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
          src={partner.profileimage || partner.profileImage || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
        alt={partner.name}
        className="w-24 h-24 rounded-full object-cover border-2 border-purple-500 mb-4"
      />
      <h2 className="text-xl font-semibold">{partner.name}</h2>
        <p className="text-gray-600 text-sm">{partner.subject}</p>
        <p className="text-gray-500 text-xs mt-1">{partner.studyMode}</p>
        <p className="text-gray-500 text-xs">{partner.experienceLevel}</p>
      <button
          onClick={handleViewProfile}
        className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        View Profile
      </button>
    </div>
  );
};

export default StudyPartnerCard;
