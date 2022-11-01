"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Loginpage() {
  const router = useRouter();

  const Back = () => {
    router.back();
  };

  return (
    <div className="relative grid h-screen place-items-center">
      <div className="align-center w-full max-w-sm rounded-lg border shadow-md sm:p-6 md:p-8 bg-gray-800 border-gray-700">
        <form className="space-y-6">
          <h5 className="text-xl font-medium text-center text-white">
            Sign in
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
              placeholder="@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Your password
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
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 rounded border bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800"
                  required
                />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-300">
                Remember me
              </label>
            </div>
            <Link
              href="/auth/forgotpassword"
              className="ml-auto text-sm hover:underline text-blue-500"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign in to your account
          </button>
        </form>
        <button
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
          onClick={Back}
        >
          Back
        </button>
        <div className="text-sm font-medium text-gray-300 mt-1">
          Not registered?{" "}
          <Link
            href="/auth/register"
            className="text-blue-500 hover:underline"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
