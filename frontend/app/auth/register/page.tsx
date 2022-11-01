"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Registerpage() {
  const router = useRouter();

  const Back = () => {
    router.back();
  };

  return (
    <div className="relative grid h-screen place-items-center">
      <div className="align-center w-full max-w-sm rounded-lg border shadow-md sm:p-6 md:p-8 bg-gray-800 border-gray-700">
        <form className="space-y-6">
          <h5 className="text-xl font-medium text-white text-center">
            Register
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="usename"
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
              placeholder="Enter Username"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              minLength={8}
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Confirm password
            </label>
            <input
              type="password"
              name="confirmpassword"
              id="password"
              placeholder="••••••••"
              minLength={8}
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-700"
          >
            Submit
          </button>
        </form>
        <button
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
          onClick={Back}
        >
          Back
        </button>
      </div>
    </div>
  );
}
