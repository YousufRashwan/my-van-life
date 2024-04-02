import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { van } = useOutletContext();
  return (
    <div className="flex flex-col gap-4 text-sm">
      <p>
        <span className="font-bold">Name: </span>
        {van.name}
      </p>
      <p>
        <span className="font-bold">Category: </span>
        {van.type}
      </p>
      <p>
        <span className="font-bold">Description: </span>
        {van.description}
      </p>
      <p>
        <span className="font-bold">Visibility: </span>Public
      </p>
    </div>
  );
};

export default HostVanInfo;
