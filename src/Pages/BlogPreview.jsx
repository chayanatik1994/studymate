import React, { useState, useEffect } from "react";

const BlogPreview = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/mockData.json")
      .then((res) => (res.ok ? res.json() : Promise.reject("Failed to fetch blogs")))
      .then(setBlogs)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-16">Loading blogs...</p>;

  return (
    <section className="py-2 px-4 md:px-16 w-full bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Latest Blogs
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map(({ id, name, profileImage, subject }) => (
          <div key={id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            
            {/* Image only */}
            <div className="h-40 overflow-hidden rounded-t-lg">
              <img
                src={profileImage}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-600">{subject}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
