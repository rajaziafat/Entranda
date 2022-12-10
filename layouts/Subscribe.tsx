import React from "react";
import SubscribeForm from "./SubscribeForm";

function Subscribe() {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-10 sm:items-center">
          <div className="flex-1 relative">
            <img
              src="images/dots.png"
              className="absolute top-[-6%] left-[-5.4%] z-[-2] w-[10%]"
              alt=""
            />
            <img src="images/subscribe-banner.png" className="w-full" alt="" />
          </div>

          <div className="flex-1 max-w-[26rem] sm:max-w-none">
            <div className="mb-10 xl:mb-16">
              <h5 className="font-normal text-sm xl:text-lg  -text-green mb-2">
                Subscribe For Offers
              </h5>
              <h1 className="font-semibold -text-blue-300 text-2xl xl:text-4xl  leading-[1.2] mb-6">
                Adventures Calling You Guys!
              </h1>

              <h4 className="text-sm xl:text-lg  font-normal -text-blue ">
                The Brilliant reasons Entrada should be your one-stop-shop!
              </h4>
            </div>

            <SubscribeForm />

            <p className="text-gray-400 text-xs xl:text-sm  font-normal">
              Expect a reply in 2-3 working days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
