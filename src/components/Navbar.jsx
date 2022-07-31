import React, { useState } from "react";
import LOGO from "../Assets/LOGO.png";
import fireicon from "../Assets/fireicon.svg";
import profile from "../Assets/profile.jpg";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <div className="w-full !bg-black flex h-auto flex-col md:flex-row md:items-center">
        <div className="flex flex-0 px-0 md:px-4 items-start md:items-center">
          <div className="flex-1 justify-start">
            <img
              className="w-36 md:w-56 object-contain"
              src={LOGO}
              alt="Logo"
            />
          </div>
          <div className="md:hidden my-2 mx-4">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="#ffffff"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffffff"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`flex-1 ${navbar ? "block" : "hidden md:block"}`}>
          <div className="flex flex-col md:flex-row text-xs sm:text-[16px] flex-1 text-white justify-start items-center">
            <div
              className="hover:border-b-2 border-solid  focus:border-b-2 active:border-b-2  hover:border-solid  px-2 py-2 hover:font-semibold focus:font-semibold active:font-semibold transition ease-out hover:ease-in duration-150 mx-2 no-underline text-white"
              href="/"
            >
              Home
            </div>
            <a
              className="hover:border-b-2 border-solid  focus:border-b-2 active:border-b-2  hover:border-solid  px-2 py-2 hover:font-semibold focus:font-semibold active:font-semibold transition ease-out hover:ease-in duration-150 mx-2 no-underline text-white"
              href="/"
            >
              Explore
            </a>
            <a
              className="hover:border-b-2 border-solid  focus:border-b-2 active:border-b-2  hover:border-solid  px-2 py-2 hover:font-semibold focus:font-semibold active:font-semibold transition ease-out hover:ease-in duration-150 mx-2 no-underline text-white"
              href="/"
            >
              About
            </a>

            <a
              className="hover:border-b-2 border-solid  focus:border-b-2 active:border-b-2  hover:border-solid  px-2 py-2 hover:font-semibold focus:font-semibold active:font-semibold transition ease-out hover:ease-in duration-150 mx-2 no-underline text-white"
              href="/contact"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-between mx-6">
          <img className="w-6 h-6 mx-6" src={fireicon} alt="" />
          <img className="rounded-full w-12 h-12" src={profile} alt="" />
        </div>
      </div>
    </>
  );
}