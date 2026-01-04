import React from "react";
import { useNavigate } from "react-router";
import { FaMapMarkerAlt, FaStar, FaUserGraduate } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

const StudyPartnerCard = ({ partner }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    const partnerId = partner._id || partner.id;
    if (!partnerId) {
      console.error("Partner ID is missing");
      return;
    }
    navigate(`/partner/${partnerId}`);
  };

  return (
    <div className="bg-white border border-purple-100 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col h-full">

      {/* Image */}
      <img
        src={
          partner.profileimage ||
          partner.profileImage ||
          "https://cdn-icons-png.flaticon.com/512/847/847969.png"
        }
        alt={partner.name}
        className="h-48 w-full object-cover rounded-t-2xl"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
          {partner.name}
        </h2>

        <p className="text-sm text-gray-600 line-clamp-2 mt-1">
          {partner.subject} • {partner.experienceLevel}
        </p>

        {/* Meta Info */}
        <div className="mt-3 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MdOutlineSchool className="text-purple-600" />
            {partner.studyMode}
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-purple-600" />
            {partner.location || "N/A"}
          </div>

          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            {partner.rating || "N/A"}
          </div>

          <div className="flex items-center gap-2">
            <FaUserGraduate className="text-purple-600" />
            {partner.experienceLevel}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleViewProfile}
          className="mt-auto w-full py-2 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default StudyPartnerCard;
