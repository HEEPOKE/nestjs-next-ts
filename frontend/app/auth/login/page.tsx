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
      <div className="align-center w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6">
          <h5 className="text-xl font-medium dark:text-white text-center">
            Sign in
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium dark:text-gray-300">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              minLength={8}
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label className="ml-2 text-sm font-medium dark:text-gray-300">
                Remember me
              </label>
            </div>
            <Link
              href="/auth/forgotpassword"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
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
        {/* <Link
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
          href="/"
        >
          Back
        </Link> */}
        <button
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
          onClick={Back}
        >
          Back
        </button>
        <div className="text-sm font-medium dark:text-gray-300 mt-1">
          Not registered?{" "}
          <Link
            href="/auth/register"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
