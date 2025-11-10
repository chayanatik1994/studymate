import { useParams } from "react-router";
import { topStudyPartners } from "../components/data/mockData";

const PartnerDetails = () => {
  const { id } = useParams(); 
  const partner = topStudyPartners.find((p) => p.id === parseInt(id));

  if (!partner) return <p className="p-6">Partner not found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">{partner.name}</h2>
      <p className="mb-2"><strong>Subject:</strong> {partner.subject}</p>
      <p className="mb-2"><strong>Experience Level:</strong> {partner.experienceLevel}</p>
      <p className="mb-2"><strong>Additional Info:</strong> {partner.info}</p>
    </div>
  );
};

export default PartnerDetails;
