import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../firebase.config";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: "warning!",
        text: "Password Must contain uppercase, and lowercase letters, and be at least 6 characters long.",
        icon: "error",
        confirmButtonText: "ok",
      });

      return;
    }
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "success",
          text: "you have registered successfully.",
          icon: "success",
          confirmButtonText: "ok",
        });
        navigate("/");

        const data = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(auth.currentUser, data)
          .then(() => {
            Swal.fire({
              title: "success",
              text: "you have updated successfully.",
              icon: "success",
              confirmButtonText: "ok",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "warning!",
              text: error.message,
              icon: "error",
              confirmButtonText: "ok",
            });
          });
      })
      .catch((error) => {
        console.log("hello", error);
      });
  };
  return (
    <div className="bg-[#e3e6e6] py-10 min-h-screen">
      <div className="flex-col">
        <div className="text-center mb-4"></div>
        <div className=" bg-base-100 lg:w-3/12 mx-auto shrink-0">
          <h1 className="text-2xl font-bold ml-8 py-8">
            {" "}
            SignUp to become a Champion
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-purple-600 text-white hover:text-black">Register</button>
            </div>
            <p>
              Already have an Account |{" "}
              <Link className="text-blue-600" to="/login">
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
