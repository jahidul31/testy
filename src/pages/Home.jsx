import React, { useRef } from "react";
import { FiChevronRight } from "react-icons/fi";
import "chart.js/auto";
import { Pie, Doughnut } from "react-chartjs-2";

const Home = () => {
  const pieRef = useRef();
  const donateRef = useRef();

  const pieOptions = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
    },
  };

  const chatData = {
    labels: [],
    datasets: [
      {
        label: "Joins",
        data: [250, 60, 105],
        backgroundColor: [
          "rgb(84, 23, 215)",
          "rgb(54,162,235)",
          "rgb(255,205,86)",
        ],
      },
    ],
  };

  const dontData = {
    labels: [],
    datasets: [
      {
        label: "Joins",
        data: [250, 660, 105],
        backgroundColor: [
          "rgb(54,162,235)",
          "rgb(84, 23, 215)",
          "rgb(255,205,86)",
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <div className="flex gap-4 justify-between">
        <div className="shadow-md bg-white rounded-md flex-1 p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-bold flex-1 text-gray-500">
              Overall Journal Published
            </h1>
            <FiChevronRight />
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col items-center justify-center mt-6 gap-2">
              <div className="h-20 bg-slate-200 w-2 relative rounded-xl">
                <div className="absolute left-0 bottom-0 w-full h-14 bg-indigo-500 rounded-xl"></div>
              </div>
              <p className="text-xs font-bold">2017</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 gap-2">
              <div className="h-20 bg-slate-200 w-2 relative rounded-xl">
                <div className="absolute left-0 bottom-0 w-full h-14 bg-indigo-500 rounded-xl"></div>
              </div>
              <p className="text-xs font-bold">2018</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 gap-2">
              <div className="h-20 bg-slate-200 w-2 relative rounded-xl">
                <div className="absolute left-0 bottom-0 w-full h-10 bg-indigo-500 rounded-xl"></div>
              </div>
              <p className="text-xs font-bold">2019</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 gap-2">
              <div className="h-20 bg-slate-200 w-2 relative rounded-xl">
                <div className="absolute left-0 bottom-0 w-full h-16 bg-indigo-500 rounded-xl"></div>
              </div>
              <p className="text-xs font-bold">2020</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 gap-2">
              <div className="h-20 bg-slate-200 w-2 relative rounded-xl">
                <div className="absolute left-0 bottom-0 w-full h-6 bg-indigo-500 rounded-xl"></div>
              </div>
              <p className="text-xs font-bold">2021</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 gap-2">
              <div className="h-20 bg-slate-200 w-2 relative rounded-xl">
                <div className="absolute left-0 bottom-0 w-full h-8 bg-indigo-500 rounded-xl"></div>
              </div>
              <p className="text-xs font-bold">2022</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 gap-2">
              <div className="h-20 bg-slate-200 w-2 relative rounded-xl">
                <div className="absolute left-0 bottom-0 w-full h-12 bg-indigo-500 rounded-xl"></div>
              </div>
              <p className="text-xs font-bold">2023</p>
            </div>
          </div>
        </div>
        <div className="shadow-md bg-white rounded-md flex-1 p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-bold flex-1 text-gray-500">
              Total Journal Published
            </h1>
            <FiChevronRight />
          </div>
          <div className="flex">
            <div className="flex justify-center items-center">
              <h1 className="text-4xl font-bold p-2">356 K</h1>
            </div>
            <div className="h-32 w-32">
              <Pie options={pieOptions} ref={pieRef} data={chatData} />
            </div>
          </div>
        </div>
        <div className="shadow-md bg-white rounded-md flex-1 p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-bold flex-1 text-gray-500">
              Overall User
            </h1>
            <FiChevronRight />
          </div>
          <div className="flex">
            <div className="w-32 h-32">
              <Doughnut options={pieOptions} data={dontData} ref={donateRef} />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-4xl text-gray-800 font-bold pl-3">59 M</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 shadow-lg mt-10 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-600 pb-3">
          New Published Journals
        </h1>
        <hr />
        <div className="py-3">
          <h1 className="font-bold text-md pb-2">
            Relationship between COVID-19 vaccine hesitancy and willingness to
            pay for the booster dose of COVID-19 vaccine of oncology patients in
            Taizhou, China.
          </h1>
          <div className="flex gap-4 cursor-pointer">
            <p className="text-sm text-indigo-600">Jon Y</p>
            <p className="text-sm text-indigo-600">Yen R</p>
            <p className="text-sm text-indigo-600">Jon Son</p>
            <p className="text-sm text-indigo-600">Mark Dio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
