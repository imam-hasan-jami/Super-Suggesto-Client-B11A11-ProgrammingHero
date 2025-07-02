import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";

const MyRecommendations = () => {
  const initialRecommendations = useLoaderData();
  const [recommendations, setRecommendations] = useState(
    initialRecommendations
  );

  const handleDelete = (recommendationId) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/recommendations/${recommendationId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setRecommendations((prevRecommendations) =>
                prevRecommendations.filter(
                  (rec) => rec._id !== recommendationId
                )
              );
              Swal.fire({
                title: "Deleted!",
                text: "Your recommendation has been deleted.",
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting recommendation:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete recommendation.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">My Recommendations</h1>
          <p className="text-purple-100">
            Manage all your product recommendations
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {recommendations && recommendations.length > 0 ? (
          <div className="bg-white rounded-lg shadow-lg border border-red-100 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h2 className="text-xl font-semibold text-gray-800">
                Total Recommendations: {recommendations.length}
              </h2>
            </div>

            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-red-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                      Recommendation
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                      Query Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                      Recommended Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-red-100">
                  {recommendations
                    .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
                    .map((recommendation, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900 line-clamp-2">
                              {recommendation.recommendationTitle}
                            </div>
                            <div className="text-sm text-gray-500 line-clamp-2 mt-1">
                              {recommendation.recommendationReason}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {recommendation.queryTitle}
                            </div>
                            <div className="text-sm text-gray-500">
                              {recommendation.productName}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              src={recommendation.recommendedProductImage}
                              className="w-12 h-12 object-contain bg-gray-50 rounded border border-red-100 mr-3"
                            />
                            <div>
                              <div className="text-sm font-medium text-gray-900 line-clamp-1">
                                {recommendation.recommendedProductName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(recommendation.dateTime).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button
                            onClick={() => handleDelete(recommendation._id)}
                            className="text-red-600 hover:text-red-900 transition-colors"
                            title="Delete recommendation"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden">
              <div className="space-y-4 p-4">
                {recommendations
                  .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
                  .map((recommendation, index) => (
                    <div
                      key={recommendation._id || index}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-purple-800 text-sm line-clamp-2">
                          {recommendation.recommendationTitle}
                        </h3>
                        <button
                          onClick={() => handleDelete(recommendation._id)}
                          className="text-red-600 hover:text-red-900 ml-2"
                          title="Delete recommendation"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <span className="text-xs font-medium text-gray-600">
                            Query:
                          </span>
                          <p className="text-sm text-gray-900 line-clamp-1">
                            {recommendation.queryTitle}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <img
                            src={recommendation.recommendedProductImage}
                            alt={recommendation.recommendedProductName}
                            className="w-12 h-12 object-contain bg-gray-50 rounded border"
                            onError={(e) => {
                              e.target.src =
                                "https://via.placeholder.com/48x48?text=No+Image";
                            }}
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 line-clamp-1">
                              {recommendation.recommendedProductName}
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(
                                recommendation.dateTime
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No recommendations yet
            </h3>
            <p className="text-gray-500 mb-6">
              You haven't made any recommendations yet. Start helping others by
              recommending products!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRecommendations;
