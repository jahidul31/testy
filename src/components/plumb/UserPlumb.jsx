import axios from "axios";
import React, { useContext, useState } from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FiGlobe, FiTv } from "react-icons/fi";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import NotFound from "./NotFound";

const UserPlumb = () => {
  const [searchValue, setSearchValue] = useContext(SearchContext);
  const [pageNoUser, setPageNoUser] = useState(1);

  const fetchData = async (searchValue) => {
    return await axios
      .get(
        `https://emondash.onrender.com/articles?q=${searchValue}&_page=${pageNoUser}&_limit=4`
      )
      .then((res) => {
        console.log("from user", res);
        return res.data;
      });
  };

  const handlePageChangeUser = (data) => {
    setPageNoUser(data.selected + 1);
  };

  const {
    data: resData,
    isLoading,
    isError,
  } = useQuery([searchValue, pageNoUser], () => fetchData(searchValue));

  if (resData?.length === 0) {
    return <NotFound title="User Result not found" />;
  }

  return (
    <div className="mt-10">
      {resData?.map((emon, index) => (
        <div className="py-5 px-5 mb-4  bg-white shadow-md" key={index}>
          <Link to={`/profile/${emon?.id}`}>
            <div className="flex gap-6">
              <img
                src={`https://i.pravatar.cc/150?img=${emon?.id}`}
                alt=""
                className="rounded-full w-24 h-24"
              />
              <div>
                <div className="mb-2">
                  <h1 className="text-4xl font-bold text-gray-500 capitalize mb-2">
                    {emon?.FirstName} {emon?.LastName}
                  </h1>
                  <hr />
                  <br />
                  <div className="flex gap-3">
                    <p className="text-sm font-bold text-gray-500 flex gap-2">
                      <HiOutlineMail className="text-indigo-500 mt-1" />{" "}
                      {emon?.Email}
                    </p>
                    <p className="text-sm font-bold text-gray-500 flex gap-2">
                      <BsFillBuildingsFill className="text-indigo-500 mt-1" />
                      {emon?.Organisation}
                    </p>
                    <p className="text-sm font-bold text-gray-500 flex gap-2">
                      <FiGlobe className="text-indigo-500 mt-1" />{" "}
                      {emon?.State === undefined ? "" : emon?.State + " ,"}{" "}
                      {emon?.Country}
                    </p>

                    <p className="text-sm font-bold text-gray-500 flex gap-2">
                      <HiLocationMarker className="text-indigo-500 mt-1" />
                      {emon?.Location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}

      <div className="py-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          pageRangeDisplayed={3}
          pageCount={20}
          previousLabel="Prev"
          onPageChange={handlePageChangeUser}
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

export default UserPlumb;
