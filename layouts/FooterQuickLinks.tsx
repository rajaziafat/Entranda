import Link from "next/link";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function FooterQuickLinks() {
  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between text-center md:text-left">
      <div className="flex items-center space-y-2 sm:space-y-0 sm:space-x-5 flex-col sm:flex-row">
        <div className="flex items-center space-x-3 xl:space-x-5">
          <span className="text-xl xl:text-2xl -text-blue-300 flex">
            <AiOutlinePlusCircle />
          </span>
          <h1 className="text-base sm:text-lg xl:text-2xl font-medium -text-blue-300 uppercase">
            QUICK LINKS
          </h1>
        </div>
        <p className="text-xs xl:text-base  font-normal -text-blue">
          Explore more categories
        </p>
      </div>

      <div>
        <div className="text-xs sm:text-sm xl:text-base  font-normal flex items-center space-x-[1em]">
          <Link href="tel:0123-456-324-54">
            <a target="_blank">0123-456-324-54</a>
          </Link>{" "}
          <span>|</span>
          <Link href="mailto:hello@entrada.com">
            <a target="_blank">hello@entrada.com</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterQuickLinks;
