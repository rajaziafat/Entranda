import React from "react";
import Badge from "./Badge";

interface Props {
  img: string;
}

function TrendingCard(props: Props) {
  return (
    <div className="flex-1 rounded-[20px] border-[1px] border-[#e6e6e65d] shadow-[1px_1px_4px_rgba(0,0,0,.2)] bg-white">
      <div className="p-3 xl:p-4 pb-0">
        <div className="rounded-[20px] overflow-hidden flex relative">
          <Badge title="4.5" bgColor="#FEF2DE" />
          <img src={props.img} className="w-full" alt="" />
        </div>
      </div>

      <div className="p-5 xl:p-8 pt-3 xl:pt-0">
        <div className="mb-6 ">
          <h2 className="text-sm xl:text-lg  font-medium mb-1">
            Mountain Hiking Tour
          </h2>
          <p className="-text-blue text-xs xl:text-sm  font-normal">
            12 Places | 3 Activities
          </p>
        </div>

        <div className="flex items-center justify-between mb-8 lg:mb-10">
          <h1 className="text-lg xl:text-2xl font-semibold -text-blue-300 text-underline">
            $895.50
          </h1>

          <button className="text-white -bg-blue-300 py-[6px] xl:py-[8px] px-3 xl:px-5 rounded-[2rem] text-[10px] xl:text-sm ">
            Book Now
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="images/C-icon.png"
            className="w-[30px] xl:w-[40px]"
            alt=""
          />
          <div>
            <h6 className="text-sm  font-medium -text-blue-300 mb-[2px] xl:mb-1">
              Advantages
            </h6>
            <p className="text-[10px] xl:text-xs  font-medium -text-blue">
              Hiking Trips . Mountain . Safari
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
