import { useParams, useNavigate } from "react-router";
import { useState, useEffect, useContext } from "react";
import { getPartnerById, sendPartnerRequest } from "../utils/api";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const PartnerDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
    const navigate = useNavigate();
  const [partner, setPartner] = useState(null);
    const [loading, setLoading] = useState(true);
  const [sendingRequest, setSendingRequest] = useState(false);

  useEffect(() => {
    if (id && id !== 'undefined') {
      fetchPartner();
    } else {
      setLoading(false);
      toast.error("Invalid partner ID");
    }
  }, [id]);

  const fetchPartner = async () => {
    if (!id || id === 'undefined') {
      toast.error("Invalid partner ID");
      return;
    }
    
    setLoading(true);
    try {
      const response = await getPartnerById(id);
       setPartner(response.data);
    } catch (error) {
      console.error("Error fetching partner:", error);
        toast.error(error.response?.data?.message || "Failed to load partner details");
    } finally {
      setLoading(false);
    }
  };

  const handleSendRequest = async () => {
    if (!user) {
      toast.error("Please login to send a partner request");
      navigate("/auth");
      return;
    }

    setSendingRequest(true);
    try {
      await sendPartnerRequest(id, user.email);
      toast.success("Partner request sent successfully!");
      // Refresh partner data to show updated partnerCount
      fetchPartner();
    } catch (error) {
      console.error("Error sending request:", error);
      toast.error(error.response?.data?.message || "Failed to send partner request");
    } finally {
      setSendingRequest(false);
    }
  };

  if (loading) return <Spinner />;
  if (!partner) return <p className="text-center mt-20 text-lg">Partner not found.</p>;

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 pt-20 px-4 pb-8">
      <div className="bg-white shadow-2xl rounded-3xl max-w-2xl w-full p-8 border border-purple-100">
        <div className="flex flex-col items-center mb-6">
          <img
            src={partner.profileimage || partner.profileImage || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
            alt={partner.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 mb-4 shadow-lg"
          />
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">{partner.name}</h2>
          <p className="text-gray-600 text-lg">{partner.subject}</p>
          {partner.rating > 0 && (
            <div className="flex items-center gap-1 mt-2">
              <span className="text-yellow-500 text-xl">★</span>
              <span className="text-gray-700 font-semibold">{partner.rating}</span>
            </div>
          )}
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Experience Level</p>
              <p className="text-lg font-semibold text-purple-700">{partner.experienceLevel}</p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Study Mode</p>
            <p className="text-lg font-semibold text-purple-700">{partner.studyMode}</p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Availability</p>
              <p className="text-lg font-semibold text-purple-700">{partner.availabilityTime}</p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Location</p>
            <p className="text-lg font-semibold text-purple-700">{partner.location}</p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
             <p className="text-sm text-gray-600 mb-1">Partner Count / Connections</p>
            <p className="text-lg font-semibold text-purple-700">{partner.partnerCount || 0}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Email</p>
            <p className="text-lg font-semibold text-gray-700">{partner.email}</p>
          </div>
        </div>

        {user ? (
          <button
            onClick={handleSendRequest}
             disabled={sendingRequest}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sendingRequest ? "Sending Request..." : "Send Partner Request"}
          </button>
        ) : (
          <button
             onClick={() => navigate("/auth")}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 shadow-md"
          >
            Login to Send Request
          </button>
        )}
      </div>
    </div>
  );
};

export default PartnerDetails;
