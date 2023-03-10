import React, { useContext, useState } from "react";
import {
  FiChevronDown,
  FiChevronsLeft,
  FiEye,
  FiFilter,
  FiList,
  FiMaximize,
  FiSearch,
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import { SearchContext } from "../context/SearchContext";
import { SettingContext } from "../context/SettingContext";

function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [searchValue, setSearchValue] = useContext(SearchContext);
  const [bgColor, setBgColor, fullScreen, setFullScreen] =
    useContext(SettingContext);

  const nav = useNavigate();

  const loc = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(searchText);

    setSearchText("");

    if (loc.pathname !== "/search") {
      nav("/search");
    } else {
      return;
    }
  };

  const cngContrast = () => {
    setBgColor(bgColor === "bg-white" ? "bg-slate-100" : "bg-white");
  };

  const fullScreenSetting = () => {
    setFullScreen(!fullScreen);
  };

  const advanceSearchAction = () => {
    nav("/advanceSearch");
  };

  return (
    <div className="">
      <div className="flex justify-center items-end mb-10">
        <div className="flex-1">
          <label className="relative block w-[70%]">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FiSearch className="text-gray-600" />
            </span>
            <form onSubmit={handleSubmit}>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search life-sciences literature"
                type="text"
                name="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </form>
          </label>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img src={avatar} className="bg-cover w-12 h-12 rounded-md" />
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <h1 className="font-bold text-lg text-gray-600">David Hines</h1>
              <p className="text-xs">Developer</p>
            </div>
            <FiChevronDown size={"24px"} className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="mb-10 flex gap-20  text-gray-500">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={advanceSearchAction}
        >
          <FiFilter />
          <p className="text-sm">Advance Search</p>
        </div>
        <div className="flex items-center gap-3" onClick={fullScreenSetting}>
          <FiMaximize />
          <p className="text-sm cursor-pointer">
            {fullScreen ? "Full Screen" : "Normal"}
          </p>
        </div>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={cngContrast}
        >
          <FiEye />
          <p className="text-sm">
            {bgColor === "bg-white" ? "Decrease Contrast" : "Increase Contrast"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
