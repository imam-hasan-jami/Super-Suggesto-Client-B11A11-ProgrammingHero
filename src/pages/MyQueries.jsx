import React from "react";
import { Link } from "react-router";

const MyQueries = () => {
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
    </div>
  );
};

export default MyQueries;
