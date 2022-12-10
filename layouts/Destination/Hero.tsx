import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { BiSun } from "react-icons/bi";
import HeroPlaceSelector from "layouts/HeroPlaceSelector";

function Hero() {
  return (
    <div className="container pb-14 md:pb-20 py-4 sm:py-6 md:py-12 sm:px-12 md:px-20 flex-1 flex flex-col justify-center">
      <div className="mb-10 xl:mb-14">
        <h4 className="text-sm md:text-base xl:text-xl text-white font-normal mb-3">
          - Justinian Castle of
        </h4>
        <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold text-white">
          Petrela
        </h1>
      </div>

      <div className="">
        <div className="mb-8 flex item-center justify-between">
          <div className="flex space-x-2 items-center">
            <button className="w-[28px] md:w-[30px] xl:w-[38px] h-[28px] md:h-[30px] xl:h-[38px] rounded-full border-2 border-white flex items-center justify-center text-sm md:text-base text-white">
              <FiArrowLeft />
            </button>
            <button className="w-[28px] md:w-[30px] xl:w-[38px] h-[28px] md:h-[30px] xl:h-[38px] rounded-full border-2 border-white flex items-center justify-center text-sm md:text-base text-white">
              <FiArrowRight />
            </button>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <BiSun className="text-white text-2xl md:text-3xl xl:text-3xl" />
            <p className="text-sm md:text-base xl:text-lg text-white font-medium">
              -02 C Very Cold
            </p>
          </div>
        </div>

        <HeroPlaceSelector />
      </div>
    </div>
  );
}

export default Hero;
