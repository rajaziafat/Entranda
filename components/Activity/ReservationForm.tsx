import Checkbox from "components/Checkbox";
import LabelAndInput from "components/LabelAndInput";
import React from "react";
import { BsCalendar3 } from "react-icons/bs";

function ReservationForm() {
  return (
    <div className="-bg-yellow-200 pb-10">
      <div className="-bg-green py-4 px-4 -text-yellow-200 text-sm sm:text-base font-bold mb-10">
        One-Click Reservation
      </div>

      <div className="px-5">
        <div className="grid gap-5 mb-6">
          <LabelAndInput
            label="Full Name"
            placeholder="Enter full name here."
          />
          <LabelAndInput label="Email" placeholder="Enter Email." />
          <LabelAndInput
            label="Phone Number"
            placeholder="Enter Phone Number."
          />
          <LabelAndInput
            label="Date"
            placeholder="Enter Date."
            Icon={() => (
              <BsCalendar3 className="text-black opacity-70 text-base lg:text-xl absolute top-1/2 -translate-y-1/2 right-4" />
            )}
          />
          <LabelAndInput
            label="Number of Participants"
            placeholder="Enter Number of Participants."
          />
        </div>

        <div className="flex space-x-4 mb-10">
          <div className="mt-1">
            <Checkbox type="checkbox" id="understand" />
          </div>
          <label
            htmlFor="understand"
            className="text-sm xl:text-base font-bold -text-blue-300"
          >
            I understand that this is not final reservation and an agent will
            contact to finish this process.
          </label>
        </div>

        <div className="flex justify-between mb-8">
          <p className="text-base font-bold -text-blue-300">Total</p>

          <div className="text-right">
            <p className="text-sm xl:text-base -text-blue-300">10 x 119.00</p>
            <h1 className="text-xl xl:text-2xl font-bold -text-blue-300">
              $1190.00
            </h1>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-2 -bg-green rounded-md -text-yellow-200 text-sm xl:text-base font-bold"
        >
          Make Reservation
        </button>
      </div>
    </div>
  );
}

export default ReservationForm;
