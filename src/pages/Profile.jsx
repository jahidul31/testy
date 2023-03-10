import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import faker from "faker";

const Profile = () => {
  const { id } = useParams();
  const ref = useRef();

  const options = {
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

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold text-gray-500 capitalize mb-2">{id}</h1>
      <hr />
      <div className="flex flex-wrap mt-10 gap-3">
        <div className="flex-1 bg-white rounded-lg shadow-md p-5">
          <h1 className="text-2xl text-purple-600 font-bold">35 +</h1>
          <p className="text-sm">Publications in ORCID</p>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-5">
          <h1 className="text-2xl text-purple-600 font-bold">15 +</h1>
          <p className="text-sm">Publications in Europe PMC</p>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-5">
          <h1 className="text-2xl text-purple-600 font-bold">25 +</h1>
          <p className="text-sm">Free full text articles in Europe PMC</p>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-5">
          <h1 className="text-2xl text-purple-600 font-bold">5 +</h1>
          <p className="text-sm">Open citations in Europe PMC</p>
        </div>
      </div>
      <div className=" p-10 ">
        <Bar ref={ref} options={options} data={data} />
      </div>
    </div>
  );
};

export default Profile;
