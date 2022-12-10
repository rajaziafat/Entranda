import React from "react";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import PlaceReviews from "../../components/Activity/PlaceReviews";
import ReservationForm from "components/Activity/ReservationForm";

interface Item_Interface {
  title: string;
  included: boolean;
}

const Item = (props: Item_Interface) => {
  return (
    <div className="flex items-center space-x-2">
      {props.included ? (
        <MdDone className="text-lg -text-blue" />
      ) : (
        <IoMdClose className="text-lg -text-blue" />
      )}
      <p className="activity-text">{props.title}</p>
    </div>
  );
};

function PlaceDetails() {
  return (
    <div>
      <div className="container PlaceDetails grid xl:grid-cols-[1fr_.5fr] gap-14 xl:gap-10">
        <div>
          <div className="mb-100px">
            <div className="activity-divider">
              <h1 className="activity-title">Overview</h1>

              <p className="activity-text">
                Explore the Rio Secreto Nature Reserve on this guided
                multi-activity tour. Hike, bike, swim and rappel the massive
                cavern in groups of 10, and enjoy an interactive experience
                inside the Room of Peace. All gear plus a buffet lunch provided.
                Choose pickup service from your Cancun or Riviera Maya hotel, or
                meet your guide at Rio Secreto directly. Guided visit to the Rio
                Secreto Nature Reserve including Room of Peace Hike, bike,
                rappel, swim and snorkel with all equipment provided Lockers are
                available to store personal belongings Includes a buffet lunch
                with water Pickup service from Cancun and Riviera Maya hotels
              </p>
            </div>

            <div className="activity-divider">
              <h1 className="activity-title">Overview</h1>

              <div className="grid grid-cols-1 md:grid-cols-3">
                <div>
                  <Item included={true} title="Food" />
                  <Item included={true} title="Transportation" />
                  <Item included={true} title="Guide" />
                  <Item included={true} title="Pictures" />
                </div>
                <div>
                  <Item included={false} title="Drinks" />
                </div>
              </div>
            </div>

            <div className="activity-divider">
              <div className="mb-8">
                <h1 className="activity-title">Meeting And Pickup</h1>
                <p className="activity-text">
                  You can head directly to the meeting point, or request pickup
                </p>
              </div>
              <div className="mb-8">
                <h1 className="activity-title">Meeting point</h1>
                <p className="activity-text">
                  You can head directly to the meeting point, or request pickup
                </p>
              </div>
              <div>
                <h1 className="activity-title">More Information</h1>
                <p className="activity-text">
                  You can head directly to the meeting point, or request pickup
                </p>
              </div>
            </div>

            <div className="activity-divider">
              <h1 className="activity-title">What To Expect</h1>
              <p className="activity-text">
                Explore the Rio Secreto Nature Reserve on this guided
                multi-activity tour. Hike, bike, swim and rappel the massive
                cavern in groups of 10, and enjoy an interactive experience
                inside the Room of Peace. All gear plus a buffet lunch provided.
                Choose pickup service from your Cancun or Riviera Maya hotel, or
                meet your guide at Rio Secreto directly. Guided visit to the Rio
                Secreto Nature Reserve including Room of Peace Hike, bike,
                rappel, swim and snorkel with all equipment provided Lockers are
                available to store personal belongings Includes a buffet lunch
                with water Pickup service from Cancun and Riviera Maya hotels
              </p>
            </div>

            <div>
              <h1 className="activity-title">Cancellation Policy</h1>
              <p className="activity-text">
                Explore the Rio Secreto Nature Reserve on this guided
                multi-activity tour. Hike, bike, swim and rappel the massive
                cavern in groups of 10, and enjoy an interactive experience
                inside the Room of Peace. All gear plus a buffet lunch provided.
                Choose pickup service from your Cancun or Riviera Maya hotel, or
                meet your guide at Rio Secreto directly. Guided visit to the Rio
                Secreto Nature Reserve including Room of Peace Hike, bike,
                rappel, swim and snorkel with all equipment provided Lockers are
                available to store personal belongings Includes a buffet lunch
                with water Pickup service from Cancun and Riviera Maya hotels
              </p>
            </div>
          </div>

          <PlaceReviews />
        </div>

        <div>
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;
