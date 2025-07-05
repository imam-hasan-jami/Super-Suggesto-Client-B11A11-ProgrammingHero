import React, { use } from "react";
import { AuthContext } from '../providers/AuthContext';
import Swal from "sweetalert2";

const AddQuery = () => {

  const { user } = use(AuthContext);

  const handleAddQuery = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const newQuery = Object.fromEntries(formData.entries());

    newQuery.userEmail = user?.email || "";
    newQuery.userName = user?.name || "";
    newQuery.userPhotoURL = user?.photoURL || "";
    newQuery.dateTime = new Date().toISOString();
    newQuery.recommendationCount = 0;

    fetch("https://suggesto-server.vercel.app/queries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuery),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Query Added successfully.`,
            showConfirmButton: false,
            timer: 2000,
          });
          // form.reset();
        }
      })
      .catch((error) => {
        console.error("Error adding query:", error);
      });
  };

  return (
    <div>
      <div className="my-10">
        <h1 className="text-center font-bold text-3xl my-7">Add Query</h1>

        <form onSubmit={handleAddQuery}>
          <fieldset className="fieldset grid lg:grid-cols-1 gap-6 bg-base-200 border-base-300 rounded-box w-10/12 lg:w-5/12 mx-auto border p-4 lg:p-8">
            <div>
              <div className="flex flex-col">
                <label className="label">Product Name</label>
                <input
                  name="productName"
                  type="text"
                  className="input w-full"
                  placeholder="Type Product Name"
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
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="label mt-5">Query TItle</label>
                <input
                  name="queryTitle"
                  type="text"
                  className="input w-full"
                  placeholder="i.e.: Is there any Better product that gives me the same quality?"
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
                  required
                />
              </div>
            </div>
          </fieldset>

          <div className="flex justify-center mt-6">
            <input
              className="btn bg-red-700 text-white"
              type="submit"
              value="Add Query"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuery;
