import React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <nav className="bg-green-400 overflow-hidden">
      <Link href="/">
        <li className="text-center float-left pl-6 pr-6 pt-2 pb-2 font-medium text-2xl text-zinc-50 cursor-pointer block no-underline">
          TOPIC
        </li>
      </Link>
      <ul className="m-0 p-0 list-none">
        <Link href="/">
          <li className="text-center float-left pl-2 pr-2 pt-2 pb-2 font-medium text-2xl text-zinc-50 hover:bg-green-800 cursor-pointer block no-underline">
            Home
          </li>
        </Link>
        <Link href="/create">
          <li className="text-center float-left pl-2 pr-2 pt-2 pb-2 font-medium text-2xl text-zinc-50 hover:bg-green-800 cursor-pointer block no-underline">
           Create
          </li>
        </Link>
        <Link href="/store">
          <li className="text-center float-left pl-2 pr-2 pt-2 pb-2 font-medium text-2xl text-zinc-50 hover:bg-green-800 cursor-pointer block no-underline">
            Store
          </li>
        </Link>
        <Link href="/about">
          <li className="text-center float-left pl-2 pr-2 pt-2 pb-2 font-medium text-2xl text-zinc-50 hover:bg-green-800 cursor-pointer block no-underline">
            About
          </li>
        </Link>
        <Link href="/register">
          <li className="float-right pl-2 pr-2 pt-2 pb-2 font-medium text-2xl text-center text-zinc-50 cursor-pointer no-underline block hover:bg-green-800">
            Register
          </li>
        </Link>
        <Link href="/login">
          <li className="float-right pl-2 pr-2 pt-2 pb-2 font-medium text-2xl text-center text-zinc-50 cursor-pointer no-underline block hover:bg-green-800">
            Login
          </li>
        </Link>
      </ul>
    </nav>
  );
}
