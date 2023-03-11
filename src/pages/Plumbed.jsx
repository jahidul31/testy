import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  FiBriefcase,
  FiChevronDown,
  FiChevronRight,
  FiGlobe,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import { SearchContext } from "../context/SearchContext";
import avatar from "../assets/avatar.png";
import ArtPlumb from "../components/plumb/ArtPlumb";
import UserPlumb from "../components/plumb/UserPlumb";
import UniversePlumb from "../components/plumb/UniversPlumb";

const Plumbed = () => {
  const [searchValue, setSearchValue] = useContext(SearchContext);

  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState(searchValue);

  const onValueChange = (e) => {
    e.preventDefault();
    setSearchValue(formData);
  };

  useEffect(() => {
    if (searchValue !== "") {
      setSearchValue("");
      setFormData("");
    }
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-between items-end">
          <div className="flex-1">
            <form onSubmit={onValueChange}>
              <div className="flex">
                <label className="relative block w-[70%]">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FiSearch className="text-gray-600" />
                  </span>

                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search life-sciences literature"
                    type="text"
                    name="search"
                    value={formData === "mern" ? "" : formData}
                    onChange={(e) => setFormData(e.target.value)}
                  />
                </label>
                <button className="px-4 py-1.5 bg-indigo-500 text-white rounded-md">
                  Search
                </button>
              </div>
            </form>
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
        <div className="flex gap-6 mt-6">
          <div
            className="px-4 py-3 bg-indigo-500 text-white flex-1 rounded-lg  cursor-pointer"
            onClick={() => setTabIndex(0)}
          >
            <div className="flex gap-4 items-center justify-between">
              <div className="flex gap-2 items-center">
                <FiGlobe /> Articles
              </div>
              <h1>
                <FiChevronRight />
              </h1>
            </div>
          </div>
          <div
            className="px-4 py-3 bg-indigo-500 text-white flex-1 rounded-lg  cursor-pointer"
            onClick={() => setTabIndex(1)}
          >
            <div className="flex gap-4 items-center justify-between">
              <div className="flex gap-2 items-center">
                <FiUser /> Users
              </div>
              <h1>
                <FiChevronRight />
              </h1>
            </div>
          </div>
          <div
            className="px-4 py-3 bg-indigo-500 text-white flex-1 rounded-lg cursor-pointer"
            onClick={() => setTabIndex(2)}
          >
            <div className="flex gap-4 items-center justify-between">
              <div className="flex gap-2 items-center">
                <FiBriefcase /> University
              </div>
              <h1>
                <FiChevronRight />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {tabIndex === 0 && <ArtPlumb />}
        {tabIndex === 1 && <UserPlumb />}
        {tabIndex === 2 && <UniversePlumb />}
      </div>
    </>
  );
};

export default Plumbed;
