import axios from "axios";
import React, { useContext } from "react";
import { FiTv } from "react-icons/fi";
import { useQuery } from "react-query";
import { SearchContext } from "../../context/SearchContext";
import NotFound from "./NotFound";

const UniversePlumb = () => {
  const [searchValue, setSearchValue] = useContext(SearchContext);

  const fetchData = async (searchValue) => {
    return await axios
      .get(`http://localhost:8080/articles?q=${searchValue}`)
      .then((res) => {
        console.log("from university", res);
        return res.data;
      });
  };

  const {
    data: resData,
    isLoading,
    isError,
  } = useQuery([searchValue], () => fetchData(searchValue));

  if (resData?.length === 0) {
    return <NotFound title="University Result not found" />;
  }

  return (
    <div className="mt-10">
      {resData?.map((emon, index) => (
        <div className="py-5 px-5 mb-4  bg-white shadow-md" key={index}>
          <div className="mb-2">
            <h1 className="text-xl font-bold text-gray-600">
              {emon?.Organisation}
            </h1>
          </div>
          <div className="flex flex-wrap py-3">
            <FiTv />{" "}
            <h1 className="text-indigo-500 text-sm ml-3">{emon?.Type}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UniversePlumb;
