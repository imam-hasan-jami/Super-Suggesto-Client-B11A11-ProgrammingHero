import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const MyQueries = () => {
  const initalQueries = useLoaderData();
  const [queries, setQueries] = useState(initalQueries);

  const handleDeleteQuery = () => {

  }

  return (
    <div>
      {/* add query banner button */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-6 shadow-lg flex flex-col gap-6 items-center justify-between">
        <h1 className="text-xl font-semibold">
          If you have any queries, please click on the button
        </h1>
        <Link
          className="btn bg-white text-red-700 px-5 py-2 font-semibold shadow-md"
          to="/add-query"
        >
          Add Queries
        </Link>
      </div>

      <div>
        {/* queries display section */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 my-5">
            My Queries
          </h2>
          {queries && Array.isArray(queries) && queries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {queries
                .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
                .map((query) => (
                  <div key={query._id} className="card bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src={query.productImageURL}
                        alt={query.productName}
                        className="h-48 w-full object-contain"
                      />
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title text-lg">
                        {query.productName}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {query.productBrand}
                      </p>
                      <p className="font-semibold">{query.queryTitle}</p>
                      <p className="text-sm text-gray-700 line-clamp-3">
                        {query.description}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">
                          {new Date(query.dateTime).toLocaleDateString()}
                        </span>
                        <span className="badge bg-red-500 text-white">
                          {query.recommendationCount} recommendations
                        </span>
                      </div>

                      <div className="card-actions justify-center mt-8 gap-2">
                        <Link
                          to={`/query-details/${query._id}`}
                          className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white border-0"
                        >
                          View Details
                        </Link>
                        <Link
                          to={`/update-query/${query._id}`}
                          className="btn btn-sm bg-green-500 hover:bg-green-600 text-white border-0"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDeleteQuery(query._id)}
                          className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-0"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No queries yet
              </h3>
              <p className="text-gray-500 mb-6">
                You haven't posted any queries yet. Start by adding your first
                query!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
