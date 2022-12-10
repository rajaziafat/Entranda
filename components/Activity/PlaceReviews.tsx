import TotalReviews from "components/Activity/TotalReviews";
import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewCard from "./ReviewCard";

function PlaceReviews() {
  return (
    <div>
      <div className="flex items-center space-x-4 lg:space-x-8 mb-3">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold -text-blue">
          5.0
        </h1>
        <div className="flex items-center space-x-[.4rem]">
          <FaStar
            color="#ED8A19"
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
          />
          <FaStar
            color="#ED8A19"
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
          />
          <FaStar
            color="#ED8A19"
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
          />
          <FaStar
            color="#ED8A19"
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
          />
          <FaStar
            color="#ED8A19"
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
          />
        </div>
      </div>
      <p className="activity-text mb-5 md:mb-12">128 Reviews</p>

      <div className="mb-100px">
        <TotalReviews />
      </div>

      <div className="grid gap-8">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}

export default PlaceReviews;
