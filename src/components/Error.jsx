import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  //ss
  return (
    <div className="bg-red-100 rounded-lg shadow-md p-4">
      <h1 className="text-red-500 text-2xl font-bold">
        Error: {error.message}
      </h1>
      <pre className="text-gray-600 text-sm mt-2">
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
}
