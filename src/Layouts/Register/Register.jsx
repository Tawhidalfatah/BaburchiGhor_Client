/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  // Data from Context api and states for dynamic user data
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");

  // Functions for Registration
  const handleRegistration = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setError("Password needs to be 6 characters or more");
      return;
    }
    if ((name, email, password)) {
      createUser(email, password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });

          logOut();

          navigate("/login");
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("Please Enter all the fields");
    }
  };

  return (
    // Register page
    <div className="hero min-h-screen py-60">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-primary text-center">
            Register to start Eating!!!
          </h1>
          <p className="py-6 text-center text-2xl">
            You are really missing out the offers on our delicious food by our
            Baburchis. <span className="text-primary">Sign Up!!</span>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                required
                onChange={(e) => setPhoto(e.target.value)}
                type="text"
                placeholder="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link
                  to="/login"
                  className="label-text-alt link link-hover text-base"
                >
                  Already have an account?{" "}
                  <span className="text-primary">Sign In!</span>
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <button onClick={handleRegistration} className="btn btn-primary">
                Register
              </button>
            </div>
            <p className="text-error">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
