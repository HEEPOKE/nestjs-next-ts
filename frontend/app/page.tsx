import React from "react";
import StorePage from "./store/page";
import Menu from "../components/navbar";

export default function Home() {
  return (
    <>
      <Menu />
      <h1 className="text-3xl font-bold underline">Home</h1>
    </>
  );
}
