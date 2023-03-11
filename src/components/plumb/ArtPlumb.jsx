import axios from "axios";
import React, { useContext, useState } from "react";
import { FiTv, FiUser } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import { SearchContext } from "../../context/SearchContext";
import NotFound from "./NotFound";
import { BiLeftArrow } from "react-icons/bi";

const ArtPlumb = () => {
  const [searchValue, setSearchValue] = useContext(SearchContext);
  const [pageNo, setPageNo] = useState(1);

  const fetchData = async (searchValue) => {
    return await axios
      .get(
        `https://emondash.onrender.com/articles?q=${searchValue}&_page=${pageNo}&_limit=4`
      )
      .then((res) => {
        return res.data;
      });
  };

  const {
    data: resData,
    isLoading,
    isError,
  } = useQuery([searchValue, pageNo], () => fetchData(searchValue));

  const handlePageChange = (data) => {
    setPageNo(data.selected + 1);
  };

  if (resData?.length === 0) {
    return <NotFound title="Articles Not found" />;
  }

  return (
    <div className="mt-10">
      {resData?.map((emon, index) => (
        <div
          className="py-6 px-10 mb-4  bg-white shadow-md rounded-lg"
          key={index}
        >
          <div className="mb-2">
            <h1 className="text-xl font-bold text-gray-600">{emon?.Title}</h1>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-wrap py-3">
              <FiUser />{" "}
              <h1 className="text-indigo-500 text-sm ml-3">
                {emon?.FirstName} {emon?.LastName}
              </h1>
            </div>
            <div className="flex flex-wrap py-3">
              <FiTv />{" "}
              <h1 className="text-indigo-500 text-sm ml-3">{emon?.Type}</h1>
            </div>
          </div>
        </div>
      ))}

      <div className="py-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          pageRangeDisplayed={3}
          pageCount={20}
          previousLabel="Prev"
          onPageChange={handlePageChange}
          activeClassName="bg-red-500 text-white py-1 px-2"
          className="flex gap-6 items-center"
          pageLinkClassName="text-bold"
          pageClassName="bg-indigo-500 text-white py-1 px-2 rounded-md"
          nextClassName="bg-indigo-500 text-white py-1 px-2 rounded-md"
          previousClassName="bg-indigo-500 text-white py-1 px-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default ArtPlumb;
