import React from "react";

function BookNow() {
  return (
    <div>
      <div className="container">
        <div className="rounded-[12px] -bg-green p-10 md:p-14 xl:p-[72px] text-center relative z-[1]">
          <img
            src="images/book-now-bg.png"
            alt=""
            className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none select-none object-cover "
          />
          <h1
            className="text-center text-xl md:text-3xl xl:text-[40px] text-white font-medium mb-8 xl:mb-9"
            style={{ lineHeight: "1.4" }}
          >
            Tour the World from Your Couch with <br /> #ExperienceLive!
          </h1>

          <h2 className="text-xs md:text-base xl:text-[20px] text-white text-center font-normal mb-10 xl:mb-12">
            To kickstart your digital adventures with MakeMyTrip,
          </h2>

          <button className="-text-green bg-white rounded-full py-2 px-5 xl:py-3 xl:px-6 text-xs md:text-sm xl:text-lg ">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
