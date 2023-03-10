import axios from "axios";
import React from "react";
import { FiGlobe, FiHash, FiTv } from "react-icons/fi";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import ArticleSkeleton from "../components/ArticleSkeleton";
import ErrorComponent from "../components/ErrorComponent";

const fetchData = async (srcs, id) => {
  return await axios
    .get(
      `https://www.ebi.ac.uk/europepmc/webservices/rest/article/${srcs}/${id}?resultType=core&format=json`
    )
    .then((res) => {
      return res.data.result;
    });
};

const Articles = () => {
  const { source, id } = useParams();

  const {
    data: resData,
    isLoading,
    isError,
  } = useQuery(["fxData"], () => fetchData(source, id));

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <>
      {isLoading ? (
        <ArticleSkeleton />
      ) : (
        <div className="mt-20">
          <h1 className="text-4xl font-bold text-gray-500">{resData?.title}</h1>
          <div className="mt-5">
            <div className="flex flex-wrap gap-3">
              {resData?.authorList?.author?.map((auth, index) => (
                <div key={index}>
                  <h1 className="text-sm mr-3 text-purple-400">
                    <Link to={`/profile/${auth?.fullName}`}>
                      {auth?.fullName}
                    </Link>
                  </h1>
                </div>
              ))}
            </div>
            <div className="flex gap-4 items-center text-sm my-4">
              <FiTv />
              <p>{resData?.firstPublicationDate}</p>
            </div>
            <div className="flex gap-3 items-center">
              <FiGlobe />
              {resData?.journalInfo?.journal?.title}
            </div>
            <div>
              <h1 className="text-xl font-bold mt-10 mb-2 divide-x">
                Abstract
              </h1>
              <hr />
              <p className="text-sm mt-4">{resData?.abstractText}</p>
            </div>

            <div>
              <h1 className="text-xl font-bold mt-10 mb-2 divide-x">
                Keywords
              </h1>
              <hr />
              <div className="flex gap-3 mt-3">
                {resData?.keywordList?.keyword?.map((tags, index) => (
                  <div className="flex items-center" key={index}>
                    <FiHash />
                    <p className="text-sm">{tags}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Articles;
