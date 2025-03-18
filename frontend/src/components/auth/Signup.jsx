import React from "react";
import { Link } from "react-router";

const Signup = () => {
    return (
      <div className="min-h-screen flex justify-center items-center bg-base-200">
        <div className="card w-full max-w-md shadow-xl bg-base-100 p-8">
          <h2 className="text-3xl font-semibold text-center text-primary">Sign Up</h2>
  
          <form className="space-y-4 mt-6">
            {/* Full Name */}
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
              />
            </div>
  
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>
  
            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
            </div>
  
            {/* Submit Button */}
            <div className="mt-6">
              <button className="btn btn-primary w-full">Sign Up</button>
            </div>
  
            {/* Already have an account */}
            <div className="text-center mt-4">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-primary">Login here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Signup;
  