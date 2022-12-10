import React from "react";
import ReviewBar from "./ReviewBar";

function TotalReviews() {
  return (
    <div>
      <p className="activity-text mb-8 md:mb-12">
        Total review count and overall rating based on Outdoor.al and
        Tripadvisor reviews
      </p>

      <div className="grid gap-5">
        <ReviewBar stars="5 stars" strength="3" isFull={true} />
        <ReviewBar stars="4 stars" strength="0" isFull={false} />
        <ReviewBar stars="3 stars" strength="0" isFull={false} />
        <ReviewBar stars="2 stars" strength="0" isFull={false} />
        <ReviewBar stars="1 stars" strength="0" isFull={false} />
      </div>
    </div>
  );
}

export default TotalReviews;
