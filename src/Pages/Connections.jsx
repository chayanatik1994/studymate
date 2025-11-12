import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { topStudyPartners } from "../components/data/mockData";

const Connections = () => {
  const { user } = useContext(AuthContext);
    const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(true);
        setTimeout(() => {
        setConnections(topStudyPartners);
          setLoading(false);
      }, 500);
    }
  }, [user]);

  const handleRemove = (connId) => {
    setConnections((prev) => prev.filter((c) => c.id !== connId));
    toast.success("Connection removed successfully!");
  };

  if (!user) return <p className="p-6 text-gray-600">Please login to view your connections.</p>;
  if (loading) return <p className="p-6 text-gray-600">Loading connections...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">My Connections</h2>
      {connections.length === 0 ? (
        <p className="text-gray-600 text-center">No connections yet.</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-gradient-to-r from-purple-700 to-purple-500 text-white text-left">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Subject</th>
                <th className="px-6 py-3">Location</th>
                  <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {connections.map((conn, index) => (
                <tr
                  key={conn.id}
                  className={`border-b transition duration-300 hover:bg-purple-50 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={conn.profileImage}
                          alt={conn.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                        <span className="font-medium text-gray-700">{conn.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{conn.email}</td>
                  <td className="px-6 py-4 text-gray-600">{conn.subject}</td>
                    <td className="px-6 py-4 text-gray-600">{conn.location}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleRemove(conn.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Connections;
