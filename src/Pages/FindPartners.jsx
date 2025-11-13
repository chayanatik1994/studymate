import React, { useState, useEffect, useContext } from "react";
import { getAllPartners } from "../utils/api";
import StudyPartnerCard from "../components/StudyPartnerCard";
import Spinner from "../components/Spinner";
import { AuthContext } from "../provider/AuthProvider";

const FindPartners = () => {
  const { user } = useContext(AuthContext);
  const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
   const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const partnersPerPage = 6;

  useEffect(() => {
    fetchPartners();
  }, [search, sort]);

  const fetchPartners = async () => {
    setLoading(true);
    try {
      const response = await getAllPartners(search || undefined, sort || undefined);
        setPartners(response.data || []);
      setCurrentPage(1); 
    } catch (error) {
      console.error("Error fetching partners:", error);
       setPartners([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const totalPages = Math.ceil(partners.length / partnersPerPage);
  const currentPartners = partners.slice(
     (currentPage - 1) * partnersPerPage,
    currentPage * partnersPerPage
  );

  if (loading) return <Spinner />;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Find Your Study Partners</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
        {/* Sort Button on Left */}
        <div className="flex items-center gap-2">
          <label className="font-semibold text-gray-700">Sort by:</label>
            <select
            value={sort}
            onChange={handleSortChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 bg-white"
          >
            <option value="">None</option>
             <option value="experience">Experience Level</option>
          </select>
        </div>

        {/* Search Button on Right */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
             placeholder="Search by subject..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-64 text-gray-900 placeholder-gray-500"
          />
        </div>
      </div>

      {partners.length === 0 ? (
        <div className="text-center py-12">
           <p className="text-gray-600 text-lg">No partners found. Try adjusting your search or sort criteria.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentPartners.map((partner) => (
              <StudyPartnerCard key={partner._id} partner={partner} user={user} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-3">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                    onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-purple-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FindPartners;
