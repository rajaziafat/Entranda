import React from "react";
import { FaRegComments } from "react-icons/fa";

interface Props {
  title: string;
}

function Navigator(props: Props) {
  return (
    <div className="container flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-between">
      <div className="text-[10px] lg:text-sm xl:text-base text-black opacity-80 text-center sm:text-left">
        {props.title}
      </div>
      <div className="flex items-center space-x-3">
        <FaRegComments className="text-black opacity-60 text-base lg:text-lg xl:text-xl" />
        <p className="text-xs lg:text-sm xl:text-base text-black opacity-80 leading-[1]">
          Need Help?
        </p>
      </div>
    </div>
  );
}

export default Navigator;
