import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { SettingContext } from "../context/SettingContext";
import MinimalSidebar from "./MinimalSidebar";
import PlumbedNav from "./PlumbedNav";
import Sidebar from "./Sidebar";

const PlumbedLayout = () => {
  const [bgColor, setBgColor, fullScreen, setFullScreen] =
    useContext(SettingContext);

  return (
    <div className={`flex ${bgColor} min-h-screen text-gray-700 font-emon`}>
      {fullScreen ? <Sidebar /> : <MinimalSidebar />}

      <div className="container mx-auto overflow-hidden">
        <div className="px-20 py-6">
          <PlumbedNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PlumbedLayout;
