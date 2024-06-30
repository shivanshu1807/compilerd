import React from "react";

const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    if (!outputDetails) {
      return null;
    }

    const { status_code, output, execute_time, error, errorMessage } =
      outputDetails;

    if (status_code === 200) {
      // Successful execution
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {output !== null ? output.trim() : ""}
        </pre>
      );
    } else {
      // Handle different status codes
      switch (status_code) {
        case 400:
          return (
            <pre className="px-2 py-1 font-normal text-xs text-red-500">
              {errorMessage || "Bad Request"}
            </pre>
          );
        case 404:
          return (
            <pre className="px-2 py-1 font-normal text-xs text-red-500">
              {errorMessage || "Not Found"}
            </pre>
          );
        case 429:
          return (
            <pre className="px-2 py-1 font-normal text-xs text-red-500">
              {errorMessage || "Too Many Requests"}
            </pre>
          );
        default:
          return (
            <pre className="px-2 py-1 font-normal text-xs text-red-500">
              {errorMessage || "Unknown Error"}
            </pre>
          );
      }
    }
  };

  return (
    <>
      <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Output
      </h1>
      <div className="w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto">
        {getOutput()}
      </div>
    </>
  );
};

export default OutputWindow;
