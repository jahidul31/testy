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

const MinimalSidebar = () => {
  return (
    <div className="w-24 border-r-2 shadow-xl relative">
      <div className="sticky h-screen top-0 left-0 py-6 w-full">
        <div className="flex justify-between flex-col h-full">
          <div>
            <div className="text-center mx-6 my-2 mb-10 flex items-center gap-4">
              <img src={logo} alt="logo" />
            </div>
            <Link to={"/"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiHome className="text-2xl" />
              </div>
            </Link>
            <Link to={"/"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiServer className="text-2xl" />
              </div>
            </Link>
            <Link to={"/infos"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiDatabase className="text-2xl" />
              </div>
            </Link>
            <Link to={"/plumbed"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiGrid className="text-2xl" />
              </div>
            </Link>
            <Link to={"/"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiUsers className="text-2xl" />
              </div>
            </Link>
            <Link to={"/"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiStar className="text-2xl" />
              </div>
            </Link>
            <Link to={"/"}>
              <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
                <FiMessageSquare className="text-2xl" />
              </div>
            </Link>
          </div>
          <Link to={"/"}>
            <div className="flex gap-4 items-center hover:text-blue-600 px-6 py-2">
              <FiSettings className="text-2xl" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MinimalSidebar;
