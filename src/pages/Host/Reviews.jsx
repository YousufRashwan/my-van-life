import React from "react";
import ReviewsPic from "../../assets/reviews.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  return (
    <div className="mx-5 my-6">
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">Your reviews</h2>
          <p className="text-gray-600">
            Last <span className="font-semibold underline">30 days</span>
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${ReviewsPic})` }}
          className="bg-cover bg-center w-[458px] h-[198px]"
        ></div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Reviews (3)</h3>
        <div>
          <div className="mb-6">
            <div className="mb-2">
              <span className=" text-orange-400 text-lg mr-1">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className=" text-orange-400 text-lg mr-1">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className=" text-orange-400 text-lg mr-1">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className=" text-orange-400 text-lg mr-1">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className=" text-orange-400 text-lg mr-1">
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <p className="font-semibold">Elliot</p>
              <p className="text-gray-600 font-extralight">January 3, 2023</p>
            </div>
            <div>
              <p>
                The beach bum is such an awesome van! Such a comfortable trip.
                We had it for 2 weeks and there was not a single issue. Super
                clean when we picked it up and the host is very comfortable and
                understanding. Highly recommend!
              </p>
            </div>
          </div>
          <hr className="border-solid border-gray-400 mb-6" />
          <div className="mb-6">
            <div className="mb-2">
              <span className=" text-orange-400 text-lg mr-1">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className=" text-orange-400 text-lg mr-1">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className=" text-orange-400 text-lg mr-1">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className=" text-orange-400 text-lg mr-1">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className=" text-orange-400 text-lg mr-1">
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <p className="font-semibold">Sandy</p>
              <p className="text-gray-600 font-extralight">December 12, 2022</p>
            </div>
            <div>
              <p>
                This is our third time using the Modest Explorer for our travels
                and we love it! No complaints, absolutely perfect!
              </p>
            </div>
          </div>
          <hr className="border-solid border-gray-400 mb-6" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
