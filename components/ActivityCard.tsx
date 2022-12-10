import React from "react";

export default function ActivityCard() {
  return (
    <div className="xl:flex-1 rounded-full border-2 -border-green flex items-center space-x-2 xl:space-x-3 border-l-0 shadow-[0_.1rem_10px_rgba(0,0,0,.3)] m-2 xl:m-0 pr-6 xl:pr-0">
      <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full border-2 -border-green flex items-center justify-center ">
        <img src="images/hiking-icon.svg" className="w-[54%]" alt="" />
      </div>

      <div className="flex-1">
        <p className="text-xs xl:text-sm text-black opacity-80 mb-[0.14] leading-[1]">
          Hiking
        </p>
        <p className="text-[10px] xl:text-xs text-black opacity-80 italic">
          3 Activities
        </p>
      </div>
    </div>
  );
}
