import React from "react";
import { useLoaderData } from "react-router";
import { FaUser, FaStar } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";

const RecommendationsForMe = () => {
  const recommendations = useLoaderData();

  const groupedRecommendations = recommendations.reduce(
    (acc, recommendation) => {
      const queryId = recommendation.queryId;
      if (!acc[queryId]) {
        acc[queryId] = {
          queryInfo: {
            queryTitle: recommendation.queryTitle,
            productName: recommendation.productName,
            userName: recommendation.userName,
            userEmail: recommendation.userEmail,
            queryId: queryId,
          },
          recommendations: [],
        };
      }
      acc[queryId].recommendations.push(recommendation);
      return acc;
    },
    {}
  );

  const queryGroups = Object.values(groupedRecommendations);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">
            Recommendations For My Queries
          </h1>
          <p className="text-blue-100">
            See all the recommendations others have made for your queries
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {queryGroups && queryGroups.length > 0 ? (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">
                    {queryGroups.length}
                  </div>
                  <div className="text-gray-600">
                    Queries with Recommendations
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">
                    {recommendations.length}
                  </div>
                  <div className="text-gray-600">Total Recommendations</div>
                </div>
              </div>
            </div>

            {queryGroups.map((group, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold mb-1">
                        {group.queryInfo.queryTitle}
                      </h2>
                      <p className="text-green-100">
                        Product: {group.queryInfo.productName}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full">
                      <FaStar className="text-yellow-300" />
                      <span className="text-sm text-gray-600 font-semibold">
                        {group.recommendations.length} Recommendations
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {group.recommendations
                      .sort(
                        (a, b) => new Date(b.dateTime) - new Date(a.dateTime)
                      )
                      .map((recommendation) => (
                        <div
                          key={recommendation._id}
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-50"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                                <FaUser className="text-red-600" size={12} />
                                {recommendation.recommenderName}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {recommendation.recommenderEmail}
                              </p>
                            </div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <IoCalendarOutline size={14} />
                              {new Date(
                                recommendation.dateTime
                              ).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>
                          </div>

                          <div className="bg-white rounded-lg p-4 border border-gray-300">
                            <h5 className="font-bold text-lg text-red-600 mb-3">
                              {recommendation.recommendationTitle}
                            </h5>

                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="md:col-span-1">
                                <img
                                  src={recommendation.recommendedProductImage}
                                  className="w-full h-32 object-contain bg-gray-50 rounded-lg border border-gray-200"
                                />
                              </div>
                              <div className="md:col-span-2">
                                <h6 className="font-semibold text-gray-800 mb-2 text-lg">
                                  {recommendation.recommendedProductName}
                                </h6>
                                <div className="bg-blue-50 p-3 rounded-lg">
                                  <p className="text-gray-700 leading-relaxed text-sm">
                                    <span className="font-medium text-red-600">
                                      Reason:
                                    </span>{" "}
                                    {recommendation.recommendationReason}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No recommendations yet
            </h3>
            <p className="text-gray-500 mb-6">
              You haven't received any recommendations for your queries yet.
              Share your queries to get helpful suggestions from the community!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationsForMe;