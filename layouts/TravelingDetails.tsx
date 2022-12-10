import TravelingOptions from "components/TravelingOptions";
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import TravelingAreaCard from "./TravelingAreaCard";

function TravelingDetails() {
  return (
    <div className="container">
      <div className="grid grid-cols-[1fr] xl:grid-cols-[.4fr_1fr] gap-7 mb-12">
        <TravelingOptions />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-5">
          <TravelingAreaCard />
          <TravelingAreaCard />
          <TravelingAreaCard />
          <TravelingAreaCard />
        </div>
      </div>

      <div className="flex space-x-4 justify-center items-center flex-row">
        <button className="w-[36px] h-[36px] xl:w-[50px] xl:h-[50px] rounded-full border-2 -border-blue flex items-center justify-center text-2xl -text-blue">
          <MdKeyboardArrowLeft />
        </button>
        <button className="w-[36px] h-[36px] xl:w-[50px] xl:h-[50px] rounded-full border-2 -border-green flex items-center justify-center text-2xl text-white -bg-green">
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}

export default TravelingDetails;
