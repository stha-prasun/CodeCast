import React from 'react'

const Login = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 bg-base-100 shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Sign In</button>
          </div>
        </form>
        <div className="divider my-6">OR</div>
        <div className="flex flex-col gap-3">
          <button className="btn btn-outline w-full">Continue with Google</button>
          <button className="btn btn-outline w-full">Continue with Facebook</button>
        </div>
        <p className="text-center mt-4">
          New to CodeCast? <a href="#" className="text-primary hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
    </>
  )
}

export default Login
