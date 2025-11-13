import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import {  getMyPartners, deleteConnection, updateConnection, updatePartner, deletePartner } from "../utils/api";
import Spinner from "../components/Spinner";
import Swal from "sweetalert2";

const Connections = () => {
  const { user } = useContext(AuthContext);
  const [myPartners, setMyPartners] = useState([]);
  
  const [loading, setLoading] = useState(true);
    const [editingItem, setEditingItem] = useState(null);
    const [editingType, setEditingType] = useState(null); 
   const [showUpdateModal, setShowUpdateModal] = useState(false);
   const [updateFormData, setUpdateFormData] = useState({});

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    if (!user?.email) return;
    
    setLoading(true);
    try {
      const partnersResponse = await  
        getMyPartners(user.email);
         
      
      setMyPartners(partnersResponse.data || []);
      
    } catch (error) {
      console.error("Error fetching data:", error);
        toast.error("Failed to load data");
        setMyPartners([]);
      
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

    if (result.isConfirmed) {
      try {
        if (type === 'partner') {
          await deletePartner(id);
           toast.success("Partner profile deleted successfully!");
        } else {
           await deleteConnection(id);
          toast.success("Connection deleted successfully!");
        }
        fetchData();
      } catch (error) {
         console.error("Error deleting:", error);
        toast.error("Failed to delete");
      }
    }
  };

  const handleUpdate = (item, type) => {
    setEditingItem(item);
    setEditingType(type);
    if (type === 'partner') {
      setUpdateFormData({
        subject: item.subject || "",
          studyMode: item.studyMode || "",
          availabilityTime: item.availabilityTime || "",
        location: item.location || "",
         experienceLevel: item.experienceLevel || "",
      });
    } else {
      setUpdateFormData({
        subject: item.partnerData?.subject || "",
          studyMode: item.partnerData?.studyMode || "",
         availabilityTime: item.partnerData?.availabilityTime || "",
          location: item.partnerData?.location || "",
        experienceLevel: item.partnerData?.experienceLevel || "",
      });
    }
    setShowUpdateModal(true);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!editingItem) return;

    try {
      if (editingType === 'partner') {
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
    } catch (error) {
      console.error("Error updating:", error);
        toast.error("Failed to update");
    }
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormData((prev) => ({
         ...prev,
      [name]: value,
    }));
  };

  if (!user) {
    return (
      <div className="p-6 text-center">
         <p className="text-gray-600 text-lg">Please login to view your connections.</p>
      </div>
    );
  }

  if (loading) return <Spinner />;

  const allItems = [
    ...myPartners.map(p => ({ ...p, type: 'partner', displayName: p.name })),
    
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">My Connections</h2>

      {allItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No connections yet. Start finding partners or create your profile!</p>
        </div>
      ) : (
        <>
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
                {allItems.map((item, index) => {
                  const isPartner = item.type === 'partner';
                  const partner = isPartner ? item : (item.partnerData || {});
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
                            alt={partner.name}
                              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                          />
                          <span className="font-medium text-gray-700">{partner.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{partner.subject}</td>
                       <td className="px-6 py-4 text-gray-600">{partner.studyMode}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-2">
                            <button
                              onClick={() => handleUpdate(item, item.type)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                          >
                            Update
                          </button>
                          <button
                              onClick={() => handleDelete(item._id, item.type)}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                          >
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

          {/* Update Modal */}
          {showUpdateModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-purple-800">
                  Update {editingType === 'partner' ? 'Partner Profile' : 'Connection'}
                </h3>
                <form onSubmit={handleUpdateSubmit} className="space-y-4">
                    <div>
                    <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                    <input
                        type="text"
                      name="subject"
                      value={updateFormData.subject}
                      onChange={handleUpdateChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Study Mode</label>
                    <select
                      name="studyMode"
                         value={updateFormData.studyMode}
                      onChange={handleUpdateChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 bg-white"
                    >
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                     </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Availability Time</label>
                    <input
                        type="text"
                      name="availabilityTime"
                      value={updateFormData.availabilityTime}
                        onChange={handleUpdateChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                       value={updateFormData.location}
                      onChange={handleUpdateChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Experience Level</label>
                      <select
                      name="experienceLevel"
                      value={updateFormData.experienceLevel}
                       onChange={handleUpdateChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 bg-white"
                    >
                      <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                       type="submit"
                      className="flex-1 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowUpdateModal(false);
                          setEditingItem(null);
                        setEditingType(null);
                      }}
                      className="flex-1 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Connections;
