import LabelAndInput from "components/LabelAndInput";
import Image from "next/image";
import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

function PlanDetails() {
  return (
    <div className="grid grid-cols-[4rem_1fr] sm:grid-cols-[8rem_1fr] lg:grid-cols-[14rem_1fr] grid-rows-[14rem_auto] sm:grid-rows-[26rem_auto] lg:grid-rows-[30rem_auto] xl:grid-rows-none xl:grid-cols-[14rem_1fr_.6fr] gap-2 sm:gap-4">
      <div className="gap-2 sm:gap-4 grid grid-rows-4">
        <div className="relative">
          <Image
            src="/images/plan-img.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="relative">
          <Image
            src="/images/plan-img.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="relative">
          <Image
            src="/images/plan-img.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="relative">
          <Image
            src="/images/plan-img.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
      <div className="relative">
        <Image
          className=""
          layout="fill"
          src="/images/plan-img.png"
          objectFit="cover"
          alt=""
        />
      </div>
      <div className="col-span-2 xl:col-span-1">
        <div className="-text-yellow -bg-yellow-200 rounded-lg w-full p-2 text-center border-[1px] -border-yellow text-xs sm:text-sm mb-4">
          Last Few Spots
        </div>

        <div className="mb-6 sm:mb-8 flex flex-row items-center justify-between sm:flex-col sm:justify-start sm:items-end">
          <p className="-text-gray text-base sm:text-lg xl:text-xl font-normal text-right">
            from
          </p>
          <p className="text-xl sm:text-2xl xl:text-3xl font-bold -text-blue-300 text-right">
            $119.00
          </p>
        </div>

        <div className="bg-[#F4F4F4] py-4 px-4 mb-4">
          <h4 className="text-base md:text-lg xl:text-xl font-bold -text-blue mb-4">
            Select Date and Travelers
          </h4>

          <form className="grid gap-4">
            <LabelAndInput
              placeholder="Enter full name here."
              Icon={() => (
                <BsCalendar3 className="text-black opacity-70 text-base sm:text-xl absolute top-1/2 -translate-y-1/2 right-4" />
              )}
            />
            <LabelAndInput
              placeholder="2 Adults"
              Icon={() => (
                <HiOutlineUserGroup className="text-black opacity-70 text-base sm:text-xl absolute top-1/2 -translate-y-1/2 right-4" />
              )}
            />

            <button
              type="submit"
              className="w-full p-2 -bg-green rounded-md -text-yellow-200 text-sm xl:text-base font-bold"
            >
              Check Availability
            </button>
          </form>
        </div>

        <img src="images/map.png" className="w-full" alt="" />
      </div>
    </div>
  );
}

export default PlanDetails;
