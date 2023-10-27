import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FaBeer } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { PiArrowsLeftRightDuotone } from "react-icons/pi";
import { AiFillWallet } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
const Header = () => {
  return (
    <div className="h-full w-1/5 px-4 py-4 shadow-sm">
      <div className="w-full h-full bg-white rounded-xl px-4 py-4 flex flex-col items-center gap-y-8">
        <div className="font-bold text-2xl text-black mt-3">ZENCE</div>
        <div className="flex flex-col items-center">
          <img
            className="w-28 h-28 rounded-full mx-8 object-cover"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="text-sm text-gray-400 mt-2">Welcome back</div>
          <div className=" text-base text-gray-800 font-semibold">
            Taylor Simora
          </div>
        </div>
        <div className="sidebar-month__budget flex flex-col items-center">
          <div className="text-2xl text-gray-800 font-medium">$34,321</div>
          <div className="text-sm text-gray-400 mt-2">Monthly budget</div>
        </div>
        <div className="sidebar__buttons flex flex-col gap-y-5 mt-2 items-start">
          <div className="flex items-center justify-start gap-x-2">
            <AiFillPieChart color="black" />
            <div className="text-black font-bold">Dashboard</div>
          </div>
          <div className="flex items-center justify-start gap-x-2">
            <BsFillFileBarGraphFill className="text-gray-400" />
            <div className="text-gray-400 font-bold">Investments</div>
          </div>
          <div className="flex items-center justify-start gap-x-2">
            <PiArrowsLeftRightDuotone className="text-gray-400 rotate-90 text-lg" />
            <div className="text-gray-400 font-bold">Transactions</div>
          </div>
          <div className="flex items-center justify-start gap-x-2">
            <AiFillWallet className="text-gray-400 text-lg" />
            <div className="text-gray-400 font-bold">Wallet</div>
          </div>
        </div>
        <div className="flex flex-col items-start ml-28 h-full justify-end w-full">
          <div className="sign-out mb-4 flex items-center gap-x-2">
            <TbLogout className="text-gray-500 font-bold" />
            <div className="text-sm text-gray-500 font-bold">Sign-out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
