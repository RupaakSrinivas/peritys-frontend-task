"use client";
import { useState } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <div className="h-[64px] border-b-2 text-[0.5rem] md:text-[1rem] flex flex-row items-center justify-around p-4">
      <h1 className=" font-inter font-bold text-[.75rem] md:text-[1.5rem]">
        Exclusive
      </h1>
      <nav className="hidden md:block">
        <ul className="flex flex-row items-center space-x-4">
          <li>
            <a
              href="#"
              onClick={() => setActive("home")}
              className={`${
                active === "home" ? " border-b-2 border-black py-2" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setActive("about")}
              className={`${
                active === "about" ? " border-b-2 border-black py-2" : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setActive("contact")}
              className={`${
                active === "contact" ? " border-b-2 border-black py-2" : ""
              }`}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setActive("services")}
              className={`${
                active === "services" ? " border-b-2 border-black py-2" : ""
              }`}
            >
              Services
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row justify-around gap-4">
        <div className="flex flex-row items-center bg-[#F5F5F5]">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-[#F5F5F5] p-2 rounded-md outline-none"
          />
          <button>
            <CiSearch className="m-2 text-[1rem] md:text-[1.5rem]" />
          </button>
        </div>
        <div className="flex flex-row gap-2 items-center text-[1rem] md:text-[1.5rem]">
          <CiHeart />
          <IoCartOutline />
        </div>
      </div>
    </div>
  );
}
