import React from "react";
import { CiStar } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";

const HomeStats = () => {
  return (
    <>
      <div className="flex flex-row space-x-20">
        <div className="flex space-x-4 p-2">
          <div>
            <CiStar className="text-5xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xl">4.8</span>
            <span className="text-gray-600 text-sm pt-2">Service Rating</span>
          </div>
        </div>
        <div className="flex space-x-4 p-2">
          <div>
            <IoIosPeople className="text-5xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xl">12 M+</span>
            <span className="text-gray-600 text-sm pt-2">
              Customers Globally
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStats;
