import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { van } = useOutletContext();
  console.log(van);
  return (
    <small className="block mb-4 text-2xl">
      <span className="font-semibold">${van.price}</span>/day
    </small>
  );
};

export default HostVanPricing;
