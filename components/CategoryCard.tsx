import React from "react";
import Badge from "./Badge";

interface Props {
  icon: string;
  title: string;
  subtitle: string;
}

function CategoryCard(props: Props) {
  return (
    <div className="relative flex-1 h-[220px] sm:h-[260px] lg:h-[295px] p-8 flex flex-col justify-end border-[1px] border-[#e6e6e65d] shadow-[1px_1px_4px_rgba(0,0,0,.2)]">
      <img src={props.icon} className="w-[40px] lg:w-[56px] mb-4" alt="" />

      <Badge title="4.2" />

      <h5 className="text-base lg:text-lg -text-blue-300 mb-2 font-medium">
        {props.title}
      </h5>
      <p className="text-xs lg:text-sm -text-blue font-normal">
        {props.subtitle}
      </p>
    </div>
  );
}

export default CategoryCard;
