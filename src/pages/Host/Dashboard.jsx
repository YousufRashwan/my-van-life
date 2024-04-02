import React from "react";
import { Link, useLoaderData, Await, defer } from "react-router-dom";
import { getVans, requireAuth } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getVans() });
}

const Dashboard = () => {
  const vansPromise = useLoaderData();

  function renderHostVanELems(vans) {
    const hostVans = vans.slice(3);
    const hostVanElements = hostVans.map((van) => (
      <div className="drop-shadow-lg bg-white mb-4 p-4 flex justify-between items-center rounded-md">
        <div className="flex items-center">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="w-20 rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">{van.name}</h2>
            <small className="block font-semibold">${van.price}/day</small>
          </div>
        </div>
        <Link to={`vans/${van.id}`} className="font-semibold">
          View
        </Link>
      </div>
    ));
    return hostVanElements;
  }

  return (
    <div>
      <div className="bg-orange-100 p-6 py-8 mt-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold mb-3">Welcome!</h1>
          <p className="text-gray-600 mb-3">
            Income last <span className="font-semibold underline">30 days</span>
          </p>
          <p className="text-4xl font-extrabold">$2,260</p>
        </div>
        <Link to="income" className="font-semibold">
          Details
        </Link>
      </div>
      <div className="bg-orange-200 p-6 py-10 flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-3xl font-semibold mr-4">Review score</h2>
          <p className="text-xl text-gray-600 ">
            <span className=" text-orange-400 text-2xl mr-1">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="font-semibold text-black">5.0</span>/5
          </p>
        </div>
        <Link to="reviews" className="font-semibold">
          Details
        </Link>
      </div>
      <div className="px-6 py-16 mb-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Your listed vans</h2>
          <Link to="vans" className="font-semibold">
            View all
          </Link>
        </div>
        <div>
          <React.Suspense
            fallback={
              <p className="text-2xl font-semibold mb-3">...Loading Vans</p>
            }
          >
            <Await resolve={vansPromise.vans}>{renderHostVanELems}</Await>
          </React.Suspense>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
