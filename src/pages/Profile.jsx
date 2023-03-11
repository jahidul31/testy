import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import faker from "faker";
import axios from "axios";
import { useQuery } from "react-query";
import { FiGlobe } from "react-icons/fi";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BsFillBuildingsFill } from "react-icons/bs";

const Profile = () => {
  const { id } = useParams();
  const ref = useRef();

  const fetchData = async (searchValue) => {
    return await axios
      .get(`http://localhost:8080/articles?id=${searchValue}`)
      .then((res) => {
        return res.data;
      });
  };

  const {
    data: resData,
    isLoading,
    isError,
  } = useQuery("userinfo", () => fetchData(id));

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Publication",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgb(84, 23, 215)",
      },
      {
        label: "Popularity",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const chartData2 = {
    labels,
    datasets: [
      {
        label: "Publication",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgb(84, 23, 215)",
      },
      {
        label: "Popularity",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className="mt-10">
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <div className="flex gap-6">
          <img
            src={`https://i.pravatar.cc/150?img=${id}`}
            alt=""
            className="rounded-full w-24 h-24"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-500 capitalize mb-2">
              {resData[0]?.FirstName} {resData[0]?.LastName}
            </h1>
            <hr />
            <br />
            <div className="flex gap-3">
              <p className="text-sm font-bold text-gray-500 flex gap-2 items-center">
                <HiOutlineMail className="text-indigo-500" />{" "}
                {resData[0]?.Email}
              </p>
              <p className="text-sm font-bold text-gray-500 flex gap-2 items-center">
                <BsFillBuildingsFill className="text-indigo-500" />
                {resData[0]?.Organisation}
              </p>
              <p className="text-sm font-bold text-gray-500 flex gap-2 items-center">
                <FiGlobe className="text-indigo-500" />{" "}
                {resData[0]?.State === undefined
                  ? ""
                  : resData[0]?.State + " ,"}{" "}
                {resData[0]?.Country}
              </p>

              <p className="text-sm font-bold text-gray-500 flex gap-2 items-center">
                <HiLocationMarker className="text-indigo-500" />
                {resData[0]?.Location}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-6 gap-3" key={resData[0]?.id}>
        <div className="flex-1 bg-white rounded-lg shadow-md p-5">
          <h1 className="text-2xl text-indigo-600 font-bold">
            {resData[0]?.Number_of_Publications == " " ? (
              <p>0</p>
            ) : (
              resData[0]?.Number_of_Publications + " +"
            )}
          </h1>
          <p className="text-sm">Publications</p>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-5">
          <h1 className="text-2xl text-indigo-600 font-bold">
            {resData[0].Number_of_Funded_Awards === " "
              ? "0"
              : resData[0].Number_of_Funded_Awards + " +"}
          </h1>
          <p className="text-sm">Funded Awards</p>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-5">
          <h1 className="text-2xl text-indigo-600 font-bold">
            {resData[0].Number_of_Clinical_Trials === " "
              ? "0"
              : resData[0].Number_of_Clinical_Trials + " +"}
          </h1>
          <p className="text-sm">Clinical Trials</p>
        </div>
      </div>

      <div className="flex mt-3 gap-3">
        <div className="p-10 bg-white rounded-lg shadow-lg flex-1">
          <Bar ref={ref} options={chartOptions} data={chartData} />
        </div>
        <div className="p-10 bg-white rounded-lg shadow-lg flex-1">
          <Bar ref={ref} options={chartOptions} data={chartData2} />
        </div>
      </div>

      <div className="mt-3 px-6 py-6 bg-white shadow-lg rounded-lg">
        <h4 className="text-2xl text-gary-600 font-bold my-2 text-indigo-600">
          Most Recent Publication
        </h4>
        <hr />
        <h4 className="font-bold mt-3">
          {resData[0]?.Most_Recent_Publication_Title === undefined
            ? "Not found"
            : resData[0]?.Most_Recent_Publication_Title}
        </h4>
      </div>
    </div>
  );
};

export default Profile;
