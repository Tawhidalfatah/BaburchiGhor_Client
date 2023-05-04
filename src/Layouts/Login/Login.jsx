/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-primary">Login now!!!</h1>
          <p className="py-6">
            What are you waiting for!? Login now to enter the heaven of
            delicious cuisuine!!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                type="text"
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
            <div className="form-control mt-1">
              <button className="btn btn-accent flex justify-evenly">
                Sign in With Google <FaGoogle className="h-7 w-7" />
              </button>
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-outline flex justify-evenly">
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
