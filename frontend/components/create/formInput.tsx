"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CreateHeader from "./header";

export default function FormInput() {
  const router = useRouter();

  const Back = () => {
    router.back();
  };

  return (
    <>
      <CreateHeader />
      <div className="relative grid place-items-center">
        <div className="w-10/12 bg-gray-800 rounded-lg mt-3">
          <form>
            <div className="ml-3 mr-3 mt-2">
              <label className="block mb-2 font-extrabold text-lg text-white">
                name
              </label>
              <input
                type="text"
                name="name"
                className="text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="ml-3 mr-3 mt-2">
              <label className="block mb-2 font-extrabold text-lg text-white">
                color
              </label>
              <input
                type="text"
                name="color"
                className="text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                placeholder="Enter Color"
                required
              />
            </div>
            <div className="ml-3 mr-3 mt-2">
              <label className="block mb-2 font-extrabold text-lg text-white">
                category
              </label>
              <input
                type="text"
                name="category"
                className="text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                placeholder="Enter Category"
                required
              />
            </div>
            <div className="ml-3 mr-3 mt-2">
              <label className="block mb-2 font-extrabold text-lg text-white">
                preice
              </label>
              <input
                type="number"
                name="price"
                className="text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                placeholder="Enter Price"
                min={0}
                required
              />
            </div>
            <div className="ml-3 mr-3 mt-2">
              <label className="block mb-2 font-extrabold text-lg text-white">
                image
              </label>
              <input
                className="block mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Save
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <button
              type="button"
              className="w-1/3 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={Back}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
