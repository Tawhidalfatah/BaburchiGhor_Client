/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  // Data from context api and states for dynamic user data
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // Login Functions for firebase Auth
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("Please Enter Email and Password");
    }
  };
  return (
    // Login Page
    <div className="hero min-h-screen py-60">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-primary">Login now!!!</h1>
          <p className="py-6 text-2xl">
            To Enter the heaven of delicious cuisuine!!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link
                  to="/register"
                  className="label-text-alt link link-hover font-normal"
                >
                  New to Baburchi Ghor? Click to{" "}
                  <span className="text-primary">Sign Up!!</span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleLogin} className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-primary">{error}</p>
            <div className="form-control mt-1">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-accent flex justify-evenly"
              >
                Sign in With Google <FaGoogle className="h-7 w-7" />
              </button>
            </div>
            <div className="form-control mt-1">
              <button
                onClick={handleGithubSignIn}
                className="btn btn-outline flex justify-evenly"
              >
                Sign in With Github <FaGithub className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
