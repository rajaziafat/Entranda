import Friendly from "components/Activity/Friendly";
import PlanDetails from "components/Activity/PlanDetails";
import Ranking from "components/Activity/Ranking";
import React from "react";

function Place() {
  return (
    <div>
      <div className="container">
        <div className="mb-2 sm:mb-4">
          <Ranking />
        </div>
        <div className="mb-10">
          <PlanDetails />
        </div>
        <Friendly />
      </div>
    </div>
  );
}

export default Place;
