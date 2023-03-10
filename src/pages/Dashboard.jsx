import axios from "axios";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import DataCards from "../components/DataCards";
import { SearchContext } from "../context/SearchContext";
import DashSkeleton from "../components/DashSkeleton";
import ErrorComponent from "../components/ErrorComponent";

const fetchData = async (searchTerm) => {
  return await axios
    .get(
      `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${searchTerm}&resultType=core&format=json`
    )
    .then((res) => {
      return res.data.resultList.result;
    });
};

const Dashboard = () => {
  const [searchValue, setSearchValue] = useContext(SearchContext);

  const {
    data: resData,
    isLoading,
    isError,
  } = useQuery([searchValue], () => fetchData(searchValue));

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-4 font-800">Basic Dashboard</h1>
      {isLoading ? <DashSkeleton /> : <DataCards myData={resData} />}
    </div>
  );
};

export default Dashboard;
