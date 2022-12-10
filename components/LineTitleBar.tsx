import React from "react";

interface Props {
  title: string;
}

function LineTitleBar({ title }: Props) {
  return (
    <div className="text-center flex items-center space-x-6">
      <div className="flex-1 h-[1px] -bg-gray"></div>
      <p className="text-center text-lg xl:text-2xl font-normal -text-blue">
        {title}
      </p>
      <div className="flex-1 h-[1px] -bg-gray"></div>
    </div>
  );
}

export default LineTitleBar;
