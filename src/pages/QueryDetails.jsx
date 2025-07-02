import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import { FaUser } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import Swal from "sweetalert2";
import { MdOutlineStarPurple500 } from "react-icons/md";

const QueryDetails = () => {
  const query = useLoaderData();
  const { user } = use(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query?._id) {
      fetch(`http://localhost:3000/recommendations/query/${query._id}`)
        .then((res) => res.json())
        .then((data) => {
          setRecommendations(data);
          // setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching recommendations:", error);
          // setLoading(false);
        });
    }
  }, [query?._id]);

  const handleAddRecommendation = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const newRecommendation = Object.fromEntries(formData.entries());

    newRecommendation.queryId = query?._id || "";
    newRecommendation.queryTitle = query?.queryTitle || "";
    newRecommendation.productName = query?.productName || "";
    newRecommendation.userEmail = query?.userEmail || "";
    newRecommendation.userName = query?.userName || "";
    newRecommendation.recommenderEmail = user?.email || "";
    newRecommendation.recommenderName = user?.name || "";
    newRecommendation.dateTime = new Date().toISOString();

    fetch("http://localhost:3000/recommendations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecommendation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Recommendation Added Successfully.`,
            showConfirmButton: false,
            timer: 2000,
          });
          // form.reset();
        }
      })
      .catch((error) => {
        console.error("Error adding recommendation:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-15">
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Query Details</h1>
        </div>
      </div>

      <div className="w-11/12 mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={query.productImageURL}
              alt={query.productName}
              className="w-full h-64 md:h-80 object-contain bg-gray-100"
            />
            <div className="absolute top-4 right-4">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {query.recommendationCount} Recommendations
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <FaUser />
                  Posted by
                </h3>
                <div className="flex items-center gap-4">
                  <img
                    src={query.userPhotoURL}
                    alt={query.userName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-200"
                  />
                  <div>
                    <p className="font-semibold text-green-800 text-lg">
                      {query.userName}
                    </p>
                    <p className="text-green-600 text-sm">{query.userEmail}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {query.productName}
              </h2>
              <p className="text-lg text-gray-600 mb-4">{query.productBrand}</p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Query Title
                </h3>
                <p className="text-blue-700">{query.queryTitle}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Description
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {query.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <IoCalendarOutline size={20} className="text-blue-800" />
                  <h4 className="font-semibold text-blue-800">Date Posted</h4>
                </div>
                <p className="text-blue-700">
                  {new Date(query.dateTime).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MdOutlineStarPurple500 />
              Recommendations ({recommendations.length})
            </h2>
            <p className="text-purple-100 mt-1">
              Community recommendations for this query
            </p>
          </div>

          <div className="p-6">
            {recommendations.length > 0 ? (
              <div className="space-y-6">
                {recommendations
                  .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
                  .map((recommendation, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">
                            {recommendation.recommenderName}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {recommendation.recommenderEmail}
                          </p>
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(recommendation.dateTime).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </div>
                      </div>

                      {/* Recommendation Content */}
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h5 className="font-bold text-lg text-purple-800 mb-2">
                          {recommendation.recommendationTitle}
                        </h5>

                        <div className="flex gap-6 mb-3">
                          <div className="md:col-span-1">
                            <img
                              src={recommendation.recommendedProductImage}
                              className="w-40 object-contain bg-white rounded-lg border border-gray-200 shadow-sm"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <h6 className="font-semibold text-gray-800 mb-2">
                              {recommendation.recommendedProductName}
                            </h6>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {recommendation.recommendationReason}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-400 text-6xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No recommendations yet
                </h3>
                <p className="text-gray-500">
                  Be the first to recommend an alternative product!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white w-386 mx-auto rounded-lg shadow-lg px-4 py-8">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <IoMdAdd />
            Add Your Recommendation
          </h2>
          <p className="text-green-100 mt-1">
            Help others by sharing your recommendation
          </p>
        </div>

        <div className="p-6">
          <form onSubmit={handleAddRecommendation}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="label text-gray-700 font-semibold mb-2">
                  Recommendation Title
                </label>
                <input
                  name="recommendationTitle"
                  type="text"
                  className="input w-full border-gray-300 rounded-lg p-3"
                  placeholder="e.g., Great Alternative with Better Quality"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="label text-gray-700 font-semibold mb-2">
                  Recommended Product Name
                </label>
                <input
                  name="recommendedProductName"
                  type="text"
                  className="input w-full border-gray-300 rounded-lg p-3"
                  placeholder="Enter the product name you recommend"
                  required
                />
              </div>

              <div className="flex flex-col md:col-span-2">
                <label className="label text-gray-700 font-semibold mb-2">
                  Recommended Product Image URL
                </label>
                <input
                  name="recommendedProductImage"
                  type="url"
                  className="input w-full border-gray-300 rounded-lg p-3"
                  placeholder="Paste the image URL of the recommended product"
                  required
                />
              </div>

              <div className="flex flex-col md:col-span-2">
                <label className="label text-gray-700 font-semibold mb-2">
                  Recommendation Reason
                </label>
                <textarea
                  name="recommendationReason"
                  placeholder="Explain why you recommend this product. What makes it better? Share your experience..."
                  className="w-full border border-gray-300 rounded-lg p-3"
                  rows="4"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="btn bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                <IoMdAdd />
                Add Recommendation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
