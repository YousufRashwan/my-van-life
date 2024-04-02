import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { van } = useOutletContext();
  return <img src={van.imageUrl} alt={van.name} className="w-32 rounded-md" />;
};

export default HostVanPhotos;
