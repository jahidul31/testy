import React from "react";
import {
  FiDatabase,
  FiGrid,
  FiHome,
  FiMessageSquare,
  FiServer,
  FiSettings,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

const Sidebar = () => {
  return (
    <div className="w-3/12 border-r-2 shadow-xl relative">
      <div className="sticky h-screen top-0 left-0 py-6 w-full">
        <div className="flex justify-between flex-col h-full">
          <div>
            <div className="text-center mx-6 my-2 mb-10 flex items-center gap-4">
              <img
                src="https://mma.prnewswire.com/media/1898136/Biointelli_Corporation_Logo.jpg"
                alt="logo"
              />
            </div>
            <Link to={"/"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiHome /> Home
              </div>
            </Link>
            <Link to={"/"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiServer /> Search
              </div>
            </Link>
            <Link to={"/infos"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiDatabase /> Data Table
              </div>
            </Link>
            <Link to={"/plumbed"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiGrid /> Pubmed
              </div>
            </Link>
            <Link to={"/"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiUsers /> My Account
              </div>
            </Link>
            <Link to={"/"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiStar /> Reviews
              </div>
            </Link>
            <Link to={"/"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiMessageSquare /> Messages
              </div>
            </Link>
          </div>
          <Link to={"/"}>
            <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
              <FiSettings /> Setting
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
