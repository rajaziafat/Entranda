import React from "react";
import { HiOutlineMail } from "react-icons/hi";

function SubscribeForm() {
  return (
    <form className="flex shadow-[0_16px_70px_-10px_rgba(0,97,92,.3)] mb-8 xl:mb-12">
      <div className="flex-1 relative">
        <span className="absolute top-[50%] left-[8%] translate-y-[-50%] text-lg md:text-xl xl:text-2xl text-gray-400">
          <HiOutlineMail />
        </span>
        <input
          type="text"
          placeholder="Enter your email"
          className="text-xs md:text-sm xl:text-base -text-blue font-normal border-none outline-none bg-white w-full h-full py-4 xl:py-[26px] px-6 pl-[22%] md:pl-[18%]"
        />
      </div>
      <button
        type="submit"
        className="-bg-green text-white text-xs md:text-sm xl:text-lg  font-medium px-6 xl:px-8"
      >
        Send Now!
      </button>
    </form>
  );
}

export default SubscribeForm;
