import React from "react";
import { useLoaderData, Link, Await, defer } from "react-router-dom";
import { requireAuth, getVans } from "../../api";

export const loader = async ({ request }) => {
  await requireAuth(request);
  return defer({ vans: getVans() });
};

const HostVans = () => {
  const vansPromise = useLoaderData();

  function renderHostVanELems(vans) {
    const hostVans = vans.slice(3);
    const hostVanElements = hostVans.map((van) => (
      <Link
        to={van.id}
        className="bg-white mb-4 p-4 flex justify-between
        items-center rounded-md drop-shadow-lg
        hover:translate-x-0.5 hover:translate-y-0.5 transition"
      >
        <div className="flex items-center">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="w-20 rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">{van.name}</h2>
            <small className="block  font-semibold">${van.price}/day</small>
          </div>
        </div>
      </Link>
    ));
    return hostVanElements;
  }
  return (
    <div className="px-6 mt-6 mb-6">
      <h2 className="text-3xl font-bold mb-4">Your listed vans</h2>
      <React.Suspense
        fallback={
          <p className="text-2xl font-semibold mb-3">...Loading Vans</p>
        }
      >
        <Await resolve={vansPromise.vans}>{renderHostVanELems}</Await>
      </React.Suspense>
    </div>
  );
};

export default HostVans;
