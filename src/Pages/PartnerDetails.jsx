import { useParams } from "react-router";
import { topStudyPartners } from "../components/data/mockData";

const PartnerDetails = () => {
  const { id } = useParams();
  const partner = topStudyPartners.find((p) => p.id === id);

  if (!partner) return <p className="text-center mt-20 text-lg">Partner not found.</p>;

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 pt-20 px-4">
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6">
        <div className="flex flex-col items-center mb-6">
            <img
            src={partner.profileImage}
             alt={partner.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-purple-500 mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">{partner.name}</h2>
          <p className="text-gray-600 text-sm">{partner.subject} Tutor</p>
        </div>
        <div className="space-y-3">
          <p><strong>Experience Level:</strong> {partner.experienceLevel}</p>
            <p><strong>Availability:</strong> {partner.availabilityTime}</p>
          <p><strong>Study Mode:</strong> {partner.studyMode}</p>
          <p><strong>Location:</strong> {partner.location}</p>
           <p><strong>Email:</strong> {partner.email}</p>
          <p><strong>Additional Info:</strong> {partner.info || "N/A"}</p>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Skills:</h3>
          <div className="flex flex-wrap gap-2">
            {partner.skills.map((skill, idx) => (
              <span key={idx} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
