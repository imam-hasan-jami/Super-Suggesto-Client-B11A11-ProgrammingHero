import React, { use, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../providers/AuthContext";

const FeaturedRecommendations = () => {
  const { user } = use(AuthContext);
  const [featuredRecommendations, setFeaturedRecommendations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recommendations")
      .then((res) => res.json())
      .then((data) => {
        const sortedRecommendations = data
          .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
          .slice(0, 6);

          setFeaturedRecommendations(sortedRecommendations);
      })
      .catch((error) => {
        console.error("Error fetching recommendations:", error);
      });
  }, []);

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Featured Recommendations
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the most helpful and popular product recommendations from our
          community
        </p>
      </div>

      {featuredRecommendations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecommendations.map((recommendation) => (
            <div
              key={recommendation._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={recommendation.recommendedProductImage}
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {recommendation.recommendedProductName}
                </h3>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-3 mb-3">
                  <p className="text-sm text-purple-700">
                    <span className="font-medium">Alternative to:</span>{" "}
                    {recommendation.productName}
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-3">
                  <p className="text-sm text-blue-700">
                    <span className="font-medium">Query:</span>{" "}
                    {recommendation.queryTitle}
                  </p>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {recommendation.recommendationReason}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaUser size={12} />
                  <span>by {recommendation.recommenderName}</span>
                </div>

                <div className="mt-3 text-xs text-gray-400">
                  {new Date(recommendation.dateTime).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="text-gray-400 text-6xl mb-4">🌟</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No featured recommendations yet
          </h3>
          <p className="text-gray-500">
            Check back later for featured recommendations from our community!
          </p>
        </div>
      )}

      <div className="text-center mt-12">
        <Link
          to={`/recommendations-for-me/${user?.email}`}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors"
        >
          View All Recommendations For You
        </Link>
      </div>
    </div>
  );
};

export default FeaturedRecommendations;
