import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center min-h-[calc(100vh-330px)] items-center my-10">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl py-5 bg-base-100">
        <h2 className="font-semibold text-2xl text-center text-red-700">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            <label className="label">Photo URL </label>
            <input
              name="photoURL"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <div className="flex">
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
            </div>

            <button type="submit" className="btn bg-red-700 text-white mt-4">
              Register
            </button>

            <p className="font-semibold text-sm text-center pt-5">
              Already Have An Account?{" "}
              <Link className="text-red-700" to="/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
