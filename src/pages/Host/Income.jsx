import React from "react";
import IncomeChart from "../../assets/income.png";

export default function Income() {
  return (
    <div className="m-6">
      <div className="mb-14">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Income</h2>
          <p className="mb-4 text-gray-600">
            Last <span className="font-semibold underline">30 days</span>
          </p>
          <p className="text-4xl font-extrabold">$2,260</p>
        </div>
        <div
          style={{ backgroundImage: `url(${IncomeChart})` }}
          className="bg-cover bg-center w-[284px] h-[200px] sm:w-[452px] sm:h-[310px]"
        ></div>
      </div>
      <div>
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-4">Your transactions (3)</h3>
          <p className="mb-2 text-gray-600">
            Last <span className="font-semibold underline">30 days</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-white px-6 py-10 flex justify-between items-center rounded-md drop-shadow-lg">
            <p className="text-4xl font-bold">$720</p>
            <p className="text-xl text-gray-600">Jan 3, '23</p>
          </div>
          <div className="bg-white px-6 py-10 flex justify-between items-center drop-shadow-lg">
            <p className="text-4xl font-bold">$560</p>
            <p className="text-xl text-gray-600">Dec 12, '22</p>
          </div>
          <div className="bg-white px-6 py-10 flex justify-between items-center drop-shadow-lg">
            <p className="text-4xl font-bold">$980</p>
            <p className="text-xl text-gray-600">Dec 3, '22</p>
          </div>
        </div>
      </div>
    </div>
  );
}
