import React from "react";
import LOGO from "../Assets/LOGO.png";
import fireicon from "../Assets/fireicon.svg"
import profile from "../Assets/profile.jpg"

export default function Navbar() {
  return (
    <>
      <div className=" !bg-black h-[74px] flex px-4">
        <img className="flex-0 " src={LOGO} alt="Logo" />
        <div className="flex text-xs sm:text-[16px] flex-1 items-center text-white">
          <div className="hover:border-b-2 border-solid  focus:border-b-2 active:border-b-2  hover:border-solid  px-2 py-2 hover:font-semibold focus:font-semibold active:font-semibold transition ease-out hover:ease-in duration-150 mx-2">
            Home
          </div>
          <div className="hover:border-b-2 border-solid  focus:border-b-2 active:border-b-2 hover:border-solid px-2 py-2 hover:font-semibold focus:font-semibold active:font-semibold transition ease-out hover:ease-in duration-150 mx-2">
            Explore
          </div>
          <div className="hover:border-b-2 border-solid  focus:border-b-2 active:border-b-2  hover:border-solid  px-2 py-2 hover:font-semibold focus:font-semibold active:font-semibold transition ease-out hover:ease-in duration-150 mx-2">
            About
          </div>
          <div className="hover:border-b-2 border-solid  focus:border-b-2 active:border-b-2  hover:border-solid  px-2 py-2 hover:font-semibold focus:font-semibold active:font-semibold transition ease-out hover:ease-in duration-150 mx-2">
            Contact us
          </div>
        </div>
        <div className="flex items-center justify-between mx-6">
          <img className="w-6 h-6 mx-6" src={fireicon} alt="" />
          <img className="rounded-full w-12 h-12" src={profile} alt="" />
      </div>
      </div>
    </>
  );
}
