import React from "react";
import { GrLocation } from "react-icons/gr";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

function HeroPlaceSelector() {
  return (
    <div className="hero-selector-cards">
      <div>
        <h4 className="text-sm xl:text-xl font-semibold mb-1 xl:mb-3 text-underline">
          Location
        </h4>

        <div className="flex items-center space-x-4 w-full">
          <input
            type="text"
            placeholder="Enter Your Destination…"
            className="flex-1 w-full block text-xs xl:text-base font-normal border-none bg-transparent outline-none underline"
          />

          <span className="text-base lg:text-lg xl:text-xl -text-black">
            <GrLocation />
          </span>
        </div>
      </div>
      <div>
        <h4 className="text-sm xl:text-xl font-semibold mb-1 xl:mb-3 text-underline">
          Activity
        </h4>

        <div className="flex items-center space-x-4 w-full">
          <input
            type="text"
            placeholder="Bungee Jump"
            className="flex-1 w-full block text-xs xl:text-base font-normal border-none bg-transparent outline-none underline"
          />

          <button className="min-w-[16px] h-[16px] lg:min-w-[18px] lg:h-[18px] rounded-full border-[1px] -border-black flex items-center justify-center">
            <AiFillCaretDown className="text-[8px] lg:text-[10px] -text-black" />
          </button>
        </div>
      </div>
      <div>
        <h4 className="text-sm xl:text-xl font-semibold mb-1 xl:mb-3 text-underline">
          Date
        </h4>

        <div className="flex items-center space-x-4 w-full ">
          <input
            type="text"
            placeholder="Set date"
            className="flex-1 w-full block text-xs xl:text-base font-normal border-none bg-transparent outline-none underline"
          />

          <button className="w-[14px] lg:w-[16px] xl:w-[18px]">
            <img src="images/calendar.svg" className="w-full" alt="" />
          </button>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <button className="w-full py-3 md:w-[2.6rem] md:h-[2.6rem] lg:h-full lg:w-[3.4rem] xl:w-[4rem] rounded-xl lg:rounded-2xl text-base lg:text-xl text-white -bg-green flex items-center justify-center">
          <BiSearch />
        </button>
      </div>
    </div>
  );
}

export default HeroPlaceSelector;
