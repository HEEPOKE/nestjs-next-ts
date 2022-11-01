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
              <label className="block mb-2 font-extrabold text-lg text-white">name</label>
              <input
                type="text"
                name="name"
                className="text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
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
                className="text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
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
                className="text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
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
                className="text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
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
                className="block mb-5 w-full text-sm rounded-lg border cursor-pointer text-gray-400 focus:outline-none bg-gray-600 border-gray-500 placeholder-gray-400"
                type="file"
                name="image"
                accept="image/*"
                multiple
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white w-1/3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Save
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <button
              type="button"
              className="text-white w-1/3 bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
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
