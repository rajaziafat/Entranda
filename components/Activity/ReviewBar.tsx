import React from "react";

interface Props {
  stars: string;
  strength: string;
  isFull: boolean;
}

function ReviewBar(props: Props) {
  return (
    <div className="flex items-center space-x-4">
      <h4 className="min-w-[4em] text-sm md:text-base xl:text-xl -text-blue font-bold">
        {props.stars}
      </h4>
      <div
        className={`h-[6px] ${
          props.isFull ? "-bg-green" : "-bg-gray"
        } rounded-full flex-1`}
      ></div>
      <h4 className="text-sm md:text-base xl:text-xl -text-blue font-bold">
        {props.strength}
      </h4>
    </div>
  );
}

export default ReviewBar;
