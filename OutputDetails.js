import React from "react";

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3">
      <p className="text-sm">
        Output:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.output}
        </span>
      </p>
      <p className="text-sm">
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm">
        Execute Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.execute_time}
        </span>
      </p>
      <p className="text-sm">
        Error Code:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.error}
        </span>
      </p>
      <p className="text-sm">
        Error Message:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.errorMessage}
        </span>
      </p>
      <p className="text-sm">
        Status Code:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.status_code}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
