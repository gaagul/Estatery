import React, { useState } from "react";

import SignupPage from "./Signup";

// import { ReactComponent as Logo } from "./assets/logo.svg";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
          <div className="w-full max-w-sm rounded-lg bg-white px-6 py-8 shadow-md">
            <div className="text-center">
              {/* <Logo className="mx-auto mb-4 h-12 w-12" /> */}
              <h2 className="text-3xl font-bold text-gray-800">Login</h2>
              <p className="mt-2 text-gray-600">Sign in to your account</p>
            </div>
            <form className="mt-8">
              <div>
                <label
                  className="block font-semibold text-gray-700"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="focus:outline-none mt-2 w-full rounded-lg border px-4 py-2 text-gray-700 focus:border-blue-500"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="mt-4">
                <label
                  className="block font-semibold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="focus:outline-none mt-2 w-full rounded-lg border px-4 py-2 text-gray-700 focus:border-blue-500"
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
              <button
                className="focus:outline-none focus:shadow-outline mt-6 w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
                type="submit"
              >
                Sign In
              </button>
              <div className="mt-4 flex items-center justify-between">
                <span className="w-1/5 border-b md:w-1/4" />
                <p className="text-center text-xs uppercase text-gray-500">
                  or sign in with
                </p>
                <span className="w-1/5 border-b md:w-1/4" />
              </div>
              <div className="mt-4">
                <button
                  className="focus:outline-none focus:shadow-outline w-full rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
                  type="button"
                >
                  Sign In with Google
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  className="text-blue-500 hover:text-blue-600"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <SignupPage setIsLogin={setIsLogin} />
      )}
    </>
  );
};
export default LoginPage;
