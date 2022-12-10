import Link from "next/link";
import React from "react";

interface Props {
  img: string;
  cardIndex: string;
}

function TourGuideCard({ img = "", cardIndex = "" }: Props) {
  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8">
      <div className="w-full h-[260px] sm:h-auto sm:max-w-[240px] lg:max-w-[28vw] xl:max-w-[400px] rounded-[20px] overflow-hidden relative">
        {img ? (
          <img
            src={img}
            className="w-full h-full object-cover object-center"
            alt=""
          />
        ) : null}

        <div className="absolute bottom-0 left-0 text-sm xl:text-lg w-[2.8rem] h-[2.8rem] lg:w-[60px] lg:h-[60px] rounded-tr-[20px] bg-white flex items-center justify-center font-medium -text-blue-300">
          {cardIndex}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between space-y-8 sm:space-y-0 py-3 lg:py-8">
        <div>
          <h4 className="text-xs lg:text-sm xl:text-lg -text-green mb-2 lg:mb-4 font-normal">
            Adventure Guru
          </h4>

          <h1 className="text-base lg:text-xl xl:text-3xl font-medium -text-blue-300">
            Martina James Junior
          </h1>
        </div>

        <div className="flex space-x-[30px]">
          <div className="flex-1">
            <h5 className="text-base xl:text-lg -text-blue-300 mb-2 font-normal">
              About
            </h5>
            <p className="leading-[1.7] -text-blue text-[10px] lg:text-xs xl:text-sm font-normal">
              Check Out Daily Deals and Promotion on hotels. Easy & Fast
              Booking.
            </p>
          </div>
          <div className="flex-1">
            <h5 className="text-base xl:text-lg -text-blue-300 mb-2 font-normal">
              Journey
            </h5>
            <p className="leading-[1.7] -text-blue text-xs xl:text-sm font-normal">
              12 Countries and 235 Cities In 6 Years.
            </p>
          </div>
        </div>

        <div className="flex space-x-4 lg:space-x-[32px]">
          <Link href="/">
            <a className="text-sm xl:text-base font-normal">Facebook</a>
          </Link>
          <Link href="/">
            <a className="text-sm xl:text-base font-normal">Instagram</a>
          </Link>
          <Link href="/">
            <a className="text-sm xl:text-base font-normal">Twitter</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TourGuideCard;
