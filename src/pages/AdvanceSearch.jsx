import React from "react";
import { FiSearch } from "react-icons/fi";

const AdvanceSearch = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault();

    console.log("Submitted");
  };

  return (
    <div>
      <h1 className="pb-6 text-3xl text-gray-500 font-extrabold">
        Advance Search
      </h1>
      <hr />
      <br />
      <form onSubmit={handleSubmit}>
        <div className=" mb-10">
          <h4 className="text-gray-600 mb-2 font-bold">Journal</h4>
          <div className="flex-1">
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
                onChange={(e) => console.log("Text")}
              />
            </label>
          </div>
          <div className=" mb-10">
            <h4 className="text-gray-600 my-2 font-bold">Author</h4>
            <div className="flex-1">
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
                  onChange={(e) => console.log("Text")}
                />
              </label>
            </div>
          </div>
          <div className=" mb-8">
            <h4 className="text-gray-600 mb-2 font-bold">Published</h4>
            <div className="flex gap-10">
              <div className="">
                <p className="text-sm mb-2">Date Type</p>

                <select className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                  <option value="">Last Published</option>
                </select>
              </div>
              <div className="">
                <p className="text-sm mb-2">From</p>

                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search life-sciences literature"
                  type="date"
                  name="search"
                  onChange={(e) => console.log("Text")}
                />
              </div>
              <div className="">
                <p className="text-sm mb-2">To</p>

                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search life-sciences literature"
                  type="date"
                  name="search"
                  onChange={(e) => console.log("Text")}
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex">
              <div>
                <h4 className="text-gray-600 mb-2 font-bold">Volume</h4>
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
                    onChange={(e) => console.log("Text")}
                  />
                </label>
              </div>
              <div>
                <h4 className="text-gray-600 mb-2 font-bold">Issue</h4>
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
                    onChange={(e) => console.log("Text")}
                  />
                </label>
              </div>
              <div>
                <h4 className="text-gray-600 mb-2 font-bold">First Page</h4>
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
                    onChange={(e) => console.log("Text")}
                  />
                </label>
              </div>
            </div>
          </div>
          <h4 className="text-gray-600 mb-2 font-bold">Title</h4>
          <div className="flex-1">
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
                onChange={(e) => console.log("Text")}
              />
            </label>
          </div>
          <div className="mt-4">
            <h4 className="text-gray-600 mb-2 font-bold">Sources</h4>
            <div className="flex flex-wrap gap-4">
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Agricola (USDA/NAL)
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox2"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox2"
                  class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Chinese biological abstracts
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox3"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox3"
                  class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  CiteXplore records
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox4"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox4"
                  class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Patents
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox5"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox5"
                  class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Preprint records
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox6"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox6"
                  class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  PubMed/MEDLINE (NLM)
                </label>
              </div>
            </div>
          </div>
          <button className="bg-indigo-600 px-6 py-2 text-white mt-6 cursor-pointer rounded-md">
            Search
          </button>
          <button className="bg-gray-300 px-6 py-2 text-gray-900 ml-6 mt-6 cursor-pointer rounded-md">
            Reset Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdvanceSearch;
