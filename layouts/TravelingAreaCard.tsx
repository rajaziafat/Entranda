import React from "react";
import { MdDone } from "react-icons/md";

function TravelingAreaCard() {
  return (
    <div className="border-[1px] -border-gray rounded-2xl p-4 xl:p-5 flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-6">
      <div className="flex-[.6]">
        <img
          src="images/place-img.png"
          className="w-full h-full object-cover rounded-xl"
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-4 md:mb-8 flex flex-col xl:flex-row space-y-5 xl:space-y-0">
          <div className="xl:w-[70%]">
            <h2 className="text-base xl:text-lg  font-bold -text-blue-300 mb-4">
              A secret river adventures tour. Explore the nature wonders of the
              Riviera Maya
            </h2>

            <p className="text-xs xl:text-sm  -text-gray leading-[1.6]">
              Explore the Rio Secreto Nature Reserve on this guided
              multi-activity tour. Hike, bike, swim and rappel the massive
              cavern in groups of 10, and enjoy an interactive experience inside
              the Room of Peace. All gear plus a buffet lunch provided. Choose
              pickup service from your Cancun…
            </p>
          </div>
          <div className="flex-1">
            <div className="flex flex-row xl:flex-col items-center xl:items-end justify-between xl:justify-start">
              <p className="text-xs -text-gray font-normal text-right">from</p>
              <p className="text-base  font-bold text-right">$119.00</p>
            </div>
          </div>
        </div>

        <div className="flex xl:items-center flex-wrap justify-between flex-col xl:flex-row space-y-4 xl:space-y-0">
          <div className="flex justify-between xl:justify-start space-x-8">
            <div>
              <p className="text-[10px] xl:text-xs mb-1 leading-[1] font-bold">
                Offered By
              </p>
              <p className="text-xs xl:text-sm font-bold">Hiking Njeriy</p>
            </div>
            <div>
              <p className="text-[10px] xl:text-xs mb-1 leading-[1] font-bold">
                Duration
              </p>
              <p className="text-xs xl:text-sm font-bold">11 Hours</p>
            </div>
          </div>
          <div className="space-y-1 flex flex-row items-center justify-between xl:flex-col xl:items-end xl:justify-start">
            <div className="flex items-center justify-end space-x-1 md:space-x-2">
              <MdDone className="-text-gray text-xs md:text-base xl:text-xl" />
              <p className="text-[10px] xl:text-xs text-right  -text-gray font-normal">
                Free Cancellation
              </p>
            </div>
            <div className="flex items-center justify-end space-x-1 md:space-x-2">
              <MdDone className="-text-gray text-xs md:text-base xl:text-xl" />
              <p className="text-[10px] xl:text-xs text-right  -text-gray font-normal">
                Equipment Included
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelingAreaCard;
