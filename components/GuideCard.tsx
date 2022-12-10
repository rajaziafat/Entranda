import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  willGuideAbout: string;
  location: string;
}

function GuideCard(props: Props) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative w-[4rem] h-[4rem] sm:w-20 sm:h-20 xl:w-24 xl:h-24 rounded-full">
        <Image
          layout="fill"
          src="/images/guide-person.png"
          loading="lazy"
          objectFit="fill"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-underline text-sm sm:text-base xl:text-xl font-medium -text-blue-300 mb-2">
          {props.name}
        </h1>
        <p className="-text-blue text-xs xl:text-base mb-1">
          {props.willGuideAbout}
        </p>
        <h5 className="-text-blue text-xs xl:text-base font-bold">
          {props.location}
        </h5>
      </div>
    </div>
  );
}

export default GuideCard;
