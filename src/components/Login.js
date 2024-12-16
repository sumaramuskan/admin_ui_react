import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { FaGoogle, FaFacebook } from "react-icons/fa";
// import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);

  // function handleLogin(){
  //   navigate('/payments')
  // }
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div
        className="flex shadow- rounded-lg bg-white overflow-hidden w-full max-w-4xl"
        style={{
          boxShadow:
            "0px 4px 20px rgba(255, 0, 150, 0.4), 0px 6px 30px rgba(0, 255, 150, 0.4)",
        }}
      >
        {/* Left Section */}
        <div className="w-1/2  flex flex-col justify-center items-center">
          {/* <h1 className="text-3xl font-bold">Welcome Back!</h1> */}
          {/* <p className="mt-2 text-sm">
            Please login to access your account.
          </p> */}
          <img src="LoginImage.png" className="h-full w-full object-contain" />
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            {/* <a onClick={handleLogin}>Login</a>    */}
            <Link to="/login">Login</Link>
          </h2>
          <p className="text-sm text-center text-gray-500 mt-2">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-500 text-bold">E-mail</label>
              <input
                type="email"
                placeholder="demoemail1234@gmail.com"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500 text-bold">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="demopassword@123"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-100"
                />
                <span
                  className="absolute inset-y-0 right-4 flex items-center text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
              <a
                href="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-center">
              <button className="w-330 bg-s6 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none ">
                <Link to="/users"> Sign In </Link>
              </button>
            </div>
          </form>
          <div className="mt-6 text-center text-gray-500">
            <div className="flex items-center w-full mb-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 font-medium">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-4">
            {/* Google Button */}
            <button className="flex items-center justify-center w-full border-2 border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200">
              <FaGoogle className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-gray-600 font-medium">
                Continue with Google
              </span>
            </button>

            {/* Facebook Button */}
            <button className="flex items-center justify-center w-full border-2 border-blue-600 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200">
              <FaFacebook className="w-5 h-5 mr-2" />
              <span className="font-medium">Continue with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
