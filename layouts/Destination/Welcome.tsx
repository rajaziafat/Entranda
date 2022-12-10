import ActivityCard from "components/ActivityCard";
import React from "react";

function Welcome() {
  return (
    <div className="">
      <div className="container">
        <div className="relative w-fit mx-auto flex flex-col items-center space-y-4 lg:space-y-6">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
            Welcome to Petrela
          </h1>
          <div className="w-[60%] h-[1px] -bg-gray rotate-[-2deg]"></div>
        </div>

        <p className="text-xs xl:text-base mx-auto xl:max-w-[60em] mt-6 lg:mt-9 mb-10 lg:mb-20 -text-blue leading-[1.8] text-center">
          Mexico conjures images of ancient ruins, colonial towns, endless
          beaches, and cities pulsing with life. The country’s two long
          coastlines lure travelers with countless opportunities for fun in the
          sun. On the west coast, the Pacific Pipeline—legendary among
          surfers—runs from Baja all the way past Puerto Escondido, while the
          Caribbean side is better known for spectacular coral reefs and warmer,
          gentler seas. On either coast, you’ll find boating, parasailing,
          diving, snorkeling, fishing, kayaking, and more. Whether you prefer
          the flashy resorts of Los Cabos and Cancun, upscale Playa del Carmen,
          or the more traditional glamor of Puerto Vallarta and Acapulco, Mexico
          has a beach town for you. Blessed with natural beauty and a rich
          heritage, Mexico also boasts the largest number of UNESCO-listed sites
          in North America, including the Maya ruins of Palenque, Chichen Itza,
          Tulum, and Coba. From grand colonial cities like Puebla and Oaxaca, to
          the many pueblos mágicos (magical towns) such as Taxco and Valladolid,
          Mexico’s colorful streets and regional cuisines never fail to enchant.
          The country’s abundant tropical rainforests are home to a variety of
          wildlife, and eco-adventure parks like Xel-ha on the Riviera Maya pack
          in family-style fun with ziplining, hiking, and guided safaris. Many
          visitors arrive via Mexico City, and while the sprawling capital can
          be overwhelming at first, don’t be deterred. Cultural riches await
          you, including a world-class art scene, historical museums,
          cosmopolitan dining, nonstop nightlife, and easy access to the
          Teotihuacan pyramids.
        </p>

        <div className="flex flex-wrap items-center justify-center xl:justify-between xl:space-x-8">
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
