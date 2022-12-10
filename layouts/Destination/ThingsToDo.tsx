import LineTitleBar from "components/LineTitleBar";
import TrendingCard from "components/TrendingCard";
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function ThingsToDo() {
  return (
    <div>
      <div className="container mb-6 md:mb-12">
        <LineTitleBar title="Things to do in Petrela" />
      </div>

      <div className="py-12 lg:py-16 -bg-yellow-200">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 mb-10 sm:mb-20">
            <TrendingCard img="images/trending-img-1.png" />
            <TrendingCard img="images/trending-img-2.png" />
            <TrendingCard img="images/trending-img-3.png" />
            <TrendingCard img="images/trending-img-1.png" />
            <TrendingCard img="images/trending-img-2.png" />
            <TrendingCard img="images/trending-img-3.png" />
            <TrendingCard img="images/trending-img-1.png" />
            <TrendingCard img="images/trending-img-2.png" />
            <TrendingCard img="images/trending-img-3.png" />
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
      </div>
    </div>
  );
}

export default ThingsToDo;
