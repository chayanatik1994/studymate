import { useParams, useNavigate } from "react-router";
import { useState, useEffect, useContext, useCallback } from "react";
import { getPartnerById, sendPartnerRequest } from "../utils/api";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import {
  FaStar,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaClock,
  FaBook,
} from "react-icons/fa";

const PartnerDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const fetchPartner = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getPartnerById(id);
      setPartner(res?.data ?? null);
    } catch {
      toast.error("Failed to load partner details");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) fetchPartner();
  }, [id, fetchPartner]);

  const image =
    partner?.profileImage ||
    partner?.profileimage ||
    "/placeholder.jpg";

  const handleRequest = async () => {
    if (!user) {
      toast.error("Login required");
      navigate("/auth");
      return;
    }
    try {
      setSending(true);
      await sendPartnerRequest(id, user.email);
      toast.success("Partner request sent");
      fetchPartner();
    } catch {
      toast.error("Request failed");
    } finally {
      setSending(false);
    }
  };

  if (loading) return <Spinner />;
  if (!partner)
    return <p className="text-center mt-20">Partner not found</p>;

  return (
    <main className="max-w-7xl mx-auto px-4 py-14 space-y-14">
      <section className="grid md:grid-cols-2 gap-10">
        <img
          src={image}
          alt={partner.name}
          className="w-full h-[380px] object-cover rounded-2xl border"
        />

        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800">
            {partner.name}
          </h1>

          <p className="text-lg text-gray-600">
            {partner.subject} • {partner.experienceLevel}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <strong>{partner.rating ?? "N/A"}</strong>
            </span>
            <span>{partner.partnerCount ?? 0} connections</span>
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt />
              {partner.location ?? "—"}
            </span>
          </div>

          <button
            onClick={handleRequest}
            disabled={sending}
            className="px-8 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send Partner Request"}
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          {partner.name} is a {partner.experienceLevel} learner specializing in{" "}
          {partner.subject}. Available for {partner.studyMode} study sessions
          during {partner.availabilityTime}.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <InfoCard
          icon={<FaUserGraduate />}
          title="Study Mode"
          value={partner.studyMode ?? "—"}
        />
        <InfoCard
          icon={<FaClock />}
          title="Availability"
          value={partner.availabilityTime ?? "—"}
        />
        <InfoCard
          icon={<FaBook />}
          title="Skills"
          value={partner.skills?.join(", ") || "N/A"}
        />
      </section>
    </main>
  );
};

const InfoCard = ({ icon, title, value }) => (
  <div className="bg-white border rounded-xl p-5 flex gap-4">
    <div className="text-purple-600 text-xl">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

export default PartnerDetails;
