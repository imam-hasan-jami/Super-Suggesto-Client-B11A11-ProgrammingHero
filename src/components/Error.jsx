import React from "react";
import { Link } from "react-router";
import {
  FaHome,
  FaLightbulb,
  FaSearch,
  FaQuestionCircle,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">

        <div className="mb-8 flex flex-col items-center">
          <img src={logo} className="w-10" />
          <h1 className="text-2xl font-bold text-gray-800">Suggesto</h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">404</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h3>
          <p className="text-gray-600 mb-6">
            Looks like this page got lost while searching for product
            alternatives! Let's get you back to finding the perfect
            recommendations.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 mb-4"
          >
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
