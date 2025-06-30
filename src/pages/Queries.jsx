import React from "react";
import { useLoaderData, Link } from "react-router";
import Swal from "sweetalert2";

const Queries = () => {
  const queries = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">All Queries</h1>
          <p className="text-red-100">
            Browse and help others with product recommendations
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {queries && Array.isArray(queries) && queries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {queries
              .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
              .map((query) => (
                <div
                  key={query._id}
                  className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <figure className="px-4 pt-4">
                    <img
                      src={query.productImageURL}
                      alt={query.productName}
                      className="h-40 w-full object-contain rounded-lg bg-gray-50"
                    />
                  </figure>

                  <div className="card-body p-4">
                    <h3 className="card-title text-lg font-bold text-gray-800 line-clamp-2">
                      {query.productName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {query.productBrand}
                    </p>

                    <p className="font-semibold text-blue-700 text-sm line-clamp-2 mb-2">
                      {query.queryTitle}
                    </p>

                    <p className="text-sm text-gray-700 line-clamp-3 mb-3">
                      {query.description}
                    </p>

                    <div className="flex items-center gap-2 mb-3">
                      <img
                        src={query.userPhotoURL || "/default-avatar.png"}
                        alt={query.userName}
                        className="w-6 h-6 rounded-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/32x32?text=U";
                        }}
                      />
                      <span className="text-xs text-gray-500">
                        by {query.userName}
                      </span>
                    </div>

                    <span className="text-xs text-gray-500">
                      {new Date(query.dateTime).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>

                    <div className="card-actions flex gap-2 justify-around items-center">
                      <span className="badge bg-red-500 text-white text-xs">
                        {query.recommendationCount || 0} recommendations
                      </span>
                      <Link
                        to={`/query-details/${query._id}`}
                        className="btn btn-sm bg-green-500 hover:bg-green-600 text-white border-0 flex items-center gap-1"
                      >
                        Recommend
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No queries available
            </h3>
            <p className="text-gray-500 mb-6">
              Be the first to add a query and get recommendations from the
              community!
            </p>
            <Link
              to="/add-query"
              className="btn bg-red-600 hover:bg-red-700 text-white"
            >
              Add Your Query
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Queries;
