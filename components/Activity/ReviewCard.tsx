import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import ResponseCard from "./ResponseCard";

function ReviewCard() {
  return (
    <div>
      <div className="bg-[#F2F2F2] py-5 sm:py-7 px-5 sm:px-7">
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 xl:w-5 h-4 xl:h-5 rounded-full -bg-green"></div>
              <div className="w-4 xl:w-5 h-4 xl:h-5 rounded-full -bg-green"></div>
              <div className="w-4 xl:w-5 h-4 xl:h-5 rounded-full -bg-green"></div>
              <div className="w-4 xl:w-5 h-4 xl:h-5 rounded-full -bg-green"></div>
              <div className="w-4 xl:w-5 h-4 xl:h-5 rounded-full -bg-green"></div>
            </div>

            <h4 className="text-sm sm:text-base xl:text-lg -text-gray font-bold">
              Best tour guide Driss
            </h4>
          </div>

          <p className="text-xs sm:text-sm xl:text-base -text-gray">
            A TripAdvisor Review
          </p>
        </div>

        <div className="mb-8 sm:mb-12">
          <p className="activity-text max-w-[40em]">
            My favorite part of the trip was going to this cave with the best
            tour guide Driss. I enjoy every minute and learn a lot through out.
          </p>
        </div>

        <div className="grid gap-4">
          <ResponseCard />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="flex items-center space-x-2">
          <FiThumbsUp className="-text-blue-300 text-sm sm:text-base xl:text-lg" />
          <p className="text-xs sm:text-sm xl:text-base -text-blue-300 leading-[1] mt-[.1em]">
            Helpful Review?
          </p>
        </button>
      </div>
    </div>
  );
}

export default ReviewCard;
