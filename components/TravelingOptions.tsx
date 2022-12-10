import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useState } from "react";
import { BsCalendar3 } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import CheckBoxWithTitle from "./CheckBoxWithTitle";
import TwoThumbs from "./TwoThumbs";
import { IoClose } from "react-icons/io5";

function TravelingOptions() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = OutsideClickDetector(() => setIsFilterOpen(false));

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isFilterOpen]);

  return (
    <div>
      <div className="flex items-center justify-between xl:hidden">
        <h1 className="text-lg -text-blue font-bold">Filter</h1>

        <button
          className="w-8 h-8 -bg-green rounded-md flex items-center justify-center"
          onClick={() => setIsFilterOpen((val) => !val)}
        >
          <FiFilter className="text-white text-lg" />
        </button>
      </div>

      <div
        className={`w-full h-screen xl:h-auto fixed xl:static top-0 left-0 flex justify-start z-[140] ${
          isFilterOpen
            ? "pointer-events-auto overflow-y-scroll xl:overflow-y-auto"
            : "pointer-events-none xl:pointer-events-auto overflow-y-hidden xl:overflow-y-auto"
        }`}
      >
        <div
          ref={filterRef}
          className={`TravelingOptions xl:border-[1px] xl:border-[#BFBFBF] rounded h-fit w-72 sm:w-80 xl:w-full bg-white transition-all duration-[.3s] ${
            isFilterOpen
              ? "translate-x-0"
              : "-translate-x-72 sm:-translate-x-80 xl:translate-x-0"
          }`}
        >
          <div className="-bg-green py-4 px-4 xl:px-6 mb-2 relative">
            <button
              className="w-fit absolute top-[1rem] right-[1rem] flex xl:hidden"
              onClick={() => setIsFilterOpen((val) => !val)}
            >
              <IoClose className="text-white text-2xl" />
            </button>

            <h2 className="text-base xl:text-xl -text-yellow-200 mb-4 font-bold">
              When are you traveling?
            </h2>

            <div className="py-2 px-4 rounded-md bg-white border-[1px] border-[#707070] flex items-center space-x-3">
              <BsCalendar3 className="text-black opacity-70 text-base xl:text-xl" />
              <p className="text-sm xl:text-lg text-black opacity-80 ">
                Select Dates{" "}
              </p>
            </div>
          </div>

          <div className="py-2 px-5">
            <div className="cards">
              <h1 className="card-title">Popular</h1>

              <div className="space-y-3">
                <CheckBoxWithTitle
                  id="good"
                  type="checkbox"
                  title="Good for avoiding crowds"
                  info={true}
                />
                <CheckBoxWithTitle
                  id="safety"
                  type="checkbox"
                  title="Taking safety measures"
                  info={true}
                />
                <CheckBoxWithTitle
                  id="virtual"
                  type="checkbox"
                  title="Virtual experiences"
                  info={true}
                />
                <CheckBoxWithTitle
                  id="kid"
                  type="checkbox"
                  title="Kid friendly"
                  info={true}
                />
              </div>
            </div>
            <div className="cards">
              <h1 className="card-title">Price</h1>
              <div className="mb-2">
                <TwoThumbs rtl={false} />
              </div>
            </div>
            <div className="cards">
              <h1 className="card-title">Duration</h1>

              <div className="space-y-3">
                <CheckBoxWithTitle
                  id="Up to 1 hour"
                  type="checkbox"
                  title="Up to 1 hour"
                  info={false}
                />
                <CheckBoxWithTitle
                  id="1 to 4 hours"
                  type="checkbox"
                  title="1 to 4 hours"
                  info={false}
                />
                <CheckBoxWithTitle
                  id="4 hours to 1 day"
                  type="checkbox"
                  title="4 hours to 1 day"
                  info={false}
                />
                <CheckBoxWithTitle
                  id="1 to 3 days"
                  type="checkbox"
                  title="1 to 3 days"
                  info={false}
                />
                <CheckBoxWithTitle
                  id="3+ days"
                  type="checkbox"
                  title="3+ days"
                  info={false}
                />
              </div>
            </div>
            <div className="cards">
              <h1 className="card-title">Time of the Day</h1>

              <div className="space-y-3">
                <CheckBoxWithTitle
                  id="6am—12pm"
                  type="checkbox"
                  title="6am—12pm"
                  info={false}
                />
                <CheckBoxWithTitle
                  id="12pm—5pm"
                  type="checkbox"
                  title="12pm—5pm"
                  info={false}
                />
                <CheckBoxWithTitle
                  id="5pm—12am"
                  type="checkbox"
                  title="5pm—12am"
                  info={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`black-screen z-[120] ${isFilterOpen ? "show" : ""}`}
      ></div>
    </div>
  );
}

export default TravelingOptions;
