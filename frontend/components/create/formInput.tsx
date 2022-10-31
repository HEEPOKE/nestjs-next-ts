import React from "react";
import CreateHeader from "./header";

export default function FormInput() {
  return (
    <>
      <CreateHeader />
      <div className="relative grid h-screen place-items-center">
        <div className="max-w-lg w-full justify-center bg-gray-800 rounded-lg mt-3">
          <div className="">
            <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
              Your name
            </label>
            <input
              type="text"
              id="success"
              className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              placeholder="Success input"
            />
            <p className="mt-2 text-sm text-green-600 dark:text-green-500">
              <span className="font-medium">Well done!</span> Some success
              messsage.
            </p>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">
              Your name
            </label>
            <input
              type="text"
              id="error"
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
              placeholder="Error input"
            />
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oh, snapp!</span> Some error
              message.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
