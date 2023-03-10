import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { SettingContext } from "../context/SettingContext";
import MinimalSidebar from "./MinimalSidebar";

const Layout = () => {
  const [bgColor, setBgColor, fullScreen, setFullScreen] =
    useContext(SettingContext);

  return (
    <div className={`flex ${bgColor} min-h-screen text-gray-700 font-emon`}>
      {fullScreen ? <Sidebar /> : <MinimalSidebar />}

      <div className="container mx-auto overflow-hidden">
        <div className="px-20 py-6">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
