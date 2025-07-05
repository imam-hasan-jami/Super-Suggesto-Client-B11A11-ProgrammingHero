import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "This email is already registered. Please use a different email.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/weak-password":
        return "Password is too weak. Please use at least 6 characters.";
      default:
        return "Registration failed. Please try again.";
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");
        const userProfile = {
          email,
          ...restFormData,
        };

        return fetch("https://suggesto-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // console.log("User profile created successfully", data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration successful",
            showConfirmButton: false,
            timer: 2000,
          });
          form.reset();
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = getErrorMessage(errorCode);

        console.log(errorCode, error.message);

        Swal.fire({
          position: "center",
          icon: "error",
          title: "Registration Failed",
          text: errorMessage,
          showConfirmButton: true,
          confirmButtonColor: "#dc2626",
        });
      });
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
