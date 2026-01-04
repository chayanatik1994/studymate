import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import {
  getMyPartners,
  getMyConnections,
  deleteConnection,
  updateConnection,
  updatePartner,
  deletePartner,
} from "../utils/api";
import Spinner from "../components/Spinner";
import Swal from "sweetalert2";

const Connections = () => {
  const { user } = useContext(AuthContext);
  const [myPartners, setMyPartners] = useState([]);
  const [myConnections, setMyConnections] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingItem, setEditingItem] = useState(null);
  const [editingType, setEditingType] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({});

  useEffect(() => {
    if (user) fetchData();
  }, [user]);

  const fetchData = async () => {
    if (!user?.email) return;
    setLoading(true);
    try {
      const partnersRes = await getMyPartners(user.email);
      const connectionsRes = await getMyConnections(user.email);

      setMyPartners(partnersRes.data || []);
      setMyConnections(connectionsRes.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load data");
      setMyPartners([]);
      setMyConnections([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, type) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      if (type === "partner") {
        await deletePartner(id);
        toast.success("Partner profile deleted successfully!");
      } else {
        await deleteConnection(id);
        toast.success("Connection deleted successfully!");
      }
      fetchData();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete");
    }
  };

  const handleUpdate = (item, type) => {
    setEditingItem(item);
    setEditingType(type);

    const p = type === "partner" ? item : item.partnerData || {};
    setUpdateFormData({
      subject: p.subject || "",
      studyMode: p.studyMode || "",
      availabilityTime: p.availabilityTime || "",
      location: p.location || "",
      experienceLevel: p.experienceLevel || "",
    });

    setShowUpdateModal(true);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!editingItem) return;

    try {
      if (editingType === "partner") {
        await updatePartner(editingItem._id, updateFormData);
        toast.success("Partner profile updated successfully!");
      } else {
        await updateConnection(editingItem._id, updateFormData);
        toast.success("Connection updated successfully!");
      }
      setShowUpdateModal(false);
      setEditingItem(null);
      setEditingType(null);
      fetchData();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update");
    }
  };

  if (!user)
    return (
      <div className="p-6 text-center text-gray-600 text-lg">
        Please login to view your connections.
      </div>
    );

  if (loading) return <Spinner />;

  // Merge and remove duplicates based on _id
  const allItems = [
    ...myPartners.map((p) => ({ ...p, type: "partner" })),
    ...myConnections.map((c) => ({ ...c, type: "connection" })),
  ];
  const uniqueItems = Array.from(new Map(allItems.map((i) => [i._id, i])).values());

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">
        My Connections
      </h2>

      {uniqueItems.length === 0 ? (
        <div className="text-center py-12 text-gray-600 text-lg">
          No connections yet. Start finding partners or create your profile!
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-purple-700 to-purple-500 text-white text-left">
                <th className="px-6 py-3">Partner</th>
                <th className="px-6 py-3">Subject</th>
                <th className="px-6 py-3">Study Mode</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {uniqueItems.map((item, index) => {
                const partner = item.type === "partner" ? item : item.partnerData || {};
                return (
                  <tr
                    key={`${item.type}-${item._id}`}
                    className={`border-b transition duration-300 hover:bg-purple-50 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={partner.profileimage || partner.profileImage || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
                          alt={partner.name || "Partner"}
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                        />
                        <span className="font-medium text-gray-700">{partner.name || "N/A"}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{partner.subject || "N/A"}</td>
                    <td className="px-6 py-4 text-gray-600">{partner.studyMode || "N/A"}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button onClick={() => handleUpdate(item, item.type)} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                          Update
                        </button>
                        <button onClick={() => handleDelete(item._id, item.type)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {showUpdateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-purple-800">
              Update {editingType === "partner" ? "Partner Profile" : "Connection"}
            </h3>
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              {["subject", "studyMode", "availabilityTime", "location", "experienceLevel"].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 font-semibold mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  {field === "studyMode" || field === "experienceLevel" ? (
                    <select
                      name={field}
                      value={updateFormData[field]}
                      onChange={handleUpdateChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 bg-white"
                    >
                      {field === "studyMode" ? ["Online", "Offline"] : ["Beginner", "Intermediate", "Expert"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <input
                      type="text"
                      name={field}
                      value={updateFormData[field]}
                      onChange={handleUpdateChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
                    />
                  )}
                </div>
              ))}

              <div className="flex gap-3 mt-6">
                <button type="submit" className="flex-1 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                  Update
                </button>
                <button type="button" onClick={() => { setShowUpdateModal(false); setEditingItem(null); setEditingType(null); }} className="flex-1 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Connections;
