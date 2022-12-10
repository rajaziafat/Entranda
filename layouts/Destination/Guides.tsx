import GuideCard from "components/GuideCard";
import LineTitleBar from "components/LineTitleBar";
import React from "react";

function Guides() {
  return (
    <div className="container">
      <div className="mb-8 sm:mb-12">
        <LineTitleBar title="Guides in Petrela" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <GuideCard
          name="Filan Fisteku"
          location="Zbulo"
          willGuideAbout="Hiking, Mountain Biking"
        />
        <GuideCard
          name="Filan Fisteku"
          location="Vodafone"
          willGuideAbout="Hiking, Mountain Biking"
        />
        <GuideCard
          name="Filan Fisteku"
          location="Telecom"
          willGuideAbout="Hiking, Mountain Biking"
        />
      </div>
    </div>
  );
}

export default Guides;
