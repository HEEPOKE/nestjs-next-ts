import React from "react";
import Menu from "../../components/navbar/";
import Table from "../../components/store/table";

export default function Storepage() {
  return (
    <div>
      <Menu />
      <div className="relative flex flex-col justify-center overflow-hidden mt-6 mr-4 ml-4 bg-gray-800  rounded-lg">
        <div className="">
          <div className="text-white text-2xl font-semibold mt-2 ml-2">STORE</div>
          <Table />
        </div>
      </div>
    </div>
  );
}
