import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import HeroPlaceSelector from "./HeroPlaceSelector";

function Hero() {
  return (
    <header className="pt-4 sm:pt-8">
      <div className="container">
        <div className="relative pb-0 md:pb-[14%] xl:pb-[10%] py-[2.2rem] sm:py-[3rem] px-10 sm:px-12 md:py-[4rem] md:px-16 xl:py-[5rem] xl:px-24 h-full">
          <img
            src="images/hero-bg.png"
            className="absolute top-0 left-0 w-full h-[80%] md:h-[100%] z-[-10] rounded-3xl sm:rounded-[34px] object-cover"
            alt=""
          />

          <h3 className="text-sm lg:text-base xl:text-lg  text-white font-normal mb-4 md:mb-6">
            - The Himalayan Mountain Ranges
          </h3>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 lg:mb-16">
            Nepal Country
          </h1>

          <div className="flex justify-between flex-col sm:flex-row space-y-8 sm:space-y-0">
            <div className="flex items-center justify-between flex-row sm:items-start sm:justify-start sm:flex-col">
              <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg  text-white font-normal sm:mb-4 xl:mb-6">
                -20℃ Very Cool
              </h3>

              <div className="flex space-x-4 items-center">
                <button className="w-[28px] md:w-[34px] xl:w-[38px] h-[28px] md:h-[34px] xl:h-[38px] rounded-full border-2 border-white flex items-center justify-center text-sm md:text-lg  text-white">
                  <FiArrowLeft />
                </button>
                <button className="w-[28px] md:w-[34px] xl:w-[38px] h-[28px] md:h-[34px] xl:h-[38px] rounded-full border-2 border-white flex items-center justify-center text-sm md:text-lg  text-white">
                  <FiArrowRight />
                </button>
              </div>
            </div>

            <div>
              <div className="flex space-y-3 sm:space-y-0 sm:space-x-[1rem] flex-col sm:flex-row">
                <div className="w-[38px] md:w-[44px] xl:w-[54px] h-[38px] md:h-[44px] xl:h-[54px] bg-white rounded-full flex items-center justify-center">
                  <img
                    src="images/payment-cards.svg"
                    className="w-[50%]"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg  text-white font-normal max-w-[15em] mb-2 sm:mb-3">
                    We Accept Payment Through All Cards & Banking
                  </p>
                  <button className="underline text-xs sm:text-sm lg:text-base xl:text-lg  text-white font-bold">
                    Book Now!
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:absolute  md:bottom-[-14%] left-[50%] md:translate-x-[-50%] mt-12 md:mt-0 md:w-[84%]">
            <HeroPlaceSelector />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
