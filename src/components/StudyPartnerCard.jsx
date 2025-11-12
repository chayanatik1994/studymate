import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const StudyPartnerCard = ({ partner }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleViewProfile = () => {
    if (user && user.email === partner.email) {
      navigate("/profile");
    } else {
      navigate(`/partner/${partner.id}`);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
          src={partner.profileImage}
        alt={partner.name}
        className="w-24 h-24 rounded-full object-cover border-2 border-purple-500 mb-4"
      />
      <h2 className="text-xl font-semibold">{partner.name}</h2>
      <p className="text-gray-600 text-sm">{partner.subject} Student</p>
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
