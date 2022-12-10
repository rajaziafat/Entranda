import React from "react";
import Badge from "./Badge";

interface Props {
  img: string;
  className?: string;
  title: string;
  subtitle: string;
  link?: string;
}

function DestinationCard(props: Props) {
  return (
    <div
      className={`flex items-end overflow-hidden rounded-[20px] lg:rounded-[26px] xl:rounded-[30px] relative z-[1] p-6 lg:p-8 ${props.className}`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent z-[-8] to-[rgba(0,0,0,.8)] pointer-events-none select-none"></div>

      <img
        src={props.img}
        className="w-full object-cover absolute top-0 left-0 h-full z-[-10] pointer-events-none select-none"
        alt=""
      />

      <Badge
        title="3.5"
        position={{
          top: "top-5",
          left: "left-5",
          right: "right-[unset]",
        }}
      />

      <div>
        <h2 className="text-base lg:text-lg text-white font-medium mb-1">
          {props.title}
        </h2>
        <p className="text-[10px] lg:text-xs text-white font-normal">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}

export default DestinationCard;
