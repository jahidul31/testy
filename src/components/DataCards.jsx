import React from "react";
import { FiTv } from "react-icons/fi";
import { Link } from "react-router-dom";

function DataCards({ myData }) {
  return (
    <>
      {myData.map((emon) => (
        <div className="py-5 px-5 mb-4  bg-white shadow-md" key={emon?.id}>
          <Link
            to={`/articles/${emon?.source}/${emon?.id}`}
            className="text-xl text-gray-500 font-bold"
          >
            <div className="">
              <h1 className="mb-2">{emon?.title}</h1>
              <div className="flex flex-wrap py-3">
                {emon?.authorList?.author.map((aut) => (
                  <p
                    key={aut?.fullName}
                    className="text-sm mr-3 text-purple-400"
                  >
                    {aut?.fullName}
                  </p>
                ))}
              </div>
              <div className="flex gap-4 items-center text-sm">
                <FiTv />
                <p>{emon?.firstPublicationDate}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default DataCards;
