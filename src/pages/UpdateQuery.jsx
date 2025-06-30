import React from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import Swal from "sweetalert2";

const UpdateQuery = () => {
  const {
    _id,
    productName,
    productBrand,
    productImageURL,
    queryTitle,
    description,
  } = useLoaderData();

  const handleUpdateQuery = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updatedQuery = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/queries/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedQuery),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Query updated successfully!`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((error) => {
        console.error("Error updating query:", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to update query",
          text: "Please try again later",
          showConfirmButton: true,
        });
      });
  };

  return (
    <div>
      <div className="my-10">
        <div className="text-center mb-6">
          <h1 className="font-bold text-3xl my-7">Update Query</h1>
        </div>

        <form onSubmit={handleUpdateQuery}>
          <fieldset className="fieldset grid lg:grid-cols-1 gap-6 bg-base-200 border-base-300 rounded-box w-10/12 lg:w-5/12 mx-auto border p-4 lg:p-8">
            <div>
              <div className="flex flex-col">
                <label className="label">Product Name</label>
                <input
                  name="productName"
                  type="text"
                  className="input w-full"
                  placeholder="Type Product Name"
                  defaultValue={productName}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="label mt-5">Product Brand</label>
                <input
                  name="productBrand"
                  type="text"
                  className="input w-full"
                  placeholder="Type Product Brand"
                  defaultValue={productBrand}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="label mt-5">Product Image URL</label>
                <input
                  name="productImageURL"
                  type="text"
                  className="input w-full"
                  placeholder="Paste Product Image URL"
                  defaultValue={productImageURL}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="label mt-5">Query Title</label>
                <input
                  name="queryTitle"
                  type="text"
                  className="input w-full"
                  placeholder="i.e.: Is there any Better product that gives me the same quality?"
                  defaultValue={queryTitle}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="label mt-5">Boycotting Reason Details</label>
                <textarea
                  name="description"
                  placeholder="The reason why you don't want this product"
                  className="bg-white border border-gray-300 p-3 text-gray-800"
                  rows="4"
                  defaultValue={description}
                  required
                />
              </div>
            </div>
          </fieldset>

          <div className="flex justify-center mt-6 gap-4">
            <input
              className="btn bg-red-700 hover:bg-red-800 text-white"
              type="submit"
              value="Update Query"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateQuery;
