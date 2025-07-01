import React from "react";
import { useLoaderData } from "react-router";
import { FaUser } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";

const QueryDetails = () => {
  const query = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Query Details</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
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
    </div>
  );
};

export default QueryDetails;
