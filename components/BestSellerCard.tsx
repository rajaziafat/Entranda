import React from "react";
import Badge from "./Badge";
import { MdShare } from "react-icons/md";

interface Props {
  img: string;
  className?: string;
  title: string;
  subtitle: string;
}

function DestinationCard(props: Props) {
  return (
    <div className="flex flex-col items-center space-y-4 xl:space-y-6">
      <div
        className={`flex flex-col w-full h-[12rem] sm:h-[26vw] lg:h-[20vw] justify-end overflow-hidden rounded-[20px] relative z-[1] p-6 xl:p-8 ${props.className}`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent z-[-8] to-[rgba(0,0,0,.8)] pointer-events-none select-none"></div>

        <img
          src={props.img}
          className="w-full object-cover absolute top-0 left-0 h-full z-[-10] pointer-events-none select-none"
          alt=""
        />

        <Badge title="3.5" />

        <p className="text-xs xl:text-base text-white font-regular mb-3 xl:mb-4">
          10 Days | 09 Night
        </p>

        <div className="flex items-center justify-between">
          <div className="w-fit relative">
            <h2 className="w-fit text-lg xl:text-2xl text-white font-semibold mb-1">
              $895.50
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white"></div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="flex items-center justify-center rounded-full w-[26px] xl:w-[36px] h-[26px] xl:h-[36px] bg-white text-sm xl:text-lg ">
              <MdShare />
            </button>

            <button className="text-[10px] xl:text-sm text-white font-normal py-[6px] xl:py-[8px] px-3 xl:px-5 -bg-green rounded-full">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h4 className="text-base xl:text-lg text-center font-medium -text-blue-300 mb-2 xl:mb-3">
          {props.title}
        </h4>
        <p className="text-center -text-blue text-xs xl:text-sm font-normal leading-[1.7] max-w-[24em]">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}

export default DestinationCard;
