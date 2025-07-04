import React, { useEffect, useState } from "react";

const RecentQueries = () => {
  const [queries, setQueries] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/queries")
      .then((res) => res.json())
      .then((data) => {
        const sortedQueries = data
          .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
          .slice(0, 6);
        setQueries(sortedQueries);
      })
      .catch((error) => {
        console.error("Error fetching queries:", error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">Recent Queries</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {queries.map((query) => (
          <div key={query._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={query.productImageURL}
                alt={query.productName}
                className="h-48 w-full object-contain"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg">{query.productName}</h3>
              <p className="text-sm text-gray-600">{query.productBrand}</p>
              <p className="font-semibold">{query.queryTitle}</p>
              <p className="text-sm text-gray-700 line-clamp-3">
                {query.description}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={query.userPhotoURL}
                  alt={query.userName}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm">{query.userName}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">
                  {new Date(query.dateTime).toLocaleDateString()}
                </span>
                <span className="badge bg-red-500 text-white">
                  {query.recommendationCount} recommendations
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {queries.length === 0 && (
        <div className="text-center text-gray-500">
          No queries found. Be the first to add one!
        </div>
      )}
    </div>
  );
};

export default RecentQueries;
