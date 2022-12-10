import React from "react";
import { FaStar } from "react-icons/fa";

function Ranking() {
  return (
    <div className="flex flex-wrap -mx-2 sm:mx-0 items-center justify-between lg:justify-start lg:grid lg:grid-cols-[14rem_1fr] lg:gap-4">
      <div className="flex items-center space-x-3 m-2 sm:m-0">
        <div className="flex items-center space-x-[.2rem]">
          <FaStar color="#ED8A19" className="text-xs sm:text-sm xl:text-base" />
          <FaStar color="#ED8A19" className="text-xs sm:text-sm xl:text-base" />
          <FaStar color="#ED8A19" className="text-xs sm:text-sm xl:text-base" />
          <FaStar color="#ED8A19" className="text-xs sm:text-sm xl:text-base" />
          <FaStar color="#ED8A19" className="text-xs sm:text-sm xl:text-base" />
        </div>
        <p className="text-xs sm:text-sm xl:text-base -text-gray">
          124 Reviews
        </p>
      </div>
      <div className="m-2 sm:m-0">
        <p className="text-xs sm:text-sm xl:text-base -text-gray">
          Playa del Carmen, Mexico
        </p>
      </div>
    </div>
  );
}

export default Ranking;
