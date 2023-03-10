import React from "react";
import errorSvg from "../assets/error.svg";

const ErrorComponent = () => {
  return (
    <div className="flex flex-col">
      <img src={errorSvg} alt="Error" className="w-80 mb-10" />
      <h1 className="text-4xl">Fetching Data Error...</h1>
    </div>
  );
};

export default ErrorComponent;
