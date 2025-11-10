import React, { useState } from "react";
import { topStudyPartners } from "../components/data/mockData";
import StudyPartnerCard from "../components/StudyPartnerCard";

const FindPartners = ({ user = true }) => {
  const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
   const partnersPerPage = 6;

  // Filter and sort partners
  const filteredAndSorted = topStudyPartners
     .filter((p) => p.subject.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => a.experienceLevel.localeCompare(b.experienceLevel));

  // Pagination
  const totalPages = Math.ceil(filteredAndSorted.length / partnersPerPage);
  const currentPartners = filteredAndSorted.slice(
      (currentPage - 1) * partnersPerPage,
    currentPage * partnersPerPage
  );

  return (
    <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Find Your Study Partners</h2>

      <input
        type="text"
         placeholder="Search by subject..."
         value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); 
        }}
        className="mb-6 p-2 border rounded w-full"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentPartners.map((partner) => (
          <StudyPartnerCard key={partner.id} partner={partner} user={user} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
                onClick={() => setCurrentPage(i + 1)}
               className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-purple-700 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindPartners;
